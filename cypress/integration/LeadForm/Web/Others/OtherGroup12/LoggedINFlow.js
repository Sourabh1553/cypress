    describe('LoggedIN- India flow- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.college_admission)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.college_admission)
                }
            })
        })

        it('Web-India- MBBS-MBA-Btech', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_apply_now_btn).click()
                cy.LeadForm('web_india_MBBS')
                cy.get(data.col_DB_btn).click()
                cy.LeadForm('web_india_MBA_loggedIN')
                cy.get(data.col_header_getmoredetails_btn).click()
                cy.LeadForm('web_india_btech_loggedIN')
            })
        }) 
    })
    
    describe('LoggedIN- Study Abroad flow- Regression', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_admission)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_admission)
                }
            })
        })
        it('Web-SA-MBA-Btech', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_applynow_btn).click()
                cy.LeadForm('web_sa_MBA')
                cy.get(data.SA_db_btn).click()
                cy.LeadForm('web_sa_loggedIN_btech')
            })
        })
    })

    describe('Login cases- Regression', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
        })

        it('Leadform on different pages', () =>{
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.college_admission)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.college_admission)
                }
            })
            cy.fixture('xpath').then((data)=>{
                cy.get(data.col_apply_now_btn).click()
                cy.LeadForm('web_india_btech')
                cy.get(data.web_search_btn).click()
                cy.get(data.web_search_bar).type('DTU')
                cy.wait(1000)
                cy.get(data.web_searched_college).click()
                cy.get(data.col_DB_btn).click()
                cy.LeadForm('web_india_btech_loggedIN')
            })
        })

        it('Auto Popup', () =>{
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_colSpecCourse)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_colSpecCourse)
                }
            })
            cy.fixture('xpath').then((data)=>{
                cy.wait(30000)
                cy.LeadForm('web_sa_btech')
            })
        })

        it('Fixed URL Popup with city', () =>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?popup=true&city=125')
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?popup=true&city=125')
            }
            cy.fixture('testData').then((data)=>{
                cy.get('#leadcity').should('have.value','New Delhi')
                cy.get('#leadname').clear().type(data.name)
                cy.get('#leademail').clear().type(data.email)
                cy.get('#leadphone_no').clear().type(data.number)
                cy.get('#leadcourse_tag_id').clear().type(data.course3)
                cy.get('ul.custom-search-submenu').invoke('show').click()
                cy.get('.col-md-3 > .btn').click()
                cy.ColAppliedpage();
                cy.OTP_TYmodal();
            })
        })

        it('Fixed URL Popup with city,course and close=0', () =>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?&popup=true&city=125&course_tag=18&close=0&delay=5')
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?&popup=true&city=125&course_tag=18&close=0&delay=5')
            }
            cy.fixture('testData').then((data)=>{
                cy.get('#leadcity').should('have.value','New Delhi')
                cy.get('#leadcourse_tag_id').should('have.value','BE/B.Tech - Bachelors (Technology)')
                cy.get('#leadname').clear().type(data.name)
                cy.get('#leademail').clear().type(data.email)
                cy.get('#leadphone_no').clear().type(data.number)
                cy.get('.col-md-3 > .btn').click()
                cy.ColAppliedpage();
                cy.OTP_TYmodal()
            })
        })
    })
// })    