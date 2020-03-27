$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/cucumber.feature");
formatter.feature({
  "name": "SauceDemoPage",
  "description": "\tIn order to order a product in Saucedemo page\n    As a e-commerce vendor\n    I want to get access to the portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter userName as \u0027\u003cuserName\u003e\u0027 and I enter password as  \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I enter userName as \u0027standard_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
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
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I enter userName as \u0027problem_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
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
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I enter userName as \u0027performance_glitch_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
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
  "name": "I enter userName as \u0027locked_out_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
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
  "name": "I enter userName as \u0027\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
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
  "name": "I have a browser with sauceDemoPage and open products page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage_and_open_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Dropdown Box and selecting Price(low to high)",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_Dropdown_Box_and_selecting_Price_low_to_high()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page should display the products in the  order of low to high price",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.page_should_display_the_products_in_the_order_of_low_to_high_price()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sorting products in Price(high to low) order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage and open products page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage_and_open_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Dropdown Box and selecting Price(high to low)",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_Dropdown_Box_and_selecting_Price_high_to_low()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page should display the products in the  order of high to low price",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.page_should_display_the_products_in_the_order_of_high_to_low_price()"
});
formatter.result({
  "status": "passed"
});
});