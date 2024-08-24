import { test } from "@playwright/test";
import checkURL from "../helpers/urlChecker.js";
import HomePage from "../pages/Home.page.js";
import SignUpPage from "../pages/SignUp.page.js";
import LoginPage from "../pages/Login.page.js";

// test case 1
test("Registration of a user on the website using valid data", async ({
  page,
}) => {
  const signUpPage = new SignUpPage(page);
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await page.goto("https://www.redmine.org/");

  await homePage.checkPageTitle("Overview - Redmine");

  await homePage.clickOnRegisterLink();
  await page.waitForTimeout(500);

  //REQUIREMENTS: before passing the test, the login and mail must be unregistered each time
  await signUpPage.fillForm({
    login: "loginforrkachuk99",
    password: "passwordfortesting",
    firstName: "Tom",
    lastName: "Anderson",
    email: "mailfotaqa99@gmail.com",
  });

  await signUpPage.submit();

  await loginPage.checkSuccessLoginMsgAttribute("class", "flash notice");
  await checkURL(page, "https://www.redmine.org/login");
});

// test case 2

test("Registration of a user on the website using invalid email", async ({
  page,
}) => {
  const signUpPage = new SignUpPage(page);
  const homePage = new HomePage(page);
  await page.goto("https://www.redmine.org/");

  await homePage.checkPageTitle("Overview - Redmine");
  await homePage.clickOnRegisterLink();
  await page.waitForTimeout(500);

  await signUpPage.fillForm({
    login: "loginforrkachuk2",
    password: "passwordfortesting",
    firstName: "Tom",
    lastName: "Anderson",
    email: "mailfotaqa1@qwe",
  });

  await signUpPage.submit();

  await signUpPage.checkTextInErrorMsg("Email is invalid");

  await checkURL(page, "https://www.redmine.org/account/register");
});
