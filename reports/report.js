$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/cucumber.feature");
formatter.feature({
  "name": "SauceDemoPage",
  "description": "\tIn order to order a product in Saucedemo page\n    As a e-commerce vendor\n    I want to get access to the portal",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details from Excel \"src/test/resources/Excel/excel.xlsx\" with sheetName \"ValidLoginDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_login_details_from_Excel_with_sheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with InvalidCredentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter wrong  login details from Excel \"src/test/resources/Excel/excel.xlsx\" with sheetName \"InvalidDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_wrong_login_details_from_Excel_with_sheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not get access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_not_get_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty userName",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter empty userName in login details from Excel \"src/test/resources/Excel/excel.xlsx\" with sheetName \"EmptyDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_empty_userName_in_login_details_from_Excel_with_sheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get username is required message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_get_username_is_required_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sorting products in Price(low to high) order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details from Excel \"src/test/resources/Excel/excel.xlsx\" with sheetName \"ValidLoginDetails\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_login_details_from_Excel_with_sheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003duser-name\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HARIKA\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.saucedemopages.LoginPage.enterUserName(LoginPage.java:22)\r\n\tat com.cts.stepdefinitions.StepDefinitions.i_enter_login_details_from_Excel_with_sheetName(StepDefinitions.java:38)\r\n\tat ✽.I enter login details from Excel \"src/test/resources/Excel/excel.xlsx\" with sheetName \"ValidLoginDetails\"(file:///D:/SeleniumProjectsgit/drive-download-20200329T135853Z-001/SauceDemo/src/main/resources/feature/cucumber.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on Dropdown Box and selecting Price(low to high)",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_Dropdown_Box_and_selecting_Price_low_to_high()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page should display the products in the  order of low to high price",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.page_should_display_the_products_in_the_order_of_low_to_high_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Sorting products in Price(high to low) order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
