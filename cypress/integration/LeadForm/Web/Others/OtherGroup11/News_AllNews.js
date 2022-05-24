    describe('All News- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.all_news)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.all_news)
                }
            })
        })
    
        it('Get more info- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_getmoreinfo).click()
                cy.LeadForm('web_india_MBBS')
            })
        }) 

        it('Sample papers- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_samplepaper).click()
                cy.LeadForm('web_india_MBA_MBBSpage')
            })
        })
    
        it('Ask a question- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_askaquestion).click()
                cy.LeadForm('web_india_QUES_MBBSpage')
            })
        })
    
        it('Btech- Apply now', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_applynow_btn).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    
        it('Btech- Check eligibility', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_checkeligibility_btn).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    
        it('Btech- Get Updates', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.exam_getupdates_btn).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
        
        it('Btech- Cat news like button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.other_allnews_cat).click()
                cy.LeadForm('web_india_Btech_MBBSpage')
            })
        })
    })