import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Vérifier que le placeholder 'Search…' est visible et interagir avec
  await expect(page.getByPlaceholder("Search…")).toBeVisible();
  await page.getByPlaceholder("Search…").click();
  await page.getByPlaceholder("Search…").fill("picasso");
  await page.getByPlaceholder("Search…").press("Enter");

  // Vérifier que le lien 'Woman in White' est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "Woman in White Woman in White" })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Woman in White Woman in White" })
    .click();

  // Vérifier que l'en-tête 'Woman in White' est visible et cliquer dessus
  await expect(
    page.getByRole("heading", { name: "Woman in White" })
  ).toBeVisible();
  await page.getByRole("heading", { name: "Woman in White" }).click();

  // Vérifier que le texte 'ArtistePablo Picasso' est visible et cliquer dessus
  await expect(page.getByText("ArtistePablo Picasso")).toBeVisible();
  await page.getByText("ArtistePablo Picasso").click();

  // Vérifier que l'en-tête 'Artiste' est visible et cliquer dessus
  await expect(page.getByRole("heading", { name: "Artiste" })).toBeVisible();
  await page.getByRole("heading", { name: "Artiste" }).click();

  // Vérifier que le texte 'Pablo Picasso' est visible et cliquer dessus
  await expect(page.getByText("Pablo Picasso")).toBeVisible();
  await page.getByText("Pablo Picasso").click();

  // Répéter la recherche pour 'de vinci'
  await expect(page.getByPlaceholder("Search…")).toBeVisible();
  await page.getByPlaceholder("Search…").click();
  await page.getByPlaceholder("Search…").fill("de vinci");
  await page.getByPlaceholder("Search…").press("Enter");

  // Vérifier que le lien 'The Head of the Virgin in' est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "The Head of the Virgin in" })
  ).toBeVisible();
  await page.getByRole("link", { name: "The Head of the Virgin in" }).click();

  // Vérifier que le texte 'Leonardo da Vinci' est visible et cliquer dessus
  await expect(page.getByText("Leonardo da Vinci")).toBeVisible();
  await page.getByText("Leonardo da Vinci").click();

  // Vérifier que l'en-tête 'Artiste' est visible et cliquer dessus
  await expect(page.getByRole("heading", { name: "Artiste" })).toBeVisible();
  await page.getByRole("heading", { name: "Artiste" }).click();

  // Vérifier que l'image 'The Head of the Virgin in' est visible et cliquer dessus
  await expect(
    page.getByRole("img", { name: "The Head of the Virgin in" })
  ).toBeVisible();
  await page.getByRole("img", { name: "The Head of the Virgin in" }).click();

  // Répéter la recherche pour 'henri matisse'
  await expect(page.getByPlaceholder("Search…")).toBeVisible();
  await page.getByPlaceholder("Search…").click();
  await page.getByPlaceholder("Search…").fill("henri matisse");
  await page.getByPlaceholder("Search…").press("Enter");

  // Vérifier que le bouton 'Go to page 3' est visible et cliquer dessus
  await expect(page.getByLabel("Go to page 3")).toBeVisible();
  await page.getByLabel("Go to page 3").click();

  // Vérifier que le bouton 'Go to page 2' est visible et cliquer dessus
  await expect(page.getByLabel("Go to page 2")).toBeVisible();
  await page.getByLabel("Go to page 2").click();

  // Vérifier que le lien 'Icarus, plate VIII from the' est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "Icarus, plate VIII from the" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Icarus, plate VIII from the" }).click();
});
