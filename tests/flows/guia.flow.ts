import { Page } from '@playwright/test';
import { generarGuia } from '../utils/faker.util';

export async function crearGuia(page: Page) {
  const guia = generarGuia();

  await page.getByRole('link', { name: 'Guías turísticos' }).click();
  await page.getByRole('button', { name: 'REGISTRAR NUEVO GUÍA' }).click();

  await page.getByRole('textbox', { name: 'Nombres' }).fill(guia.nombres);
  await page.getByRole('textbox', { name: 'Apellidos' }).fill(guia.apellidos);
  await page.getByRole('textbox', { name: 'Celular' }).fill(guia.celular);
  await page.getByRole('textbox', { name: 'Número de documento' }).fill(guia.dni);

  await page.getByRole('button', { name: 'Guardar' }).click();

  return guia;
}