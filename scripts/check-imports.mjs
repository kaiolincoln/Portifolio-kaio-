import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src');
function checkDirectory(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) checkDirectory(file);
    else if (/\.(js|jsx)$/.test(entry.name)) {
      for (const match of fs.readFileSync(file, 'utf8').matchAll(/(?:from\s*|import\s*\()['"]([^'"]+)['"]/g)) {
        const specifier = match[1];
        if (!specifier.startsWith('.') && !specifier.startsWith('@/')) continue;
        const target = specifier.startsWith('@/') ? path.join(root, specifier.slice(2)) : path.resolve(directory, specifier);
        let current = root;
        for (const segment of path.relative(root, target).split(path.sep)) {
          if (!fs.readdirSync(current).includes(segment)) throw new Error(`Import com nome incorreto em ${file}: ${specifier}`);
          current = path.join(current, segment);
        }
      }
    }
  }
}
checkDirectory(root);
console.log('Imports locais conferidos com distinção entre maiúsculas e minúsculas.');
