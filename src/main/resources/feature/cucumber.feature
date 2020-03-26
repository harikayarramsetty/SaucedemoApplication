Feature: SauceDemoPage 
	In order to order a product in Saucedemo page
    As a e-commerce vendor
    I want to get access to the portal
    


Scenario Outline: Login with ValidCredentials 
	Given I have a browser with sauceDemoPage 
	When I enter userName as '<userName>' and I enter password as  '<password>' 
	Then I should access to the portal 
	Examples: 
		|userName|password|
		|standard_user|secret_sauce|
		|problem_user|secret_sauce|
		|performance_glitch_user|secret_sauce|
		
Scenario: Login with InvalidCredentials 
	Given I have a browser with sauceDemoPage 
	When I enter userName as 'locked_out_user' and I enter password as  'secret_sauce' 
	Then I should not get access to the portal 
	
Scenario: Login with empty userName 
	Given I have a browser with sauceDemoPage 
	When I enter userName as '' and I enter password as  'secret_sauce' 
	Then I should get username is required message
	
Scenario: Sorting products in Price(low to high) order 
	Given I have a browser with sauceDemoPage and open products page 
	When I click on Dropdown Box and selecting Price(low to high) 
	Then Page should display the products in the  order of low to high price 
	
Scenario: Sorting products in Price(high to low) order 
	Given I have a browser with sauceDemoPage and open products page 
	When I click on Dropdown Box and selecting Price(high to low) 
	Then Page should display the products in the  order of high to low price 
	
