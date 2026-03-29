import { Page } from '@playwright/test';
import { generarBus } from '../utils/faker.util';

export async function crearBus(page: Page) {
  const bus = generarBus();

  await page.getByRole('link', { name: 'Buses' }).click();
  await page.getByRole('button', { name: 'REGISTRAR NUEVO BUS' }).click();

  await page.getByRole('textbox', { name: 'Placa' }).fill(bus.placa);
  await page.getByRole('spinbutton', { name: 'Cantidad de asientos' })
    .fill(bus.asientos.toString());

  await page.getByRole('button', { name: 'Guardar' }).click();

  return bus;
}