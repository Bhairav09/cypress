describe("handeling frames", () =>{
    it("approch1", () =>{
     cy.visit("https://letcode.in/frame");
     const iframe = cy.get("[id='firstFr']")
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap);
        iframe.xpath("//input[@name='fname']").type("Dinesh");
        iframe.xpath("//input[@name='lname']").type("Kolati");
        
    })

    it('approch2', () =>{
        cy.visit("https://letcode.in/frame");
       const iframe =cy.getIframe("[id='firstFr']");
        iframe.xpath("//div[@class='container has-text-centered mb-4 has-background-white mt-6']")
        .xpath("//input[@placeholder='Enter email']").type("dinesh.kolati@gmail.com");
    })
})