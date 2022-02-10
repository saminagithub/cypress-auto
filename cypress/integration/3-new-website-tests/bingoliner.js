describe('Bingoliner test', function()
{
it('Log in test',function()
{
cy.visit("https://m.bingoliner.com/register/");
cy.wait(2000);
//cy.get('.already-registered').click();
//cy.wait(2000);
//cy.get('.new-here').click();
cy.get('.sc-crHmcD > :nth-child(1) > :nth-child(1) > .MuiFormControl-root').type('samina');
//cy.wait(2000);
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
cy.get('#fc_widget').click();
cy.wait(2000);
cy.get('.MuiButton-label').contains('REGISTER');
cy.wait(2000);
cy.get('.logo').should('be.visible');
cy.wait(2000);
cy.get(':nth-child(5) > [style="flex: 1 1 0%;"] > .sc-iqseJM > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click();
cy.wait(2000);
cy.get('.MuiList-root > [tabindex="0"]').click();
cy.wait(2000);
cy.get('#fc_widget').dblclick();
//cy.wait(2000);
//cy.get('#fc_widget').click();
});

});