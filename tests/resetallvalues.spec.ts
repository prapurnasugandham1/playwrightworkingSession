import{test,expect}from "@playwright/test"
test("title",async({page})=>{
await page.goto("https://www.roboform.com/filling-test-all-fields");
await page.locator("//input[@name='01___title']").fill("new1");
// await page.getByRole("textbox",{name:"01___title"}).fill("titlenew");
await page.locator("//input[@name='02frstname']").fill("FN");
await page.locator("//input[@name='03middle_i']").fill("MN");
await page.locator("//input[@name='04lastname']").fill("LN");
await page.locator("//input[@name='04fullname']").fill("fnn");
await page.locator("//input[@name='05_company']").fill("company");
await page.locator("//input[@name='06position']").fill("position");
await page.locator("//input[@name='10address1']").fill("add1");
await page.locator("//input[@name='72__commnt']").fill("comments");
await page.pause();
await page.getByRole("button",{name:"Reset"}).click();



await page.pause();






})