import { Page, expect } from '@playwright/test';

export async function crearTour(page: Page) {
  await page.goto('http://localhost:4200/tabs/tours/create');

  // =====================================================
  // 🔹 FECHA Y HORA RANDOM SEGURA
  // =====================================================
  const now = new Date();
  now.setDate(now.getDate() + 1);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const hour = Math.floor(Math.random() * 23) + 1;
  const minute = Math.floor(Math.random() * 60);

  const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

  // =====================================================
  // 🧭 SERVICIO
  // =====================================================
  await page.locator('.ionicon > path').first().click();
  await page.getByRole('radio').first().click();

  // =====================================================
  // 📅 FECHA
  // =====================================================
  await page.locator('ion-datetime-button').first().click();

  const dateModal = page.locator('ion-modal.show-modal').last();
  await expect(dateModal).toBeVisible();

  const datePicker = dateModal.locator('ion-datetime');

  const dateValue = `${date}T00:00:00`;

  await datePicker.evaluate((el: any, value) => {
    el.value = value;
    el.dispatchEvent(new CustomEvent('ionChange', { detail: { value } }));
  }, dateValue);

  await page.getByRole('button', { name: 'Aceptar' }).click();

  // esperar cierre del modal
  await expect(page.locator('ion-modal.show-modal')).toHaveCount(0);

  // =====================================================
  // ⏰ HORA
  // =====================================================
  await page.locator('ion-datetime-button').nth(1).click();

  const timeModal = page.locator('ion-modal.show-modal').last();
  await expect(timeModal).toBeVisible();

  const timePicker = timeModal.locator('ion-datetime');

  const timeValue = `1970-01-01T${time}:00`;

  await timePicker.evaluate((el: any, value) => {
    el.value = value;
    el.dispatchEvent(new CustomEvent('ionChange', { detail: { value } }));
  }, timeValue);

  await page.getByRole('button', { name: 'Aceptar' }).click();

  // esperar cierre
  await expect(page.locator('ion-modal.show-modal')).toHaveCount(0);

// 🚍 BUS

  // 🚍 BUS
  await page.locator('.ng-pristine > #select-label > .select-outline-container').first().click();

  let overlay = page.locator('ion-alert, ion-popover, ion-action-sheet').last();
  await overlay.locator('[role="radio"]').first().click();

  await overlay.waitFor({ state: 'hidden' });


  // 🧑‍✈️ GUÍA
  await page.locator('.ng-untouched > #select-label > .select-wrapper-inner > .select-icon').click({ force: true });

  overlay = page.locator('ion-alert, ion-popover, ion-action-sheet').last();
  await overlay.locator('[role="radio"]').first().click();

  await overlay.waitFor({ state: 'hidden' });








  // =====================================================
  // 💾 GUARDAR
  // =====================================================
  await page.getByRole('button', { name: 'PROGRAMAR TOURS' }).click();
}