import { execSync, spawn } from 'child_process';
import path from 'path';

console.log('📦 Instalando dependências npm...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependências instaladas!');
} catch (e) {
  console.log('Aviso ao instalar:', e.message);
}

console.log('🚀 Iniciando servidor Vite...');
const child = spawn('npx', ['vite', '--host', '--port', '5173'], {
  stdio: 'inherit',
  shell: true,
});

child.on('error', (err) => {
  console.error('Erro ao iniciar Vite:', err);
});
