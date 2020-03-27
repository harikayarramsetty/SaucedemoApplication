package com.cts.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import com.cts.saucedemopages.LoginPage;
import com.cts.saucedemopages.MenuPage;
import com.cts.saucedemopages.ProductsPage;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitions {
	public WebDriver driver;

	@Given("I have a browser with sauceDemoPage")
	public void i_have_a_browser_with_sauceDemoPage() {
		System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com/");
	}

	@When("I enter userName as {string} and I enter password as  {string}")
	public void i_enter_userName_as_and_I_enter_password_as11(String userName, String password) {
		LoginPage loginpage= new LoginPage(driver);
		
		loginpage.enterUserName(userName);
		loginpage.enterPassword( password);
	    loginpage.clickOnLogin();
	}

	@Then("I should access to the portal")
	public void i_should_access_to_the_portal() {
		MenuPage menupage= new MenuPage(driver);
		String actualTitle = menupage.getTitle();
		Assert.assertEquals("Swag Labs", actualTitle);
	}

	@Then("I should not get access to the portal")
	public void i_should_not_get_access_to_the_portal() {
		LoginPage loginpage= new LoginPage(driver);
		String error = loginpage.errorMessage();
		System.out.println(error);
		Assert.assertEquals("Epic sadface: Sorry, this user has been locked out.", error);

	}

	@Then("I should get username is required message")
	public void i_should_get_username_is_required_message() {
		LoginPage loginpage= new LoginPage(driver);
		String error = loginpage.errorMessage();

		Assert.assertEquals("Epic sadface: Username is required", error);
	}

	@Given("I have a browser with sauceDemoPage and open products page")
	public void i_have_a_browser_with_sauceDemoPage_and_open_products_page() {
		System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com/");
		LoginPage loginpage= new LoginPage(driver);
		loginpage.enterUserName( "standard_user");
		loginpage.enterPassword( "secret_sauce");
		loginpage.clickOnLogin();
	}

	@When("I click on Dropdown Box and selecting Price\\(low to high)")
	public void i_click_on_Dropdown_Box_and_selecting_Price_low_to_high() {
		ProductsPage productspage=new ProductsPage(driver);
		productspage.sortingProducts( "Price (low to high)");
	}

	@Then("Page should display the products in the  order of low to high price")
	public void page_should_display_the_products_in_the_order_of_low_to_high_price() {
		ProductsPage productspage=new ProductsPage(driver);
		String LowToHigh = productspage.productLToH();
		Assert.assertEquals("true", LowToHigh);
	}

	@When("I click on Dropdown Box and selecting Price\\(high to low)")
	public void i_click_on_Dropdown_Box_and_selecting_Price_high_to_low() {
		ProductsPage productspage=new ProductsPage(driver);
		productspage.sortingProducts( "Price (high to low)");
	}

	@Then("Page should display the products in the  order of high to low price")
	public void page_should_display_the_products_in_the_order_of_high_to_low_price() {
		ProductsPage productspage=new ProductsPage(driver);
		String HighToLow = productspage.productHToL();
		Assert.assertEquals("true", HighToLow);
	}

	
}
