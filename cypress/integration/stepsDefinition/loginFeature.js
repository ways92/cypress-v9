import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to login page', () => {
  cy.visit('https://www.saucedemo.com/')
})

When('I enter username', () => {
  cy.get('#user-name').type('standard_user')
})

And('I enter password', () => {
  cy.get('#password').type('secret_sauce')
})

And('I click login button', () => {
  cy.get('#login-button').click()
})

Then('I verify login', () => {
    cy.get('#item_4_img_link').should('be.visible')
})
