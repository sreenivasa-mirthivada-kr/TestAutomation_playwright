import {test,expect} from  "../utilities/baseTest";
import {loginTestData} from "../testdata/loginTestData.json";
import {loginPageMaps} from "../selectors/loginPageMaps.json";
import {homePageMaps} from "../selectors/homePageMaps.json";
test.describe("Login test cases", () => {
    test("Login Page Title Validation", async({page})=>{ 
        await page.goto('./login'); 
        await expect(page).toHaveTitle(loginPageMaps.title_loginPage);
    })
    test("Valid Login Succefull verification", async({page,loginPage}) => {
        await page.goto('./login');
        await loginPage.enterUserName(loginTestData.userName);
        await loginPage.enterPassword(loginTestData.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveTitle(homePageMaps.title_HomePage);
    });
    test("Invalid Login credential verification", async({page,loginPage}) => {
        await page.goto('./login');
        await loginPage.enterUserName(loginTestData.userName);
        await loginPage.enterPassword(loginTestData.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveTitle(homePageMaps.title_HomePage);
    });
});