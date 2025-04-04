// testsort.spec.js
import { test, expect } from '@playwright/test';
import login from 'C:/Test/tests/testlogin.spec.js';  // Correct default import

test('test', async ({ page }) => {
  await login(page);  // Calling login function

  await page.waitForTimeout(1000);
  await page.goto('https://demowebshop.tricentis.com/books');
  await page.waitForTimeout(1000);

  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/books?orderby=5');
  await page.goto('https://demowebshop.tricentis.com/books?orderby=5');
  await page.waitForTimeout(1000);

  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/books?orderby=6');
  await page.goto('https://demowebshop.tricentis.com/books?orderby=10');
  await page.waitForTimeout(1000);

  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/books?orderby=11');
  await page.goto('https://demowebshop.tricentis.com/books?orderby=11');
  await page.waitForTimeout(1000);
});
