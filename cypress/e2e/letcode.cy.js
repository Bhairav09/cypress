describe('user sign up & login flow', () =>{
    it('should sign up successfully', ()=>{
        cy.visit("https://letcode.in/test");
        cy.get('.navbar-burger').click();
        cy.xpath("//a[normalize-space()='Sign up']").click();
        cy.get("#name").type("Dinesh kolati");
        cy.get("#email").type("dinesh.kolati@mailinator.com");
        cy.get("#pass").type("Dinesh@123");
        cy.get("#agree").check();
        cy.xpath("//button[text()='SIGN UP']").click();
    })
    it('Login',()=>{
        cy.visit("https://letcode.in/test");
        cy.get('.navbar-burger').click();
        cy.xpath("//a[text()='Log in']").click();
        cy.get("[name='email']").type("dinesh.kolati@mailinator.com");
        cy.get("[name='password']").type("Dinesh@123");
        cy.xpath("//button[text()='LOGIN']").click();
    })
    it('Inupt section' , () =>{
        cy.visit("https://letcode.in/test");
        cy.xpath("//a[text()='Edit']").click();
        cy.get("#fullName").type("Dinesh Kolati");
        cy.get("#join").clear().type("Done");
        cy.get("#getMe").type("HIIII");
    })
})