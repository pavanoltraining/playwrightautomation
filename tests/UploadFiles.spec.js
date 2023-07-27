// Reference : https://playwright.dev/docs/input#upload-files

const {test, expect}=require('@playwright/test')

test('Single File',async ({page})=>{

    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/testfile1.pdf')
   
    await page.waitForTimeout(5000)
})

test.only('Multiple Files',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
                .setInputFiles(['tests/uploadFiles/testfile1.pdf',
                                 'tests/uploadFiles/testfile2.pdf']);

    await page.waitForTimeout(3000)
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    await page.waitForTimeout(3000)

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(3000)

})
