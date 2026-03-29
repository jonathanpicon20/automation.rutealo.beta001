import { Page } from '@playwright/test';
import { generarServicio } from '../utils/faker.util';

export async function crearServicio(page: Page) {
  const servicio = generarServicio();

  await page.getByRole('link', { name: 'Servicios de Tour' }).click();
  await page.getByRole('button', { name: 'REGISTRAR NUEVO SERVICIO' }).click();

  await page.getByRole('textbox', { name: 'Nombre del tour' })
    .fill(servicio.nombre);

  await page.getByRole('spinbutton', { name: 'Precio de referencia por' })
    .fill(servicio.precio.toString());

  await page.getByRole('button', { name: 'Guardar' }).click();

  return servicio;
}