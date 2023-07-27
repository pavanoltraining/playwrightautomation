const { test, expect } = require('@playwright/test');

test('LocateElements', async ({ page }) => {
    
    await page.goto('https://www.demoblaze.com/index.html')

     // Locate and return all the links on the webpage
    /*const links = await page.$$('a');
  
    for (const link of links) {
            const linktext = await link.textContent();
            console.log(linktext);
        }
        */

    //Locate all the products displayed on home page
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a")
 
    for (const product of products) {
        const prodName = await product.textContent();
        console.log(prodName);
    }

 });