package com.cts.saucedemopages;

import org.openqa.selenium.WebDriver;

public class MenuPage {

		private WebDriver driver;
	
	public MenuPage(WebDriver driver)
	{
		this.driver=driver;
	}

	
	public  String getTitle() {
		String actualTitle = driver.getTitle();
		return actualTitle;
	}

}
