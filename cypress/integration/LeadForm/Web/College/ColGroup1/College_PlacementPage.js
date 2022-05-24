    describe('College Placement Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.college_placement)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.college_placement)
                }
            })
        })
    
        it('MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_apply_now_btn).click()
                cy.LeadForm('web_india_MBBS')
            })
        })

        it('MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_DB_btn).click()
                cy.LeadForm('web_india_MBA')
            })
        })
    
        it('Btech Form-Like Button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_header_like_btn).click()
                cy.LeadForm('web_india_btech')
            })

        })
    
        it('Btech Form- Get More Details Button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_header_getmoredetails_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Ask a question', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_askaquestion_btn).click()
                cy.LeadForm('web_india_QUES')
            })
        })

        it('Btech Form- Similar college follow button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_similar_follow_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Btech Form- Similar college like button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_similar_like_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Btech Form- Similar college download brochure button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_similar_db_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
        
        it('Btech Form- NearBy college follow button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_nearby_follow_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
        
        it('Btech Form- Nearby college like button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_nearby_like_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
        
        it('Btech Form- NearBy college download brochure button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_nearby_db_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
        
        it('Btech Form- News like button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.col_news_like_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_india_btech')
            })
        })
    })