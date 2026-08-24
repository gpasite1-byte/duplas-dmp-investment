import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar index.html para dist/index.html
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));

// Copiar preview.html se existir
if (fs.existsSync(path.resolve('preview.html'))) {
  fs.copyFileSync(path.resolve('preview.html'), path.join(distDir, 'preview.html'));
}

console.log('✅ Build estático concluído com sucesso em dist/!');
