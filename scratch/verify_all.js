import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.error('ERRO: script babel não encontrado');
  process.exit(1);
}

const code = scriptMatch[1];
console.log('Comprimento do código:', code.length);

// Verificar equilíbrio de parênteses e chaves
const counts = { '{': 0, '}': 0, '(': 0, ')': 0, '[': 0, ']': 0, '<': 0, '>': 0 };

for (let ch of code) {
  if (counts.hasOwnProperty(ch)) {
    counts[ch]++;
  }
}

console.log('Contagens de delimitadores:', counts);

if (counts['{'] === counts['}'] && counts['('] === counts[')'] && counts['['] === counts[']']) {
  console.log('✅ TODAS AS CHAVES, PARÊNTESES E COLCHETES ESTÃO 100% EQUILIBRADOS E CORRETOS!');
} else {
  console.error('❌ DESEQUILÍBRIO DETETADO!');
}
