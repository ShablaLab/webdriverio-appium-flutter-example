import EchoScreen from '../screenobjects/echo.screen';
import { expect } from 'chai';

describe("The flutter App", () => {

  it('echo box pass', async () => {
    await EchoScreen.navigateToEchoBoxScreen();
    await EchoScreen.enterTextInEchoText('hello');
    const value = await EchoScreen.getEchoText();
    expect(value).to.be.equals("hello");
  });
});
