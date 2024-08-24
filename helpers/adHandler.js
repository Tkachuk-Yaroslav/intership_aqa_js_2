async function handleAd(page) {
  // Знаходимо зовнішній iframe
  const outerFrame = page.frameLocator("#aswift_6");

  // Всередині зовнішнього iframe знаходимо внутрішній iframe
  const innerFrame = outerFrame.frameLocator("#ad_iframe");

  // У внутрішньому iframe знаходимо кнопку і клікаємо по ній
  const dismissButton = innerFrame.locator("#dismiss-button");

  if (await dismissButton.count()) await dismissButton.click();
}

export default handleAd;
