class HomePage {

    getLogo() {
        return cy.get('.Logo__StyledLogo-sc-__jg7mra-0 > svg')
    }

    getCookieAcceptBtn() {
        return cy.get('[data-testid="cookieBanner__acceptAllButton"]')
    }

    getLoginLink() {
        return cy.get('[data-testid="navigation__login"]')
    }

}

export default HomePage