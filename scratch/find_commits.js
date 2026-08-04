const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function readObject(sha) {
  const dir = sha.slice(0, 2);
  const file = sha.slice(2);
  const filePath = path.join('.git', 'objects', dir, file);
  if (!fs.existsSync(filePath)) return null;
  const compressed = fs.readFileSync(filePath);
  const decompressed = zlib.inflateSync(compressed);
  return decompressed;
}

function getCommitTree(commitSha) {
  const raw = readObject(commitSha);
  if (!raw) return null;
  const str = raw.toString('utf8');
  const treeMatch = str.match(/tree ([0-9a-f]{40})/);
  return treeMatch ? treeMatch[1] : null;
}

function parseTree(treeSha) {
  const raw = readObject(treeSha);
  if (!raw) return [];
  // parse binary tree format: [mode] [name]\0[20-byte sha]
  // Header ends at first null byte after type size
  const nullIdx = raw.indexOf(0);
  let pos = nullIdx + 1;
  const entries = [];
  while (pos < raw.length) {
    const spaceIdx = raw.indexOf(32, pos);
    const mode = raw.toString('utf8', pos, spaceIdx);
    const nullByteIdx = raw.indexOf(0, spaceIdx);
    const name = raw.toString('utf8', spaceIdx + 1, nullByteIdx);
    const shaHex = raw.subarray(nullByteIdx + 1, nullByteIdx + 21).toString('hex');
    entries.push({ mode, name, sha: shaHex });
    pos = nullByteIdx + 21;
  }
  return entries;
}

const commits = [
  '8ee2119740821f2d8fe39095533ce464d8554260',
  'c81536938179f0adc7bc73a23b611cd440ed3fbd',
  'c1078fe869f220c0209a25773cca4aec412cf472',
  '2c43c27bbe21b07b2144eeed94d2450515102ddc',
  'ca7eac5e3a0e8c26907ebef8caf8b0b2d9b04cfd'
];

commits.forEach((c, idx) => {
  const treeSha = getCommitTree(c);
  if (!treeSha) {
    console.log(`Commit ${idx + 1} (${c.slice(0, 7)}): No tree object found loose`);
    return;
  }
  const entries = parseTree(treeSha);
  const indexEntry = entries.find(e => e.name === 'index.html');
  if (indexEntry) {
    const content = readObject(indexEntry.sha);
    const str = content ? content.toString('utf8') : '';
    // strip git object header "blob [size]\0"
    const headerEnd = str.indexOf('\0');
    const html = str.slice(headerEnd + 1);
    console.log(`Commit ${idx + 1} (${c.slice(0, 7)}): index.html blob ${indexEntry.sha.slice(0, 7)}, lines: ${html.split('\n').length}, size: ${html.length}`);
    fs.writeFileSync(`commit_${idx + 1}_index.html`, html);
  }
});
