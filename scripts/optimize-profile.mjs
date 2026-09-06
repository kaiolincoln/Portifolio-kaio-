import sharp from 'sharp';
// Crop the graduation portrait around the face and shoulders; preserve the original.
const portrait = sharp('src/assets/COMPUTAÇÃO-3.jpg')
  .rotate()
  .extract({ left: 1030, top: 120, width: 1000, height: 1000 });
await portrait.clone().resize(256, 256).webp({ quality: 82 }).toFile('src/assets/Perfil.webp');
await portrait.clone().resize(128, 128).webp({ quality: 82 }).toFile('src/assets/Perfil-128.webp');
