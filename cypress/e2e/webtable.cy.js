
describe('Handle Tables',(()=>{

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        // cy.get("#input-username").type("demo");
        // cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        // cy.get(".btn-close").click();

        //Customers-->Customers
        cy.xpath("//a[text()=' Customers']").click();
        cy.xpath("(//a[text()='Customers'])[1]").click();
  
    })

    it('Check Number Rows & Columns',()=>{
       
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length",'7');
   
    })

   it('Check cell data from specific row & Column',()=>{
        
        cy.xpath("//td[text()='e@mail.com']")
        .contains("e@mail.com");


    })

    it('Read all the rows & Columns data in the first page',()=>{
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each( ($row,index,$rows)=>{

                  cy.wrap($row).within(()=>{

                      cy.get('td').each(($col,index,$cols)=>{
                                cy.log($col.text());
                       })
            })

        })
    })

  
    it('Pagination',()=>{
        
        //find total pages -logic
        /*let totalPages;
      
            cy.get(".col-sm-6.text-end").then((e)=>{
                let mytext=e.text();
                totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
                cy.log("total pages:"+totalPages);
            })
       
        cy.log("Total Number of pages====>"+totalPages); // not working
                              
        //find total pages - done
        */
        let totalPages=5;
        for(let p=1;p<=totalPages;p++)   
        {
            if(totalPages>1)   //if(parseInt(totalPages)>1)
            {
                cy.log("Active page====>:"+p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);
                
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row,indiex,$rows)=>{
        
                        cy.wrap($row).within(()=>{
                                cy.get('td:nth-child(3)').then((e)=>{
                                    cy.log(e.text());//Email
                                })
                            
                            })
                    })
                       

            }
        }
        

    })   
    

}))