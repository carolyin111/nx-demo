import { expect, test } from '@playwright/test';

test('has title2', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Hey');
});
