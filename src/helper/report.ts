const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Demo test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "138",
        },
        device: "Angel - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Demo Application" },
            { label: "Release", value: "1.0.0" }
        ],
    },
});