import{test,expect}from '@playwright/test'
test("title",async({page})=>{
await page.goto("https://unity.preval.qa.fics.net/");
await page.getByRole("textbox",{name:"username"}).fill("piadmin");
await page.getByRole("textbox",{name:"password"}).fill("TestAdmin123");
await page.getByRole("button",{name:"LOGIN"}).click();
await page.get

await page.pause();
})
