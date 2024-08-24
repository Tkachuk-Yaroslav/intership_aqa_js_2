import { test } from "@playwright/test";
import checkURL from "../helpers/urlChecker.js";
import HomePage from "../pages/Home.page.js";
import LoginPage from "../pages/Login.page.js";
import MyAccountPage from "../pages/MyAccount.page.js";

// test case 5
test("Changing the password on the user page", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);
  await page.goto("https://www.redmine.org/");

  await homePage.clickOnLoginLink();
  //REQUIREMENTS: a valid password must be entered each time before passing the test
  await loginPage.fillLoginForm("tkachuky105105", "Qweqweqwe777");

  await loginPage.submit();
  await homePage.clickOnMyAccountLink();

  await myAccountPage.clickOnChangePasswordLink();

  await myAccountPage.fillChangePasswdForm(
    "Qweqweqwe777",
    "Qweqweqwe0",
    "Qweqweqwe0"
  );

  await myAccountPage.clickOnSubmitButton();

  await checkURL(page, "https://www.redmine.org/my/account");

  await page.waitForTimeout(500);
});
