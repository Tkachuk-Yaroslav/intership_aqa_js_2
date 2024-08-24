import { expect } from "@playwright/test";

async function checkURL(page, expectedURL) {
  await expect(page).toHaveURL(expectedURL);
}

export default checkURL;
