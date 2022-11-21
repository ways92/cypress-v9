import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
require( 'cypress-xpath' );
const loginPage = require( '../pageObject/loginPage' )
const lp = new loginPage

Given('I navigate to login page', () => {
  lp.goToWeb()
})

When('I enter username', () => {
  lp.enterUsername('standard_user')
})

And('I enter password', () => {
  lp.enterPassword('secret_sauce')
})

And('I click login button', () => {
  lp.clickLogin()
})

Then('I verify login', () => {
    lp.verifyLogin('Sauce Labs Backpack')
})
