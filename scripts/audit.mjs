import fs from 'node:fs';
import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';

fs.mkdirSync('docs/audits', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', args: ['--remote-debugging-port=9222'] });
try {
  const result = await lighthouse('http://127.0.0.1:4173/Portifolio-kaio-/', {
    port: 9222, output: ['html', 'json'], onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });
  fs.writeFileSync('docs/audits/lighthouse.html', result.report[0]);
  fs.writeFileSync('docs/audits/lighthouse.json', result.report[1]);
  console.log(JSON.stringify(Object.fromEntries(Object.entries(result.lhr.categories).map(([key, value]) => [key, value.score * 100]))));
  console.log(JSON.stringify(Object.values(result.lhr.audits).filter(a => a.score !== null && a.score < 1).map(a => ({ id: a.id, title: a.title, score: a.score, detail: a.details?.items })), null, 2));
} finally { await browser.close(); }
