import { test, expect } from '@playwright/test';

test('Highlight', async ({ page }) => {

  await page.goto('http://localhost:5173/');
  await expect(page).toHaveURL('http://localhost:5173/');

  await expect(page.getByRole('link', { name: 'The Abduction of the Sabine' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('link', { name: 'The Abduction of the Sabine' }).click();

  await expect(page.locator('div').filter({ hasText: 'The Abduction of the Sabine WomenArtisteNicolas PoussinDateprobably 1633–' }).nth(1)).toBeVisible({ timeout: 10000 });
  await page.locator('div').filter({ hasText: 'The Abduction of the Sabine WomenArtisteNicolas PoussinDateprobably 1633–' }).nth(1).click();

});


test('department', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveURL('http://localhost:5173/');

  await expect(page.getByRole('link', { name: 'Islamic Art' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('link', { name: 'Islamic Art' }).click();

});

