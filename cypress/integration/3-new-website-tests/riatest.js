
describe('My First Test Suite', function()
{
it('My First test does not do much!',function()
{
cy.visit("https://riaqa.jemstep.com");
cy.wait(2000);
cy.get('#emailAddress').click();
cy.get('#emailAddress').type('riatest3@jemstepqa.com');
cy.get('#password').type('House@12345');
cy.get('#btn-login').click();
cy.get('.active > .navbar-link-font').click;
cy.get('#dashboard-left > :nth-child(2)');
cy.get(':nth-child(2) > .panel-heading > .panel-title').contains('Asset Allocation');
cy.get(':nth-child(2) > .navbar-link-font').click();
cy.get('thead > tr > .ticker').contains('Ticker');
cy.get(':nth-child(3) > .navbar-link-font').click();
cy.get('.page-header-font').contains('Client Services');
cy.get('#help > .navbar-link-font').click();
cy.get('.dropdown-menu > :nth-child(1) > a').contains('support@jemstep.com');
cy.get('.active > .navbar-link-font').click();
cy.get(':nth-child(1) > .navbar-link-font').click();
cy.get('img').should('be.visible');
});

});

