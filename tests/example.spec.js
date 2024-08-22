import { test, expect } from "@playwright/test";

// test case 1
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

// test case 2

// test("Registration of a user on the website using invalid email", async ({
//   page,
// }) => {
//   await page.goto("https://www.redmine.org/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("Overview - Redmine");

//   // Клік по лінку за допомогою CSS селектора
//   await page.locator("#account > ul > li > a.register").click();
//   await page.locator("#user_login").click();
//   await page.locator("#user_login").fill("loginforrkachuk2");
//   await page.locator("#user_password").fill("passwordfortesting");
//   await page.locator("#user_password_confirmation").fill("passwordfortesting");
//   await page.locator("#user_firstname").fill("Tom");
//   await page.locator("#user_lastname").fill("Anderson");
//   await page.locator("#user_mail").fill("mailfotaqa1@qwe");
//   await page.locator('form>input[type="submit"]').click();

//   // Перевірка, що елемент має потрібний текст
//   const errorMessage = page.locator("#errorExplanation>ul>li");
//   await expect(errorMessage).toHaveText("Email is invalid");

//   // Перевірка, чи відбулося перенаправлення на сторінку входу
//   await expect(page).toHaveURL("https://www.redmine.org/account/register");
// });

// //test case 3
// test("Check the documentation on the User's Guide page", async ({ page }) => {
//   await page.goto("https://www.redmine.org/");

//   //знаходжу елемент, провіряю чи видимий і скролю
//   const docsSection = page.locator('h2:has-text("Documentation")');
//   await expect(docsSection).toBeVisible();
//   await docsSection.scrollIntoViewIfNeeded();

//   const guideLink = page.locator(
//     '#content ul>li>a[href="/projects/redmine/wiki/Guide"]'
//   );
//   await guideLink.click();

//   const element = await page.$("#mys-content div span.ns-4yg5c-e-18");

//   if (element) {
//     await element.click();
//   } else {
//     console.log("Елемент не знайдено на сторінці");
//   }

//   // await expect(page).toHaveURL(
//   //   "https://www.redmine.org/projects/redmine/wiki/Guide"
//   // );

//   //знаходжу елемент, провіряю чи видимий і скролю
//   const guideSection = page.locator('h2:has-text("User guide")');
//   await expect(guideSection).toBeVisible();
//   await guideSection.scrollIntoViewIfNeeded();
// });

// test case 4
test("Check the documentation on the User's Guide page", async ({ page }) => {
  await page.goto("https://www.redmine.org/");

  //знаходжу елемент, провіряю чи видимий і скролю
  const issuelsLink = page.locator('#main-menu a[class="issues"]');
  await expect(issuelsLink).toBeVisible();
  await issuelsLink.click();
});
