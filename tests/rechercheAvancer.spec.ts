import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Navigate to the home page
  await page.goto("http://localhost:5173/");

  // Advanced search for 'van gogh'
  await page.getByRole("button", { name: "Recherche avancée" }).click();
  await expect(page.getByLabel("Auteur/Culture")).toBeVisible();
  await page.getByLabel("Auteur/Culture").fill("van gogh");
  await page.getByRole("button", { name: "Rechercher" }).click();

  // Select 'Madame Roulin and Her Baby'
  await expect(
    page.getByRole("link", { name: "Madame Roulin and Her Baby" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Madame Roulin and Her Baby" }).click();
  await expect(page.getByText("Vincent van Gogh")).toBeVisible();
  await page.getByText("Vincent van Gogh").click();

  // Search for Egyptian Art
  await page.getByRole("button", { name: "Recherche avancée" }).click();
  await expect(page.getByLabel("Département")).toBeVisible();
  await page.getByLabel("Département").click();
  await expect(
    page.getByRole("option", { name: "Egyptian Art" })
  ).toBeVisible();
  await page.getByRole("option", { name: "Egyptian Art" }).click();
  await page.getByRole("button", { name: "Rechercher" }).click();

  // Select 'Relief from the South Wall of'
  await expect(
    page.getByRole("link", { name: "Relief from the South Wall of" })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Relief from the South Wall of" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Relief from the South Wall of" })
  ).toBeVisible();
  await page
    .getByRole("heading", { name: "Relief from the South Wall of" })
    .click();

  // Search by date range 608-1840
  await page.getByRole("button", { name: "Recherche avancée" }).click();
  await expect(page.getByLabel("Date début")).toBeVisible();
  await page.getByLabel("Date début").click();
  await page.getByLabel("Date début").fill("608");
  await expect(page.getByLabel("Date fin")).toBeVisible();
  await page.getByLabel("Date fin").click();
  await page.getByLabel("Date fin").fill("1840");
  await page.getByRole("button", { name: "Rechercher" }).click();

  // Select 'Trotting horse'
  await expect(
    page.getByRole("link", { name: "Trotting horse Trotting horse" })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Trotting horse Trotting horse" })
    .click();
  await expect(page.getByText("probably 1587–")).toBeVisible();
  await page.getByText("probably 1587–").click();

  // Search by date range 502-1780 and Islamic Art
  await page.getByRole("button", { name: "Recherche avancée" }).click();
  await expect(page.getByLabel("Date début")).toBeVisible();
  await page.getByLabel("Date début").click();
  await page.getByLabel("Date début").fill("502");
  await expect(page.getByLabel("Date fin")).toBeVisible();
  await page.getByLabel("Date fin").click();
  await page.getByLabel("Date fin").fill("1780");
  await page.getByLabel("Date fin").press("Enter");
  await expect(page.getByLabel("Moyen")).toBeVisible();
  await page.getByLabel("Moyen").click();
  await expect(page.getByLabel("Département")).toBeVisible();
  await page.getByLabel("Département").click();
  await expect(page.getByRole("option", { name: "Islamic Art" })).toBeVisible();
  await page.getByRole("option", { name: "Islamic Art" }).click();
  await page.getByRole("button", { name: "Rechercher" }).click();

  // Select 'Pierced Bowl Signed by Hasan'
  await expect(
    page.getByRole("link", { name: "Pierced Bowl Signed by Hasan" })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Pierced Bowl Signed by Hasan" })
    .click();
  await expect(
    page.getByRole("img", { name: "Pierced Bowl Signed by Hasan" })
  ).toBeVisible();
  await page.getByRole("img", { name: "Pierced Bowl Signed by Hasan" }).click();
  await expect(page.getByText("Islamic Art")).toBeVisible();
  await page.getByText("Islamic Art").click();

  // Finish the test
  await expect(page.getByText("Museum AppRecherche avancée")).toBeVisible();
});
