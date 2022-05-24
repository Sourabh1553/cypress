/// <reference types="cypress" />


describe('Exam article ', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {
        
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.Exam_article)
        })// visit the page 
        cy.url().should('include','/exams/inelastic-collision-formula-derivation-and-sample-questions-articleid-4178')//verify whether the page we wanted to visit is opened by checking if url include 
    })
    
    
    it('heading section', () => {  //we will verify heading section
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.Exam_article_heading).contains("Inelastic Collision Formula: Derivation and Sample Questions").should('be.visible') //verify whether heading section is visible or not 
        
    })

    })

    it('content column', () => {  //we will verify content column
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.Exam_article_content_column).should('be.visible') //verify whether content column is visible or not 
        cy.get(data.Exam_article_content).should('be.visible')  // article content is visible or not
        cy.get(data.Exam_article_writer).should('be.visible') // writer section is present or not
        cy.get(data.Exam_article_writer_details).should('be.visible')  // writer details is present or not
        cy.get(data.Exam_article_writer_social).should('be.visible')  // writer social is present or not
        cy.get(data.Exam_article_data_section).should('be.visible')  // article data section is present or not
         
    })

    })

    it('content description column', () => {  //we will verify content description column
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.Exam_article_content_overview).should('be.visible') //verify whether overview section in content is visible or not 
        cy.get(data.Exam_article_content_data).should('be.visible')  // article content data is visible or not
        cy.get(data.Exam_article_content_questions).should('be.visible') // questions are present or not in content
         
    })

    })

    it('exam article side column', () => {  //we will verify exam article side column
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.Exam_article_side_column_download_button).should('be.visible') //verify download guide button is visible or not 
        cy.get(data.Exam_article_side_column_counselling_button).should('be.visible')  // counselling button is visible or not
        cy.get(data.Exam_article_side_column_preparation_guides_ncert).eq(0).should('be.visible') // guides are present or not in side column
        cy.get(data.Exam_article_side_column_preparation_and_ncert_heading).eq(0).contains("Physics Preparation Guides").should('be.visible') // physics preparation guide heading is present or not in content
        cy.get(data.Exam_article_side_column_preparation_guides_ncert).eq(1).should('be.visible') // ncert solutions are present or not in column
        cy.get(data.Exam_article_side_column_preparation_and_ncert_heading).eq(1).contains("Physics NCERT Solutions").should('be.visible') // physics ncert solutions heading is present or not in content
        cy.get(data.Exam_article_side_column_preparation_and_ncert_article).eq(0).should('be.visible') // guides article are present or not in column
        cy.get(data.Exam_article_side_column_preparation_and_ncert_article).eq(21).should('be.visible') // ncert solutions article are present or not in column
  
    })

    })


})