package com.cts.stepdefinitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cts.saucedemopages.LoginPage;
import com.cts.saucedemopages.MenuPage;
import com.cts.saucedemopages.ProductsPage;
import com.cts.utils.ReadExcel;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitions {
	public WebDriver driver;

	@Given("I have a browser with sauceDemoPage")
	public void i_have_a_browser_with_sauceDemoPage() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com/");
	}

	@When("I enter login details from Excel {string} with sheetName {string}")
	public void i_enter_login_details_from_Excel_with_sheetName(String fileDetails, String sheetName)
			throws IOException {
		// object for constructor
		LoginPage loginpage = new LoginPage(driver);
		String str[][] = ReadExcel.getSheetIntoStringArray(fileDetails, sheetName);
		// enter userName
		loginpage.enterUserName(str[0][0]);
		// enter password
		loginpage.enterPassword(str[0][1]);
		// click on login
		loginpage.clickOnLogin();

	}

	@Then("I should access to the portal")
	public void i_should_access_to_the_portal() {
		MenuPage menupage = new MenuPage(driver);
		String actualTitle = menupage.getTitle();
		Assert.assertEquals("Swag Labs", actualTitle);
	}

	@When("I enter wrong  login details from Excel {string} with sheetName {string}")
	public void i_enter_wrong_login_details_from_Excel_with_sheetName(String fileDetails, String sheetName)
			throws IOException {
		LoginPage loginpage = new LoginPage(driver);
		String str[][] = ReadExcel.getSheetIntoStringArray(fileDetails, sheetName);

		loginpage.enterUserName(str[0][0]);
		loginpage.enterPassword(str[0][1]);
		loginpage.clickOnLogin();
	}

	@Then("I should not get access to the portal")
	public void i_should_not_get_access_to_the_portal() {
		LoginPage loginpage = new LoginPage(driver);
		String error = loginpage.errorMessage();
		System.out.println(error);
		Assert.assertEquals("Epic sadface: Sorry, this user has been locked out.", error);

	}

	@When("I enter empty userName in login details from Excel {string} with sheetName {string}")
	public void i_enter_empty_userName_in_login_details_from_Excel_with_sheetName(String fileDetails, String sheetName)
			throws IOException {
		// object for constructor
		LoginPage loginpage = new LoginPage(driver);
		String str[][] = ReadExcel.getSheetIntoStringArray(fileDetails, sheetName);
		// enter userName
		loginpage.enterUserName(str[0][0]);
		// enter password
		loginpage.enterPassword(str[0][1]);
		// click on login
		loginpage.clickOnLogin();
	}

	@Then("I should get username is required message")
	public void i_should_get_username_is_required_message() {
		LoginPage loginpage = new LoginPage(driver);
		String error = loginpage.errorMessage();

		Assert.assertEquals("Epic sadface: Username is required", error);
	}

	@When("I click on Dropdown Box and selecting Price\\(low to high)")
	public void i_click_on_Dropdown_Box_and_selecting_Price_low_to_high() {
		ProductsPage productspage = new ProductsPage(driver);
		productspage.sortingProducts("Price (low to high)");
	}

	@Then("Page should display the products in the  order of low to high price")
	public void page_should_display_the_products_in_the_order_of_low_to_high_price() {

		ProductsPage productspage = new ProductsPage(driver);
		String LowToHigh = productspage.productLToH();
		Assert.assertEquals("true", LowToHigh);
	}

	@When("I click on Dropdown Box and selecting Price\\(high to low)")
	public void i_click_on_Dropdown_Box_and_selecting_Price_high_to_low() {
		ProductsPage productspage = new ProductsPage(driver);
		productspage.sortingProducts("Price (high to low)");
	}

	@Then("Page should display the products in the  order of high to low price")
	public void page_should_display_the_products_in_the_order_of_high_to_low_price() {
		ProductsPage productspage = new ProductsPage(driver);
		String HighToLow = productspage.productHToL();
		Assert.assertEquals("true", HighToLow);
	}

}
