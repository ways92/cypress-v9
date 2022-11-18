/// <reference types="cypress" />
require( 'cypress-xpath' );
const loginPage = require( '../pageObject/loginPage' )
const lp = new loginPage()

describe( 'Login test', () => {
    
    it('Login valid data', () => {
        cy.visit( 'https://the-internet.herokuapp.com/login' )
        cy.get( '#username' ).type( 'tomsmith' )
        cy.get( '#password' ).type( 'SuperSecretPassword!' )
        cy.xpath( `//i[contains(text(),'Login')]` ).click()
        cy.get( '#flash' ).contains( 'You logged into a secure area!' )
    });
    
    it.only('Login POM', () => {
        lp.goToWeb()
        lp.enterUsername('tomsmith')
        lp.enterPassword('SuperSecretPassword!')
        lp.clickLogin()
        lp.verifyLogin('You logged into a secure area!')
    });
    
});