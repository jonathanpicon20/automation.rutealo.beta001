import { expect, test } from '@playwright/test';
import { crearBus } from './flows/bus.flow';
import { crearGuia } from './flows/guia.flow';
import { login } from './flows/login.flow';
import { crearServicio } from './flows/servicio.flow';
import { crearTour } from './flows/tour.flow';


test.describe('flujo completo sistema tours', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 1920,
      height: 1080,
    });
  });

  test.setTimeout(120000);

  test('e2e completo', async ({ page }) => {

    await login(page);

    const guia = await crearGuia(page);
    expect(guia).toBeTruthy();

    const bus = await crearBus(page);
    expect(bus).toBeTruthy();

    const servicio = await crearServicio(page);
    expect(servicio).toBeTruthy();

    await crearTour(page);

    await page.waitForTimeout(500);

    // const venta = await crearVenta(page);
    // expect(venta).toBeTruthy();

    console.log({
      guia,
      bus,
      servicio,
      // venta
    });

  });

});