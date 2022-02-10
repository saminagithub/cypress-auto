const { cyan } = require("colorette");

describe('youTube test', function() {
    it('My musictest case ', function() {
  
    cy.visit("https://www.youtube.com/");
    cy.get('#search-input > #search').type('justin bieber intentions{enter}');
    cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click();
    // add for loop sleep waite count 10 20 sec
    //cy.get('#ad-text\:q').click({ force: true });
    //cy.get('.ytp-ad-skip-button-icon').click({ force: true });
    //cy.wait(2000);
    //cy.get(':nth-child(1) > #dismissible > .details > .metadata > .yt-simple-endpoint > h3.style-scope > #video-title').click();   
})

  });