import {test as baseTest} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
type pageFixtures={
    loginPage: LoginPage;
    homePage : HomePage;
}
const testPages = baseTest.extend<pageFixtures>({
    
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    homePage: async({page},use)=>{
        await use(new HomePage(page));
    }
})
export const test=testPages;
export { expect } from '@playwright/test';