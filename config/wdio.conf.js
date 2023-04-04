import { join } from 'path';
import allure from '@wdio/allure-reporter';

exports.config = {
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    runner: "local",
    logLevel: 'debug',
    coloredLogs: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: "mocha",
    capabilities: [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'Android',
            'appium:platformVersion': '13.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'Flutter',
            'appium:app': join(process.cwd(), './apps/the_app_flutter.apk'),
            'appium:noReset': false,
            'appium:newCommandTimeout': 240,
        },
    ],
    reporters: [
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    relaxedSecurity: true,
                    address: 'localhost',
                    log: './appium.log',
                },
            },
        ]
    ],
    async beforeSession(config, capabilities) {
        global.allure = allure;
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        allure.addStep('after test')
        await browser.takeScreenshot();
    },
}
