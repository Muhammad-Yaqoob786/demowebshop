import { test, expect } from '@playwright/test';

export async function login(page) {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Email:' }).fill('test!@email.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('222222');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(1000);
}

test('logintest', async ({ page }) => {
    await login(page);

});