// import { test, expect } from "@playwright/test";
// import checkURL from "../helpers/urlChecker.js";
// import handleAd from "../helpers/adHandler.js";
// import HomePage from "../pages/Home.page.js";
// import SignUpPage from "../pages/SignUp.page.js";
// import LoginPage from "../pages/Login.page.js";
// import GuidePage from "../pages/Guide.page.js";
// import IssuesPage from "../pages/Issues.page.js";
// import MyAccountPage from "../pages/MyAccount.page.js";

// // test case 1
// test("Registration of a user on the website using valid data", async ({
//   page,
// }) => {
//   const signUpPage = new SignUpPage(page);
//   const homePage = new HomePage(page);
//   const loginPage = new LoginPage(page);

//   await page.goto("https://www.redmine.org/");

//   // Expect a title "to contain" a substring.
//   // // await expect(page).toHaveTitle("Overview - Redmine");
//   await homePage.checkPageTitle("Overview - Redmine");

//   await homePage.clickOnRegisterLink();
//   await page.waitForTimeout(500);

//   // // Клік по лінку за допомогою CSS селектора
//   // // await page.locator("#account > ul > li > a.register").click();F
//   // // await page.locator("#user_login").click();
//   // // await page.locator("#user_login").fill("loginforrkachuk123");
//   // // await page.locator("#user_password").fill("passwordfortesting");
//   // // await page.locator("#user_password_confirmation").fill("passwordfortesting");
//   // // await page.locator("#user_firstname").fill("Tom");
//   // // await page.locator("#user_lastname").fill("Anderson");
//   // // await page.locator("#user_mail").fill("mailfotaqa123@gmail.com");
//   // // await page.locator('form>input[type="submit"]').click();

//   await signUpPage.fillForm({
//     login: "loginforrkachuk414",
//     password: "passwordfortesting",
//     firstName: "Tom",
//     lastName: "Anderson",
//     email: "mailfotaqa414@gmail.com",
//   });

//   await signUpPage.submit();

//   // const flashNotice = page.locator("#flash_notice");
//   // await expect(flashNotice).toHaveAttribute("class", "flash notice");

//   // // Перевірка, чи відбулося перенаправлення на сторінку входу
//   // await expect(page).toHaveURL("https://www.redmine.org/login");

//   await loginPage.checkSuccessLoginMsgAttribute("class", "flash notice");
//   // await expect(page).toHaveURL("https://www.redmine.org/login");
//   await checkURL(page, "https://www.redmine.org/login");
// });

// // test case 2

// test("Registration of a user on the website using invalid email", async ({
//   page,
// }) => {
//   const signUpPage = new SignUpPage(page);
//   const homePage = new HomePage(page);
//   await page.goto("https://www.redmine.org/");

//   // Expect a title "to contain" a substring.
//   // await expect(page).toHaveTitle("Overview - Redmine");
//   await homePage.checkPageTitle("Overview - Redmine");
//   await homePage.clickOnRegisterLink();
//   await page.waitForTimeout(500);
//   // Клік по лінку за допомогою CSS селектора
//   // // await page.locator("#account > ul > li > a.register").click();
//   // // await page.locator("#user_login").click();
//   // // await page.locator("#user_login").fill("loginforrkachuk2");
//   // // await page.locator("#user_password").fill("passwordfortesting");
//   // // await page.locator("#user_password_confirmation").fill("passwordfortesting");
//   // // await page.locator("#user_firstname").fill("Tom");
//   // // await page.locator("#user_lastname").fill("Anderson");
//   // // await page.locator("#user_mail").fill("mailfotaqa1@qwe");
//   // // await page.locator('form>input[type="submit"]').click();

//   await signUpPage.fillForm({
//     login: "loginforrkachuk2",
//     password: "passwordfortesting",
//     firstName: "Tom",
//     lastName: "Anderson",
//     email: "mailfotaqa1@qwe",
//   });

//   await signUpPage.submit();

//   // Перевірка, що елемент має потрібний текст
//   // const errorMessage = page.locator("#errorExplanation>ul>li");
//   // await expect(errorMessage).toHaveText("Email is invalid");
//   await signUpPage.checkTextInErrorMsg("Email is invalid");

//   // Перевірка, чи відбулося перенаправлення на сторінку входу
//   // await expect(page).toHaveURL("https://www.redmine.org/account/register");
//   await checkURL(page, "https://www.redmine.org/account/register");
// });

// //test case 3
// test("Check the documentation on the User's Guide page", async ({ page }) => {
//   const homePage = new HomePage(page);
//   const guidePage = new GuidePage(page);
//   await page.goto("https://www.redmine.org/");

//   //знаходжу елемент, провіряю чи видимий і скролю
//   // // const docsSection = page.locator('h2:has-text("Documentation")');
//   // // await expect(docsSection).toBeVisible();
//   // // await docsSection.scrollIntoViewIfNeeded();
//   await homePage.scrollToDocsSection();

//   // // const guideLink = page.locator(
//   // //   '#content ul>li>a[href="/projects/redmine/wiki/Guide"]'
//   // // );
//   // // await guideLink.click();

//   await homePage.clickOnGuideLink();

//   // Чекаємо певний час перед повторною перевіркою
//   await page.waitForTimeout(500);

//   await handleAd(page);

//   // // // Знаходимо зовнішній iframe
//   // // const outerFrame = page.frameLocator("#aswift_6");

//   // // // Всередині зовнішнього iframe знаходимо внутрішній iframe
//   // // const innerFrame = outerFrame.frameLocator("#ad_iframe");

//   // // // У внутрішньому iframe знаходимо кнопку і клікаємо по ній
//   // // const dismissButton = innerFrame.locator("#dismiss-button");
//   // // // let dismissButton = null;
//   // // // if (innerFrame) {
//   // // //   dismissButton = innerFrame.locator("#dismiss-button");
//   // // // } else {
//   // // //   dismissButton = outerFrame.locator("#dismiss-button");
//   // // // }

//   // // if (await dismissButton.count()) await dismissButton.click();
//   // if (await expect(dismissButton).toBeVisible()) {
//   //   await dismissButton.click();
//   // }

//   // //знаходжу елемент, провіряю чи видимий і скролю
//   // const guideSection = page.locator('h2:has-text("User guide")');
//   // // await expect(guideSection).toBeVisible();
//   // await guideSection.scrollIntoViewIfNeeded();
//   await guidePage.scrollToGuideSection();

//   // // const getStartedLink = page.locator(
//   // //   'a[href="/projects/redmine/wiki/Getting_Started"]'
//   // // );
//   // // await getStartedLink.click();
//   await guidePage.clickOnGetStartedLink();

//   // // await expect(page).toHaveURL(
//   // //   "https://www.redmine.org/projects/redmine/wiki/Getting_Started"
//   // // );
//   await checkURL(
//     page,
//     "https://www.redmine.org/projects/redmine/wiki/Getting_Started"
//   );

//   const expectedText = "Step One -- Creating a project¶";

//   // // const stepOne = page.locator("#content > div.wiki-page > h2:nth-child(6)");
//   // // await expect(stepOne).toHaveText(expectedText);
//   await guidePage.checkTextInStepOneTitle(expectedText);
// });

// // test case 4
// test('Filtering the data on the "issues" page', async ({ page }) => {
//   const homePage = new HomePage(page);
//   const issuesPage = new IssuesPage(page);
//   await page.goto("https://www.redmine.org/");

//   //знаходжу елемент, провіряю чи видимий і скролю
//   // // const issuelsLink = page.locator('#main-menu a[class="issues"]');
//   // // await expect(issuelsLink).toBeVisible();
//   // // await issuelsLink.click();
//   await homePage.clickOnIssuesLink();
//   await page.waitForTimeout(500);

//   await handleAd(page);
//   // ///////////////////////////////////////////////////////////////

//   // // Знаходимо зовнішній iframe
//   // const outerFrame = page.frameLocator("#aswift_6");
//   // // Всередині зовнішнього iframe знаходимо внутрішній iframe
//   // const innerFrame = outerFrame.frameLocator("#ad_iframe");

//   // // У внутрішньому iframe знаходимо кнопку і клікаємо по ній
//   // const dismissButton = innerFrame.locator("#dismiss-button");

//   // if (await dismissButton.count()) await dismissButton.click();
//   // ////////////////////////////////////////////////////////////////
//   // // await expect(page).toHaveURL(
//   // //   "https://www.redmine.org/projects/redmine/issues"
//   // // );

//   await checkURL(page, "https://www.redmine.org/projects/redmine/issues");

//   // // const filterSelect = page.locator("#add_filter_select");
//   // // await filterSelect.selectOption("tracker_id");
//   await issuesPage.selectOptionInFilterSelect("tracker_id");

//   await page.waitForTimeout(500);

//   // // const applyLink = page.locator("#query_form_content+p>a:first-child");
//   // // await applyLink.click();
//   await issuesPage.clickOnApplyLink();

//   await page.waitForTimeout(500);

//   // // const rows = page.locator("tbody > tr td.tracker");
//   // // console.log("rows", rows);
//   // // const rowCount = await rows.count();
//   // // console.log("rowsCount", rowCount);

//   // // if (rowCount === 0) {
//   // //   throw new Error("No rows found in the table");
//   // // }

//   // // for (let i = 0; i < rowCount; i++) {
//   // //   const trackerText = await rows.nth(i).textContent();
//   // //   expect(trackerText.trim()).toBe("Defect");
//   // // }
//   // // const rowCount = issuesPage.sortedDataArray;
//   await issuesPage.checkSortedDataArray("Defect");
// });

// // test case 5
// test("Changing the password on the user page", async ({ page }) => {
//   const homePage = new HomePage(page);
//   const loginPage = new LoginPage(page);
//   const myAccountPage = new MyAccountPage(page);
//   await page.goto("https://www.redmine.org/");

//   // // await page.locator("#account > ul > li > a.login").click();
//   await homePage.clickOnLoginLink();
//   await loginPage.fillLoginForm("tkachuky105105", "Qweqweqwe77");
//   /////////////////////////////////////////////////////
//   // // await page.locator("#username").fill("tkachuky105105");
//   // // await page.locator("#password").fill("Qweqweqwe77");
//   // await page.waitForTimeout(500);

//   await loginPage.submit();
//   // await page.waitForTimeout(500);

//   // // await page.locator("#login-submit").click();
//   // ///////////////////////////////////////////////////////
//   // // await page.locator("#account > ul > li > a.my-account").click();
//   // // await page.locator("#content a.icon-passwd").click();

//   await homePage.clickOnMyAccountLink();
//   // await page.waitForTimeout(500);

//   await myAccountPage.clickOnChangePasswordLink();
//   // await page.waitForTimeout(500);

//   // await page.locator("#password").fill("Qweqweqwe77");
//   // await page.locator("#new_password").fill("Qweqweqwe777");
//   // await page.locator("#new_password_confirmation").fill("Qweqweqwe777");
//   await myAccountPage.fillChangePasswdForm(
//     "Qweqweqwe77",
//     "Qweqweqwe777",
//     "Qweqweqwe777"
//   );
//   // await page.waitForTimeout(500);

//   // // await page.locator('form>input[type="submit"]').click();
//   await myAccountPage.clickOnSubmitButton();

//   // await expect(page).toHaveURL("https://www.redmine.org/my/account");
//   await checkURL(page, "https://www.redmine.org/my/account");

//   // // await page.locator("#flash_notice").toHaveText("Пароль успішно оновлений.");

//   await page.waitForTimeout(500);
// });
