class LoginPage{
    fieldUsername = '#username'
    fieldPassword = '#password'
    buttonLogin = '.fa'
    messageLogin = '#flash'
    
    goToWeb() {
        cy.visit('https://the-internet.herokuapp.com/login')
    }
    enterUsername(username) {
        cy.get(this.fieldUsername).type(username)
    }
    enterPassword(pass) {
        cy.get(this.fieldPassword).type(pass)
    }
    clickLogin() {
        cy.get(this.buttonLogin).click()
    }
    verifyLogin(messageAppear) {
        cy.get(this.messageLogin).contains(messageAppear)
    }
}

module.exports = LoginPage 