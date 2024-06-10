describe("Check UI elements" , () =>{
    it("checking radio button", () =>{
        cy.visit("https://letcode.in/radio");
        cy.get("[name='answer']").should('be.visible');
        // cy.get("no").should('be.visible');
        cy.xpath(" (//label[text()=' No '])[1]").click(); // radio button
        // cy.xpath(" (//label[text()=' Yes '])[2]").click().should('be.checked');
        cy.xpath(" //label[text()=' Remember me ']").click().should('not.be.checked'); //checkbox
    })
})