import { test, expect } from '@playwright/test';

test('navegação, filtros, carrossel e foco do modal', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('./');
  await expect(page.getByRole('heading', { name: 'Kaio Lincoln', exact: true })).toBeVisible();
  await page.getByRole('navigation').getByRole('button', { name: 'projetos', exact: true }).click();
  await expect(page.locator('#projetos article')).toHaveCount(8);
  await page.getByRole('button', { name: 'Express', exact: true }).click();
  await expect(page.locator('#projetos article')).toHaveCount(1);
  const trigger = page.getByRole('button', { name: /Ver detalhes de GymFlow/ });
  await trigger.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const close = dialog.getByRole('button', { name: 'Fechar', exact: true });
  await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('link', { name: 'Ver Repositório' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  const initialImage = await dialog.locator('img').getAttribute('src');
  await dialog.getByRole('button', { name: /Próxima imagem/ }).click();
  await expect(dialog.locator('img')).not.toHaveAttribute('src', initialImage);
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.keyboard.press('Space');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('dialog').getByRole('button', { name: 'Fechar', exact: true }).click();
  await expect(trigger).toBeFocused();
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await expect(page.locator('#projetos article')).toHaveCount(8);
  expect(errors).toEqual([]);
});

test('tema persiste e contato tem alternativa disponível', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Alternar tema', exact: true }).click();
  const theme = await page.locator('html').getAttribute('class');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('class', theme);
  await page.locator('#contato').scrollIntoViewIfNeeded();
  await expect(page.locator('#contato a[href^="mailto:"]').first()).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('menu mobile e layout sem rolagem horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.locator('#mobile-menu').getByRole('button', { name: 'contato', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('formulário valida e trata sucesso e erro sem enviar e-mail real', async ({ page }) => {
  let requests = 0;
  await page.route('https://api.emailjs.com/**', async route => {
    requests += 1;
    expect(route.request().postDataJSON()).toMatchObject({ service_id: 'service_test', template_id: 'template_test' });
    await route.fulfill({ status: requests === 1 ? 500 : 200, body: requests === 1 ? 'Failed' : 'OK' });
  });
  await page.goto('http://127.0.0.1:4174/Portifolio-kaio-/');
  await page.getByLabel('Nome', { exact: true }).fill('Teste automatizado');
  await page.getByLabel('Email', { exact: true }).fill('invalido');
  await page.getByLabel('Mensagem', { exact: true }).fill('Mensagem interceptada pelo teste.');
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  expect(requests).toBe(0);
  await page.getByLabel('Email', { exact: true }).fill('teste@example.com');
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.getByRole('alert')).toContainText('Não foi possível');
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.getByRole('status')).toContainText('Mensagem enviada');
  expect(requests).toBe(2);
});
