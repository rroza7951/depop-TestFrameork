/// <reference types="Cypress" />

import LoginPage from '../../support/pageObejcts/LoginPage'
import HomePage from '../../support/pageObejcts/HomePage'
import PasswordResetPage from '../../support/pageObejcts/PasswordResetPage'
const loginPage = new LoginPage()
const homePage = new HomePage()
const passwordResetPage = new PasswordResetPage()
describe("Verify the login appliation", function () {

    before(function () {
        cy.visit(Cypress.env('url'))
        cy.url().should('include', 'https://www.depop.com/')
        homePage.getLogo().should('have.text', 'Depop')
        homePage.getCookieAcceptBtn().click()
        cy.title().should('include', 'Depop - buy, sell, discover unique fashion')
        homePage.getLoginLink().click({ force: true })
    })

    beforeEach(function () {

        cy.fixture('testData').then(function (data) {
            this.data = data
        })

    })


    it("Login with valid user and password", function () {

        cy.title().should('include', 'Login - Depop')
        loginPage.getUsernameField().type(this.data.username)
        loginPage.getPasswordField().type(this.data.password)
        loginPage.getLoginBtn().click()
    })

    it("Login with invalid Username and valid password", function () {

        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getUsernameField().type(this.data.invalidUserName)
        loginPage.getPasswordField().type(this.data.password)
        loginPage.getLoginBtn().click()
        cy.get('p#login__error--server').then(function (element) {
            const errMsg = element.text();
            expect(errMsg.includes('Incorrect username or password')).to.be.true
        })
    })

    it("Login with valid username and invalid Password", function () {
        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getUsernameField().type(this.data.username)
        loginPage.getPasswordField().type(this.data.invalidPassword)
        loginPage.getLoginBtn().click()
        cy.get('p#login__error--server').then(function (element) {
            const errMsg = element.text();
            expect(errMsg.includes('Incorrect username or password')).to.be.true
        })


    })
    it("Login without username and password", function () {
        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getLoginBtn().click()

        cy.get('[data-testid="login__error--username"]').then(function (el) {
            const errMsg = el.text()
            expect(errMsg.includes('Username or email is required')).to.be.true

        })
        cy.get('[data-testid="login__error--password"]').then(function (el) {
            const errMsg = el.text()
            expect(errMsg.includes('Password is required')).to.be.true

        })

    })
    it("Login with password and no username", function () {
        cy.reload()
        homePage.getCookieAcceptBtn().click()
        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getPasswordField().type(this.data.password)
        loginPage.getLoginBtn().click()

        cy.get('[data-testid="login__error--username"]').then(function (el) {
            const errMsg = el.text()
            expect(errMsg.includes('Username or email is required')).to.be.true

        })

    })
    it("Login with Username and no password", function () {

        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getUsernameField().type(this.data.username)
        loginPage.getLoginBtn().click()

        cy.get('[data-testid="login__error--password"]').then(function (el) {
            const errMsg = el.text()
            expect(errMsg.includes('Password is required')).to.be.true

        })
    })

    it("Verify forget password", function () {

        loginPage.getUsernameField().clear()
        loginPage.getPasswordField().clear()
        loginPage.getForgetPasswordLink().click()
        cy.get('.sc-iCoGMd').should('have.text', 'Password Problems?')
        passwordResetPage.getEmailField().type(this.data.email)
        passwordResetPage.getResetSubmitBtn().click()
        cy.get('[data-testid="confirmation"] > .sc-jrsJWt').then(function (el) {
            const msg = el.text()
            expect(msg.includes('A message has been sent to you by email')).to.be.true
        })

    })
})
