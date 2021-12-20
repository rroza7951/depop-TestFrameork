# depop-TestFrameork

This repo contains the template framework with login page tests written in Cypress for the Depop application.

This framework is implemented with Page Object Model Design pattern which helps in maintenance and managing of the framework.

## Installation Setup

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

Latest Node version eg : node v16.13.1

If you get stuck, here is more help:

[Cypress Support](https://on.cypress.io/support)

### 1. Installing Cypress
[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Executing the test case.

    ## clone this repo to a local directory
    git clone https://github.com/rroza7951/depop-TestFrameork.git

    ## cd into the cloned repository
    cd depopCypressAutomation

    ## install the node_modules
    npm install

    ## Open another terminal and start the test
    npm run test

The npm run test will start the execution and validate the login functionality of the Depop application.

### 3. Reporting
    Mochawesome report is used to generate the report. The html report can be viewed in the mochawesomme-report folder