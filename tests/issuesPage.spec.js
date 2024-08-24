import { test } from "@playwright/test";
import checkURL from "../helpers/urlChecker.js";
import handleAd from "../helpers/adHandler.js";
import HomePage from "../pages/Home.page.js";
import IssuesPage from "../pages/Issues.page.js";

// test case 4
test('Filtering the data on the "issues" page', async ({ page }) => {
  const homePage = new HomePage(page);
  const issuesPage = new IssuesPage(page);
  await page.goto("https://www.redmine.org/");

  await homePage.clickOnIssuesLink();

  await handleAd(page);
  await checkURL(page, "https://www.redmine.org/projects/redmine/issues");

  await issuesPage.selectOptionInFilterSelect("tracker_id");

  await issuesPage.clickOnApplyLink();

  await issuesPage.checkSortedDataArray("Defect");
});
