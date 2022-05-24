/// <reference types="cypress" />


describe('Social article ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    

    it('Page is loaded', () => {
        
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.social_article)
        })// visit the page 
        cy.url().should('include','/social/6-kya-apke-toothpaste-mein-namak-zaroori-hai')//verify whether the page we wanted to visit is opened by checking if url include 
    })

    it('Article home page', () => {  //we will verify article home page
        cy.fixture('xpath').then((data)=>{ // taking xpath data from xpath file
        cy.get(data.social_article_homepage).should('be.visible') //verify whether path from social homepage is there with icon 
        cy.get(data.social_article_complete_section).should('be.visible') // article complete section is present 
        cy.get(data.social_article_title).contains("Kya Apke Toothpaste Mein Namak Zaroori Hai?").should('be.visible')//article title is present
        cy.get(data.social_article_share_section).first().should('be.visible') // first share section is visible or not
        cy.get(data.social_article_share_icon).should('be.visible') // share icon is present
        cy.get(data.social_article_fb_icon).first().should('be.visible')// fb icon is present
        cy.get(data.social_article_li_icon).first().should('be.visible')// linkedin icon is present
        cy.get(data.social_article_tw_icon).first().should('be.visible')// twitter icon is present
        cy.get(data.social_article_short_description).should('be.visible') // short description is present
        cy.get(data.social_article_desciption).should('be.visible')// desciption is present
        cy.get(data.social_article_fb_icon).last().should('be.visible')// bottom fb icon is present
        cy.get(data.social_article_li_icon).last().should('be.visible')// bottom linkedin icon is present
        cy.get(data.social_article_tw_icon).last().should('be.visible')// bottom twitter icon is present
        cy.get(data.social_article_bottom_filter_suggestions).should('be.visible') // filter suggestions are present
    })

    })

    it('Trending now section', () => { // trending now section 

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_article_trending_column).should('be.visible') // trending now column
        cy.get(data.social_trending_text).contains('Trending Now') //trending now text is present
        cy.get(data.social_trending_first_article).first().click() // trending now first article is there and clicked
        cy.get(data.social_trending_first_article_clicked_homeicon) //home icon after clicking first article
        })
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.social_article)
        })// visit the page 
        cy.url().should('include','/social/6-kya-apke-toothpaste-mein-namak-zaroori-hai')//verify whether the page we wanted to visit is opened by checking if url include 
        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_trending_first_article_title).first().should('be.visible') //trending now first article title
        cy.get(data.social_trending_first_article_author).first().should('be.visible') // trending now first article author
        cy.get(data.social_trending_first_article_share_icon).first().should('be.visible') // trending now first article share icon 
        })
    })

    it('More stories section', () => { // trending now section 

        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_article_more_stories).should('be.visible') // more stories section
        cy.get(data.social_article_more_stories_title).contains('more stories') //more stories text is present
        cy.get(data.social_article_more_stories_first_article).first().click() // more stories first article is there and clicked
        cy.get(data.social_trending_first_article_clicked_homeicon) //home icon after clicking first article
        })
        cy.fixture('endpoint').then((data1)=>{
            cy.visit(Cypress.env("prod")+data1.social_article)
        })// visit the page  
        cy.url().should('include','/social/6-kya-apke-toothpaste-mein-namak-zaroori-hai')//verify whether the page we wanted to visit is opened by checking if url include 
        cy.fixture('xpath').then((data)=>{
        cy.get(data.social_article_more_stories_firsr_article_title).first().should('be.visible') //more stories first article title
        }) 
    })


})