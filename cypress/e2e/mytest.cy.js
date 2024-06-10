describe('My First Test', () => {
    it('test1', () => {
        cy.visit("www.google.com");
        cy.title().should('eq','Google');
    })
    
    it('test2', () => {
        cy.visit("https://in.linkedin.com/");
    })


  })

  describe('My Second Test', () =>{
    it('test3', () =>{
        cy.visit("https://www.cypress.io/");
    })
    it('test4', () => {
        cy.visit("https://www.cypress.io/blog");
    })
  })