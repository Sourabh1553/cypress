    describe('Mobile- College Cutoff Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.college_cutoff)
                    cy.log(Cypress.env("prod")+data.college_cutoff);
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.college_cutoff)
                    cy.log(Cypress.env("prod")+data.college_cutoff);
                }
            })
            cy.intercept('POST')
            cy.intercept('GET')
        })
     
        it('Apply Now btn- Header- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.get(data.mob_header_applynow_btn).click()
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_MBBS')
                cy.log('Leadform filled successfully');
            })
        })
    
        it('Download brochure btn- Header- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.get(data.mob_header_db_btn).click()
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_MBA')
                cy.log('Leadform filled successfully');
            })
        })

        it('Apply Now btn2- Footer - Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.get(data.mob_footer_applynow_btn).click()
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_Btech')
                cy.log('Leadform filled successfully');
            })
        })

        it('Download brochure btn2- Footer - Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.get(data.mob_footer_db_btn).click()
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_Btech')
                cy.log('Leadform filled successfully');
            })
        })
    
        it('Similar college- Download Brochure - Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.waitUntil(() => cy.get(data.mob_similar_btn).eq(0).then($el => $el.trigger('click')))
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_Btech')
                cy.log('Leadform filled successfully');
            })
        })

    it('Nearby college- Download Brochure - Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.log('Launching leadform');
                cy.waitUntil(() => cy.get(data.mob_nearby_btn).eq(0).then($el => $el.trigger('click')))
                cy.log('Filling leadform');
                cy.LeadForm('mob_india_Btech')
                cy.log('Leadform filled successfully');
            })
        })
    })