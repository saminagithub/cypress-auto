describe('Bingoliner test', function()
{
it('Log in test',function()
{
cy.visit("https://m.bingoliner.com/register/");
cy.wait(2000);
cy.get('.already-registered').click();
cy.wait(2000);
cy.get('.new-here').click();
cy.wait(2000);
//cy.get('#.sc-crHmcD > :nth-child(1)').type("samina");
cy.get('.sc-crHmcD > :nth-child(1) > :nth-child(1) > .MuiFormControl-root').type('samina');
cy.wait(2000);
cy.get(':nth-child(2) > .item > .MuiFormControl-root').type('sammytest@fun.com');
cy.wait(2000);
cy.get(':nth-child(8) > .item').click();
cy.wait(2000);
cy.get('.sc-crHmcD > :nth-child(9)').click();
cy.wait(2000);
cy.get('.sc-dlVxhl > .MuiFormControl-root > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click();
cy.wait(2000);
cy.get('.style-one').click();
cy.wait(2000);
cy.get('.MuiButton-label').contains('REGISTER');
cy.wait(2000);
cy.get('.logo').should('be.visible');
});

});