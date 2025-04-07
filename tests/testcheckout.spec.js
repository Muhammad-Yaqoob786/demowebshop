import { test, expect } from '@playwright/test';
import login from 'C:/Test/tests/testlogin.spec.js';  // Correct default import


test('test', async ({ page }) => {
    await login(page);
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Books' }).nth(1).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
    await page.getByRole('link', { name: 'Computers' }).nth(1).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Desktops' }).first().click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.waitForTimeout(1000);

    await page.locator('#add-to-cart-button-72').click();
    await page.waitForTimeout(1000);

    await page.getByText('Register Log in Shopping cart (3) Wishlist (0) There are 3 item(s) in your cart').click({ timeout: 60000 });
    await page.locator('input[name="itemquantity5243029"]').click();
    await page.waitForTimeout(1000);

    await page.locator('input[name="itemquantity5243029"]').fill('10');
    await page.getByRole('button', { name: 'Update shopping cart' }).click();
    await page.waitForTimeout(1000);

    await page.locator('#termsofservice').check();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.waitForTimeout(1000);

});