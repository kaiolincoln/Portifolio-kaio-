import { chromium } from '@playwright/test';
import fs from 'node:fs';
fs.mkdirSync('docs', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:4173/Portifolio-kaio-/');
  await page.locator('#projetos article').first().waitFor();
  await page.screenshot({ path: 'docs/portfolio.png' });
  await page.getByRole('navigation').getByRole('button', { name: 'projetos', exact: true }).click();
  await page.screenshot({ path: 'docs/projects.png' });
} finally { await browser.close(); }
