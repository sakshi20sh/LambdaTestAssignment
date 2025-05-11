import test from "../lambdatest-setup";
import { Page, expect } from "@playwright/test";

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
});

test('Test Scenario 1 - Validate entered and displayed text', async ({ page }) => {

  // Step 1: Click Simple Form Demo
  await page.click("//a[text()='Simple Form Demo']")

  // Step 2 : Enter text in the input field
  var enteredText = “Welcome to LambdaTest”
  await page.click("//input[@id='user-message']")
  await page.locator("//input[@id='user-message']").fill(s)

  // Step 3 : Click Get Checked Value'
  await page.click("//button[text()='Get Checked Value']")

  // Step 4 : Validate whether the same text message is displayed in the right-hand
  await page.waitForSelector("//div[@id='user-message']/label[text()='Your Message: ']/following::p[1]",{timeout:10000})
  var displayedText = await page.locator("//div[@id='user-message']/label[text()='Your Message: ']/following::p[1]").innerText()
  expect(displayedText).toEqual(enteredText)
});

test('Test Scenario 2 - Drag & Drop Sliders', async ({ page }) => {

  //Step 1: click “Drag & Drop Sliders”
  await page.click("//a[text()='Drag & Drop Sliders']")

  //Step 2 : Select the slider “Default value 15” and drag the bar to make it 95 by validating whether the range value shows 95.
  const sliderHandle = await page.locator("input[type='range']").first()
  const output = await page.locator("#rangeSuccess")
  await sliderHandle.focus()
  while(await output.textContent()/1=='95'){
    await sliderHandle.press('ArrowRight');
  }
  await expect(output).toHaveText('95')
});

test('Test Scenario 3 - Input form submit', async ({ page }) => {

  //Step 1 : click “Input Form Submit”
  await page.click("/a[text()='Input Form Submit'])

  //Step 2 : Click “Submit” without filling in any information in the form.
  await page.click('button[type="submit"]')

  //Step 3 : Assert error message is shown
  await expect(page.locator('text = Please fill in the fields')).toBeVisible()

  //Step 4: Fill in name, email, and other fields
  await page.fill('input[name="name"]','Sakshi Sharma')
  await page.fill('input[name="email"]','sakshish@example.com')
  await page.fill('input[name="password"]','sakshi1234')
  await page.fill('input[name="company"]','Test Company')
  await page.fill('input[name="website"]','https://example.com')
  await page.selectoption('select[name="country"],{label: 'United States'});
  await page.fill('input[name="city"]','New York')
  await page.fill('input[name="address1"]','123Test')
  await page.fill('input[name="address2"]','House 4312')
  await page.fill('input[name="state"]','NY')
  await page.fill('input[name="zip"]','200002')

 //Step 5: Click Submit
  await page.click('button[type = "submit"]');

  //Step 6: Validate the success message
  await expect(page.locator('div.success-msg')).toContainText('Thanks for contacting us, we will get back to you shortly.');
});




