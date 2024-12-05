// cypress/integration/account_link_test.js

describe('Book Pickleball court from Bloomington North', () => {
    it('Checks if the Account link is visible and clicks on it', () => {
        // Visit the target URL
        cy.visit('https://my.lifetime.life/clubs/mn/bloomington-north.html');
        cy.log('line1');
        // Select the Account link by its visible text or class (adjust the selector as needed)
        cy.get('.nav-item > .nav-link > .js-login-label')
            .should('be.visible') // Verify it is visible
            .click(); // Click on the link to prepare for login
        cy.log('line2');
        // Optionally, verify that the login form or page is displayed
        // For example:
        cy.get('.js-login-link').click();
        cy.log('line3');
        cy.get('.login-username-group').type('username');
        cy.log('line4');
        cy.get('.login-password-group').type('password');
        cy.log('line5');
        cy.get('.btn-wrap').click();
        cy.log('line6');
        cy.get('#primaryNav > :nth-child(2) > .nav-link').click();
        cy.log('line7');
        cy.get('.open > .dropdown-menu > .list-unstyled > :nth-child(2) > .dropdown-item').click();
        cy.log('line8');

        //cy.get('.planner-date-btn-next').click();
        //cy.get(':nth-child(6) > [data-testid="plannerDate"] > .planner-date-day > .planner-date-number').click();

        cy.visit('https://my.lifetime.life/account/reservations.html?resourceId=ZXhlcnA6N2JyMzQwMTo3MDE1OTExNDE1MDg=&start=2024-12-08T20:00:00-06:00&duration=60&cancelUrl=aHR0cHM6Ly9teS5saWZldGltZS5saWZlL2NsdWJzL21uL2Jsb29taW5ndG9uLW5vcnRoL3Jlc291cmNlLWJvb2tpbmcuaHRtbD9zcG9ydD1QaWNrbGViYWxsJTNBK0luZG9vciZjbHViSWQ9NyZkYXRlPTIwMjQtMTItMDgmc3RhcnRUaW1lPS0xJmR1cmF0aW9uPTMwJmhpZGVNb2RhbD10cnVl');
        cy.log('line9');
        cy.get('.c-indicator')
            .should('be.visible') // Verify it is visible
            .click();
        cy.log('line10');


        //https://my.lifetime.life/account/reservations.html?resourceId=ZXhlcnA6N2JyMzYwMTo3MDE1OTExNDE1MDg=&start=2024-12-04T21:00:00-06:00&duration=60&cancelUrl=aHR0cHM6Ly9teS5saWZldGltZS5saWZlL2NsdWJzL21uL2Jsb29taW5ndG9uLW5vcnRoL3Jlc291cmNlLWJvb2tpbmcuaHRtbD9zcG9ydD1QaWNrbGViYWxsJTNBK0luZG9vciZjbHViSWQ9NyZkYXRlPTIwMjQtMTItMDQmc3RhcnRUaW1lPS0xJmR1cmF0aW9uPTYwJmhpZGVNb2RhbD10cnVl

        //https://my.lifetime.life/account/reservations.html?resourceId=ZXhlcnA6N2JyNDAwMTo3MDE1OTExNDE1MDg=&start=2024-12-04T21:00:00-06:00&duration=60&cancelUrl=aHR0cHM6Ly9teS5saWZldGltZS5saWZlL2NsdWJzL21uL2Jsb29taW5ndG9uLW5vcnRoL3Jlc291cmNlLWJvb2tpbmcuaHRtbD9zcG9ydD1QaWNrbGViYWxsJTNBK0luZG9vciZjbHViSWQ9NyZkYXRlPTIwMjQtMTItMDQmc3RhcnRUaW1lPS0xJmR1cmF0aW9uPTYwJmhpZGVNb2RhbD10cnVl
        //https://my.lifetime.life/account/reservations.html?resourceId=ZXhlcnA6N2JyMzQwMTo3MDE1OTExNDE1MDg=&start=2024-12-06T08:00:00-06:00&duration=60&cancelUrl=aHR0cHM6Ly9teS5saWZldGltZS5saWZlL2NsdWJzL21uL2Jsb29taW5ndG9uLW5vcnRoL3Jlc291cmNlLWJvb2tpbmcuaHRtbD9zcG9ydD1QaWNrbGViYWxsJTNBK0luZG9vciZjbHViSWQ9NyZkYXRlPTIwMjQtMTItMDYmc3RhcnRUaW1lPS0xJmR1cmF0aW9uPTYwJmhpZGVNb2RhbD10cnVl


        //cy.get('.c-indicator').click();
        //cy.get('[data-testid="finishBtn"]').click();

    });
});

