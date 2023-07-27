import { chromium,test, expect } from '@playwright/test';
//const { chromium, test, expect } = require('@playwright/test')

test("browse context test",async () => {
  const browser = await chromium.launch({ headless: false });
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  
  const page = await context.newPage();
  await page.goto('https://www.demoblaze.com/index.html');
 
 
  console.log(browser.contexts().length);

  await browser.close();
  });

  