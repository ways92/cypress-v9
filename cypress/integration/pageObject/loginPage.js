class LoginPage{
    fieldUsername = '#user-name'
    fieldPassword = '#password'
    buttonLogin = `//input[@id='login-button']`
    messageLogin = '#item_4_title_link > .inventory_item_name'
    messageErrorLogin = `[data-test="error"]`
    
    goToWeb() {
        cy.visit( 'https://www.saucedemo.com/' )
        return this
    }

    enterUsername(username) {
        cy.get( this.fieldUsername ).type( username )
        return this
    }

    enterPassword(pass) {
        cy.get( this.fieldPassword ).type( pass )
        return this
    }

    clickLogin() {
        cy.xpath(this.buttonLogin).click()
        return this
    }

    verifyLogin( messageAppear ) {
        (messageAppear==='Sauce Labs Backpack') ? cy.get( this.messageLogin ).contains( messageAppear )
        : (messageAppear === 'Epic sadface: Username is required' || 'Epic sadface: Password is required') ? cy.get( this.messageErrorLogin ).contains( messageAppear )
        : cy.log('ERROR, CANNOT HANDLE LOGIN ')
    }
}

module.exports = LoginPage 