/// <reference types="cypress" />
require( 'cypress-xpath' );
const dataLogin = require( '../../fixtures/DataLogin.json' )
const loginPage = require( '../pageObject/loginPage' )
const lp = new loginPage()

describe( 'Login test', () => {
    
    it('Login valid data', () => {
        cy.visit( 'https://www.saucedemo.com/' )
        cy.get( '#user-name' ).type( 'standard_user' )
        cy.get( '#password' ).type( 'secret_sauce' )
        cy.xpath( `//input[@id='login-button']` ).click()
        cy.get( '#item_4_title_link > .inventory_item_name' ).contains('Sauce Labs Backpack')
        cy.get( '#item_4_title_link > .inventory_item_name' ).invoke( 'text' ).then( ( textnya ) => {
            cy.log(textnya)
        })
    } );
    
    it('Login POM valid data', () => {
        lp.goToWeb()
        lp.enterUsername('standard_user')
        lp.enterPassword('secret_sauce')
        lp.clickLogin()
        lp.verifyLogin('Sauce Labs Backpack')
    });
    
    dataLogin.forEach( data => { 
        it( `login POM with data driven ${data.case}`, () => {
            lp.goToWeb()
            if ( data.username != "" ) {
                lp.enterUsername(data.username)
            }
            if ( data.password != "" ) { 
                lp.enterPassword(data.password)
            }
            lp.clickLogin()
            lp.verifyLogin(data.verification)
        });
    });
});