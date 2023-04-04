
import { byValueKey, byType } from "appium-flutter-finder";

class LoginScreen {

    get loginScreenOption() {
        return byValueKey("1");
    }
    get inputUsername() {
        return byValueKey("username");
    }

    get inputPassword() {
        return byValueKey("password");
    }

    get btnSubmit() {
        return byType("ElevatedButton");
    }

    get loginLabel() {
        return byValueKey("loggedInAs");
    }

    async navigateToLoginScreen() {
        allure.addStep('naviagate to the login screen')
        await driver.elementClick(this.loginScreenOption);
        await driver.pause(1000);
    }

    async login(username, password) {
        allure.addStep('login with ' +  username + " and " + password)
        await driver.elementSendKeys(this.inputUsername, username);
        await driver.elementSendKeys(this.inputPassword, password);
        await driver.pause(3000);
        await driver.elementClick(this.btnSubmit);
        await driver.pause(1000);
    }

    async getLoginText() {
        allure.addStep('get the text after login')
        const loggedInAs = await driver.getElementText(this.loginLabel);
        return loggedInAs;
    }
}

export default new LoginScreen();
