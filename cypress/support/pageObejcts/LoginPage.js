class LoginPage {


    getUsernameField() {
        return cy.get('[data-testid="username"]')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getLoginBtn() {
        return cy.get('[data-testid="login__cta"]')
    }

    getForgetPasswordLink() {

        return cy.get('[data-testid="forgotPassword__button"]')

    }
}

export default LoginPage