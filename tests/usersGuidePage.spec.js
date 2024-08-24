import { test } from "@playwright/test";
import checkURL from "../helpers/urlChecker.js";
import handleAd from "../helpers/adHandler.js";
import HomePage from "../pages/Home.page.js";
import GuidePage from "../pages/Guide.page.js";

//test case 3
test("Check the documentation on the User's Guide page", async ({ page }) => {
  const homePage = new HomePage(page);
  const guidePage = new GuidePage(page);

  await page.goto("https://www.redmine.org/");
  await homePage.scrollToDocsSection();

  await homePage.clickOnGuideLink();

  await handleAd(page);

  await guidePage.scrollToGuideSection();

  await guidePage.clickOnGetStartedLink();

  await checkURL(
    page,
    "https://www.redmine.org/projects/redmine/wiki/Getting_Started"
  );

  const expectedText = "Step One -- Creating a project¶";

  await guidePage.checkTextInStepOneTitle(expectedText);
});
