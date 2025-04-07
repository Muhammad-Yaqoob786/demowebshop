import { test, expect } from '@playwright/test';
import login from 'C:/Test/tests/testlogin.spec.js';  // Correct default import

test('test', async ({ page }) => {
    await login(page);
    await page.waitForTimeout(1000);
    await page.goto('https://demowebshop.tricentis.com/gift-cards?viewmode=grid');
    await page.waitForTimeout(1000);

    await page.locator('#products-viewmode').selectOption('https://demowebshop.tricentis.com/gift-cards?viewmode=list');
    await page.goto('https://demowebshop.tricentis.com/gift-cards?viewmode=list');
    await page.waitForTimeout(1000);

    await page.locator('#products-viewmode').selectOption('https://demowebshop.tricentis.com/gift-cards?viewmode=grid');
    await page.goto('https://demowebshop.tricentis.com/gift-cards?viewmode=grid');
    await page.waitForTimeout(1000);

    await page.locator('#products-viewmode').selectOption('https://demowebshop.tricentis.com/gift-cards?viewmode=list');
    await page.goto('https://demowebshop.tricentis.com/gift-cards?viewmode=list');
    await page.waitForTimeout(1000);

});