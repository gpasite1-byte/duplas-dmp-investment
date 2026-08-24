import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.error('Nenhum bloco babel encontrado em index.html!');
  process.exit(1);
}

const jsCode = scriptMatch[1];
console.log('Tamanho do código JS/JSX:', jsCode.length, 'caracteres.');

// Vamos verificar se há erros de parênteses, chaves ou sintaxe
try {
  // Verificações básicas de equilíbrio
  const openBraces = (jsCode.match(/{/g) || []).length;
  const closeBraces = (jsCode.match(/}/g) || []).length;
  console.log('Chaves { :', openBraces, 'vs } :', closeBraces);

  const openParens = (jsCode.match(/\(/g) || []).length;
  const closeParens = (jsCode.match(/\)/g) || []).length;
  console.log('Parênteses ( :', openParens, 'vs ) :', closeParens);

  const openBrackets = (jsCode.match(/\[/g) || []).length;
  const closeBrackets = (jsCode.match(/]/g) || []).length;
  console.log('Colchetes [ :', openBrackets, 'vs ] :', closeBrackets);
} catch (e) {
  console.error('Erro na análise:', e);
}
