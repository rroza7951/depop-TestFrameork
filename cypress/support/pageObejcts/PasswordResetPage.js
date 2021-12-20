class PasswordResetPage {

    getEmailField() {
        return cy.get('.Input-sc-__sc-13l8oln-0')
    }

    getResetSubmitBtn() {
        return cy.get('[data-testid="resetPasswordForm__submit"]')
    }

}

export default PasswordResetPage