class LoginPage{
    fieldUsername = '#user-name'
    fieldPassword = '#password'
    buttonLogin = `//input[@id='login-button']`
    messageLogin = '#item_4_title_link > .inventory_item_name'
    messageErrorLogin = `[data-test="error"]`
    
    goToWeb() {
        cy.visit('https://www.saucedemo.com/')
    }
    enterUsername(username) {
        cy.get(this.fieldUsername).type(username)
    }
    enterPassword(pass) {
        cy.get(this.fieldPassword).type(pass)
    }
    clickLogin() {
        cy.xpath(this.buttonLogin).click()
    }
    verifyLogin( messageAppear ) {
        if (messageAppear==='Sauce Labs Backpack') {
            cy.get(this.messageLogin).contains(messageAppear)
        }
        else if (messageAppear === 'Epic sadface: Username is required' || messageAppear === 'Epic sadface: Password is required') {
            cy.get(this.messageErrorLogin).contains(messageAppear)
        } else {
            cy.log('ERROR LOGIN CANNOT HANDLE')
        }
    }
}

module.exports = LoginPage 