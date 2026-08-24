import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.error('Bloco script babel não encontrado');
  process.exit(1);
}

const code = scriptMatch[1];

// Vamos verificar se há erros de sintaxe básica ou referências inválidas
console.log('Total de linhas no script:', code.split('\n').length);

// Procurar padrões perigosos como `class=` em vez de `className=`, ou tags não fechadas
const classAttrs = code.match(/\bclass\s*=\s*["']/g);
if (classAttrs) {
  console.log('ATENÇÃO: Foram encontrados atributos `class=` em JSX:', classAttrs.length);
}

// Procurar tags JSX ou expressões com erro
console.log('Script pronto para inspeção');
