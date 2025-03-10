import { test, expect } from '@playwright/test';

test('a piece is visible', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect h1 to contain a substring.

  const divWhite = page.locator("div[data-square='d5']");

  await expect(divWhite).toBeVisible();
});
