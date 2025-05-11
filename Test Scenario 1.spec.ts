import test from "../lambdatest-setup";
import { Page, expect } from "@playwright/test";
import fs from 'fs';
var enteredText, displayedText;

test.describe.configure({ mode: 'parallel' });

test('Open LambdaTest’s Selenium Playground from https://www.lambdatest.com/selenium-playground', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
});

test('Click Simple Form Demo', async ({ page }) => {
  await page.click("//a[text()='Simple Form Demo']")
});

test('Click Simple Form Demo', async ({ page }) => {
  await page.click("//a[text()='Simple Form Demo']")
});

test('Enter text in the input field', async ({ page }) => {
  enteredText = “Welcome to LambdaTest”
  await page.click("//input[@id='user-message']")
  await page.locator("//input[@id='user-message']").fill(s)
});

test('Click Get Checked Value', async ({ page }) => {
  await page.click("//button[text()='Get Checked Value']")
});

test('Validate whether the same text message is displayed in the right-hand
panel under the “Your Message:” section.', async ({ page }) => {
  await page.waitForSelector("//div[@id='user-message']/label[text()='Your Message: ']/following::p[1]",{timeout:10000})
  displayedText = await page.locator("//div[@id='user-message']/label[text()='Your Message: ']/following::p[1]").innerText()
  expect(displayedText).toEqual(enteredText)
});




