import{test,expect}from '@playwright/test'
import { clearScreenDown } from 'node:readline';
test("title",async({page})=>{
    await page.goto("https://formsmarts.com/form-builder-signup");
   
    await page.getByRole("textbox",{name:"First name"}).fill("prapu1");
    await page.getByRole("textbox",{name:"Last name"}).fill("lnameprapu1");
    await page.getByRole("textbox",{name:"Email"}).fill("abcd@yopmail.com");
    // await page.getByRole("textbox",{name:"Password"}).fill("Studyside@123");
    await page.locator("//input[@id='passwd']").fill("Studyside@123");
    await page.getByRole("textbox",{name:"Re-enter password"}).fill("Studyside@123");
    await page.getByRole('combobox', {name:"Select organization type:"}).selectOption({label:"Business"});
    await page.getByRole("combobox",{name:"country"}).selectOption({label:"India"});
await page.getByRole("checkbox",{name:" I agree to "}).click();
await page.getByRole("button",{name:"Create Account"}).click();

    await page.pause();








})