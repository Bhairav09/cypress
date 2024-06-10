describe("Assertion Demo", () =>{
  
    it("explicit assertion", () => {
        cy.visit("https://example.cypress.io/commands/assertions");
        cy.title().then((title) => {
          let title1 = "Cypress.io: Kitchen Sink";
          assert.strictEqual(title1, title);
        });
      })
})

// describe('Letcode Test Page', () => {
//     beforeEach(() => {
//       cy.visit('https://letcode.in/test')
//     })
  
//     it('should have a title', () => {
//       cy.title().should('eq', 'Letcode - Test')
//     })
  
//     it('should have a header with text "Letcode"', () => {
//       cy.get('header').should('be.visible').and('contain', 'Letcode')
//     })
  
//     it('should have a navigation menu with links', () => {
//       cy.get('nav ul li a').should('have.length', 5)
//         .and('contain', ['Home', 'Test', 'Practice', 'Blog', 'About'])
//     })
  
//     it('should have a hero section with a heading and paragraph', () => {
//       cy.get('.hero').should('be.visible')
//         .and('contain', 'Welcome to Letcode')
//         .and('contain', 'Start your coding journey today!')
//     })
  
//     it('should have a features section with 3 cards', () => {
//       cy.get('.features .card').should('have.length', 3)
//         .and('contain', ['Learn to Code', 'Practice Coding', 'Get Hired'])
//     })
  
//     it('should have a footer with copyright information', () => {
//       cy.get('footer').should('be.visible')
//         .and('contain', 'Copyright 2023 Letcode. All rights reserved.')
//     })
  // })