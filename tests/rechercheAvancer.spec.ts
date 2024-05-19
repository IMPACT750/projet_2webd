import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveURL('http://localhost:5173/');

  await expect(page.getByRole('button', { name: 'Recherche avancée' })).toBeVisible();
  await page.getByRole('button', { name: 'Recherche avancée' }).click();

  await expect(page.getByLabel('Auteur/Culture')).toBeVisible();
  await page.getByLabel('Auteur/Culture').click();
  await page.getByLabel('Auteur/Culture').fill('van gogh');

  await expect(page.getByLabel('Département')).toBeVisible();
  await page.getByLabel('Département').click();
  await expect(page.getByRole('option', { name: 'European Paintings' })).toBeVisible();
  await page.getByRole('option', { name: 'European Paintings' }).click();

  await expect(page.getByLabel('Date de l\'objet')).toBeVisible();
  await page.getByLabel('Date de l\'objet').click();
  await page.getByLabel('Date de l\'objet').fill('1700');

  await expect(page.getByRole('button', { name: 'Rechercher' })).toBeVisible();
  await page.getByRole('button', { name: 'Rechercher' }).click();

  await expect(page.getByRole('link', { name: 'Shoes Shoes Vincent van Gogh' })).toBeVisible();
  await page.getByRole('link', { name: 'Shoes Shoes Vincent van Gogh' }).click();

  await expect(page.getByText('Vincent van Gogh')).toBeVisible();
  await page.getByText('Vincent van Gogh').click();

  await expect(page.getByText('European Paintings')).toBeVisible();
  await page.getByText('European Paintings').click();
});
