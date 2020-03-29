Feature: SauceDemoPage 
	In order to order a product in Saucedemo page
    As a e-commerce vendor
    I want to get access to the portal
    


Scenario: Login with ValidCredentials 
	Given I have a browser with sauceDemoPage 
	When I enter login details from Excel "src/test/resources/Excel/excel.xlsx" with sheetName "ValidLoginDetails"
	Then I should access to the portal 
	
		
	Scenario: Login with InvalidCredentials 
	Given I have a browser with sauceDemoPage 
	When I enter wrong  login details from Excel "src/test/resources/Excel/excel.xlsx" with sheetName "InvalidDetails" 
	Then I should not get access to the portal 
	
Scenario: Login with empty userName 
	Given I have a browser with sauceDemoPage 
	When I enter empty userName in login details from Excel "src/test/resources/Excel/excel.xlsx" with sheetName "EmptyDetails"
	Then I should get username is required message	
		
		
Scenario: Sorting products in Price(low to high) order 
	Given I have a browser with sauceDemoPage 
	And I enter login details from Excel "src/test/resources/Excel/excel.xlsx" with sheetName "ValidLoginDetails"
	
	When  I click on Dropdown Box and selecting Price(low to high) 
	Then Page should display the products in the  order of low to high price 
	
Scenario: Sorting products in Price(high to low) order 
	Given I have a browser with sauceDemoPage 
	
	And  I enter login details from Excel "src/test/resources/Excel/excel.xlsx" with sheetName "ValidLoginDetails" 
	When I click on Dropdown Box and selecting Price(high to low) 
	Then Page should display the products in the  order of high to low price 
	
