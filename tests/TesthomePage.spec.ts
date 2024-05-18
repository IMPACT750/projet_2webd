import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Vérifier que l'en-tête "Œuvres d'art en vedette" est visible
  await expect(
    page.getByRole("heading", { name: "Œuvres d'art en vedette" })
  ).toBeVisible();

  // Vérifier que le lien "A Woman Seated beside a Vase" est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "A Woman Seated beside a Vase" })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "A Woman Seated beside a Vase" })
    .click();

  // Vérifier que l'image "A Woman Seated beside a Vase" est visible et cliquer dessus
  await expect(
    page.getByRole("img", { name: "A Woman Seated beside a Vase" })
  ).toBeVisible();
  await page.getByRole("img", { name: "A Woman Seated beside a Vase" }).click();

  // Vérifier que l'en-tête "A Woman Seated beside a Vase" est visible
  await expect(
    page.getByRole("heading", { name: "A Woman Seated beside a Vase" })
  ).toBeVisible();

  // Vérifier que le texte "Edgar Degas" est visible et cliquer dessus
  await expect(page.getByText("Edgar Degas")).toBeVisible();
  await page.getByText("Edgar Degas").click();

  // Vérifier que le texte "DépartementEuropean Paintings" est visible et cliquer dessus
  await expect(page.getByText("DépartementEuropean Paintings")).toBeVisible();
  await page.getByText("DépartementEuropean Paintings").click();

  // Vérifier que le texte "Oil on canvas" est visible et cliquer dessus
  await expect(page.getByText("Oil on canvas")).toBeVisible();
  await page.getByText("Oil on canvas").click();

  // Vérifier que le lien "Museum App" est visible et cliquer dessus
  await expect(page.getByRole("link", { name: "Museum App" })).toBeVisible();
  await page.getByRole("link", { name: "Museum App" }).click();

  // Vérifier que le lien "Asian Art" est visible et cliquer dessus
  await expect(page.getByRole("link", { name: "Asian Art" })).toBeVisible();
  await page.getByRole("link", { name: "Asian Art" }).click();

  // Vérifier que le lien "Panel Panel Inconnu 18th" est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "Panel Panel Inconnu 18th" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Panel Panel Inconnu 18th" }).click();

  // Vérifier que le texte "Asian Art" est visible
  await expect(page.getByText("Asian Art")).toBeVisible();

  // Vérifier que le lien "Museum App" est visible et cliquer dessus
  await expect(page.getByRole("link", { name: "Museum App" })).toBeVisible();
  await page.getByRole("link", { name: "Museum App" }).click();

  // Vérifier que le lien "Medieval Art" est visible et cliquer dessus
  await expect(page.getByRole("link", { name: "Medieval Art" })).toBeVisible();
  await page.getByRole("link", { name: "Medieval Art" }).click();

  // Vérifier que le lien "Manuscript Leaf Showing an" est visible et cliquer dessus
  await expect(
    page.getByRole("link", { name: "Manuscript Leaf Showing an" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Manuscript Leaf Showing an" }).click();

  // Vérifier que le texte "Medieval Art" est visible
  await expect(page.getByText("Medieval Art")).toBeVisible();

  // Vérifier que l'image "Manuscript Leaf Showing an" est visible
  await expect(
    page.getByRole("img", { name: "Manuscript Leaf Showing an" })
  ).toBeVisible();

  // Vérifier que le lien "Museum App" est visible et cliquer dessus
  await expect(page.getByRole("link", { name: "Museum App" })).toBeVisible();
  await page.getByRole("link", { name: "Museum App" }).click();

  // Vérifier que le texte "Museum AppRecherche avancéeŒ" est visible
  await expect(page.getByText("Museum AppRecherche avancéeŒ")).toBeVisible();
});
