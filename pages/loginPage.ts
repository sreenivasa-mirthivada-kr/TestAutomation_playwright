import { Page } from "@playwright/test";
import {loginPageMaps} from "../selectors/loginPageMaps.json";
export default class HomePage{
    constructor(public page:Page){

    }
    async enterUserName(uName){
        await this.page.locator(loginPageMaps.txtBox_userName).fill(uName);
    }
    async enterPassword(uPwd){
        await this.page.locator(loginPageMaps.txtBox_password).fill(uPwd);
    }
    async clickLoginButton(){
        await this.page.locator(loginPageMaps.btn_login).click();
    }
}