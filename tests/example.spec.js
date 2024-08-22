import { test, expect } from "@playwright/test";

// test("Registration of a user on the website using valid data", async ({
//   page,
// }) => {
//   await page.goto("https://www.redmine.org/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("Overview - Redmine");

//   // Клік по лінку за допомогою CSS селектора
//   await page.locator("#account > ul > li > a.register").click();
//   await page.locator("#user_login").click();
//   await page.locator("#user_login").fill("loginforrkachuk1");
//   await page.locator("#user_password").fill("passwordfortesting");
//   await page.locator("#user_password_confirmation").fill("passwordfortesting");
//   await page.locator("#user_firstname").fill("Tom");
//   await page.locator("#user_lastname").fill("Anderson");
//   await page.locator("#user_mail").fill("mailfotaqa1@gmail.com");
//   await page.locator('form>input[type="submit"]').click();
//   // page.locator("#flash_notice");
//   // await expect(page).toHaveURL("https://www.redmine.org/login");
//   // Перевірка, чи з'явилося повідомлення про успішну реєстрацію
//   const flashNotice = page.locator("#flash_notice");
//   await expect(flashNotice).toHaveAttribute("class", "flash notice");

//   // Перевірка, чи відбулося перенаправлення на сторінку входу
//   await expect(page).toHaveURL("https://www.redmine.org/login");
// });

test("Registration of a user on the website using invalid email", async ({
  page,
}) => {
  await page.goto("https://www.redmine.org/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Overview - Redmine");

  // Клік по лінку за допомогою CSS селектора
  await page.locator("#account > ul > li > a.register").click();
  await page.locator("#user_login").click();
  await page.locator("#user_login").fill("loginforrkachuk2");
  await page.locator("#user_password").fill("passwordfortesting");
  await page.locator("#user_password_confirmation").fill("passwordfortesting");
  await page.locator("#user_firstname").fill("Tom");
  await page.locator("#user_lastname").fill("Anderson");
  await page.locator("#user_mail").fill("mailfotaqa1@qwe");
  await page.locator('form>input[type="submit"]').click();

  // Перевірка, що елемент має потрібний текст
  const errorMessage = page.locator("#errorExplanation>ul>li");
  await expect(errorMessage).toHaveText("Email is invalid");

  // Перевірка, чи відбулося перенаправлення на сторінку входу
  await expect(page).toHaveURL("https://www.redmine.org/account/register");
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
