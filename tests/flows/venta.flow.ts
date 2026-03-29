import { Page } from '@playwright/test';
export async function crearVenta(page: Page) 

{
  
// ir a ventas
await page.getByRole('link', { name: 'Ventas' }).click();
await page.getByRole('button', { name: 'VENDER' }).click();

// abrir modal
await page.getByRole('button', { name: 'Seleccionar tour' }).click();

// esperar modal visible
const modal = page.locator('ion-modal.show-modal');
await modal.waitFor();

// esperar que cargue contenido (Ionic suele ser async)
await page.waitForTimeout(500);

// filtrar solo tours reales
const tours = modal.locator('ion-item').filter({ hasText: 'pasajeros' });

// validar
const count = await tours.count();
console.log('Tours encontrados:', count);

if (count === 0) {
  throw new Error('No hay tours disponibles');
}

// seleccionar uno (puedes usar first o random)
await tours.first().click();

// confirmar
await page.getByRole('button', { name: 'Agregar' }).click();

}