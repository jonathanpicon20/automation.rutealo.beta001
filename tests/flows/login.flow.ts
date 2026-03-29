import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('http://localhost:4200/login-email');

  await page.getByRole('textbox', { name: 'Email' })
    .fill('jonathan.picon20@gmail.com');

  await page.getByText('Continuar').click();

  await page.getByRole('textbox', { name: 'Contraseña' })
    .fill('123456');

  await page.getByRole('button', { name: 'Ingresar' }).click();
}