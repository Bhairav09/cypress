/// <reference types="Cypress" />       // for Cyress

describe('static dropdown', () => {

    //working
    it('Dropdown with select', function () {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('France')
        .should('have.value', 'France')
        //.should('have.text', 'France') //failed
    })


    //working
    it('Dynamic dropdown', function () {
        cy.visit('https://www.google.com/')
        cy.get("#APjFqb").type('cypress automation');
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get("div.wM6W7d>span").each(($el, index,$list)=> {
            if($el.text()=='cypress automation')
            {
                cy.wrap($el).click()
            }
         })
       cy.get("#APjFqb").should("have.value","cypress automation")
        
     })
})