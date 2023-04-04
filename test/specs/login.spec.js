import LoginScreen from '../screenobjects/login.screen';
import { expect } from 'chai';

describe("The flutter App", async () => {

  it('login', async () => {

    await LoginScreen.navigateToLoginScreen();
    await LoginScreen.login('alice', 'mypassword')
    const loggedInAs = await LoginScreen.getLoginText();
    expect(loggedInAs).to.be.equals("Logged in as alice.");
  });
});
