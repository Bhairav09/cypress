describe("Css Selector", ()=>{
    it("css" , () =>{
        cy.visit("https://letcode.in/edit");
        cy.get("[placeholder='Enter first & last name']").type("testing script");
        // cy.get("join").click();
        cy.xpath("//input[@id='fullName']").type(" again")
    })
})