
import { byValueKey, byType } from "appium-flutter-finder";

class EchoScreen {

    get echoScreenOption() {
        return byValueKey("0");
    }
    get inputField() {
        return byType("TextFormField");
    }

    get btnSubmit() {
        return byType("ElevatedButton");
    }

    get echoText() {
        return byValueKey("value");
    }

    async navigateToEchoBoxScreen() {
        allure.addStep('naviagate to the Echo box screen')
        await driver.elementClick(this.echoScreenOption);
        await driver.pause(1000);
    }

    async enterTextInEchoText(text) {
        allure.addStep('Echo text in input field: ' + text)
        await driver.elementSendKeys(this.inputField, text);
        await driver.elementClick(this.btnSubmit);
        await driver.pause(1000);
    }

    async getEchoText() {
        allure.addStep('get the echo text')
        const loggedInAs = await driver.getElementText(this.echoText);
        return loggedInAs;
    }
}

export default new EchoScreen();
