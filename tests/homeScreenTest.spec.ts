import {test,expect} from  "../utilities/baseTest";
import {loginTestData} from "../testdata/loginTestData.json";
import {loginPageMaps} from "../selectors/loginPageMaps.json";
import {homePageMaps} from "../selectors/homePageMaps.json";
test.describe("Home Test Suite",()=>{
    test.beforeEach(async ({ page,loginPage}) => {
        await page.goto('./login'); 
        await expect(page).toHaveTitle(loginPageMaps.title_loginPage);
        await loginPage.enterUserName(loginTestData.userName);
        await loginPage.enterPassword(loginTestData.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveTitle(homePageMaps.title_HomePage);
    });
    test("TestCases Link Validation", async({page,homePage})=>{
        await page.getByRole('link', { name: ' Test Cases' }).click();
        await page.waitForTimeout(5000);
        //Count no of links
        
    });
});