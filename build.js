import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Função auxiliar para copiar pastas recursivamente
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copiar index.html
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));

// Copiar preview.html
if (fs.existsSync(path.resolve('preview.html'))) {
  fs.copyFileSync(path.resolve('preview.html'), path.join(distDir, 'preview.html'));
}

// Copiar imagem_principal.jpg e logo.png se existirem na raiz
['imagem_principal.jpg', 'logo.png'].forEach(file => {
  const p = path.resolve(file);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(distDir, file));
  }
});

// Copiar pastas de imagens e assets
copyDirRecursive(path.resolve('imagem principal'), path.join(distDir, 'imagem principal'));

console.log('✅ Build estático para Vercel concluído com sucesso em dist/!');
