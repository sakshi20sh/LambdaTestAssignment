import test from "../lambdatest-setup";
import { Page, expect } from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

test('Open the https://www.lambdatest.com/selenium-playground page and click “Drag & Drop Sliders”.', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("//a[text()='Drag & Drop Sliders']")
});

test('Select the slider “Default value 15” and drag the bar to make it 95 by validating whether the range value shows 95.', async ({ page }) => {
  const sliderHandle = await page.locator("input[type='range']").first()
  const output = await page.locator("#rangeSuccess")
  await sliderHandle.focus()
  while(await output.textContent()/1=='95'){
    await sliderHandle.press('ArrowRight');
  }
  await expect(output).toHaveText('95')  
});


