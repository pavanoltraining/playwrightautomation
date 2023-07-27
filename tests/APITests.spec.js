import { expect, test } from "@playwright/test";

// Create
test("Create user", async ({ request, baseURL }) => {
    const _response = await request.post(`${baseURL}`, {
        data: {
            "name": "xyz}",
            "gender": "male",
            "email": "xyzabc245faas@gmail.com",
            "status": "inactive"
        }, headers: {
            "Accept": "application/json"
        }
    });
    expect(_response.status()).toBe(201);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());
    const res = await _response.json();
    _number = res.result.task_effective_number;
    _sys_id = res.result.sys_id;

    // output as xml
    // console.log((await _response.body()).toString());
})
// test("", async ({ page }) => {
//     await page.request.get("")
// })
