describe('Verify Elements and page structure- Mob Exam Group 1', () => {
    beforeEach(function (){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('xpath').then(function(testData){
            this.testData = testData;
            Cypress.config('defaultCommandTimeout', 5000);
        })
    })
    
    it('Mob Exam Management Page', function () {
    cy.fixture('endpoint').then((data1)=>{
        if(Cypress.env("varEnv")=='prod'){
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("prod")+data1.exam_management)
        }else{
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("stage")+data1.exam_management)
        }
    })
    cy.commonMobPageElementVal();
    cy.ValidateElement(this.testData.mob_exam_container_2,null);
    cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
    cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
    cy.ValidateElement(this.testData.exam_rating_1,null);
    cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 

    it('Mob Exam SA Exams Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_SAexams)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_SAexams)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam dental Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_dental)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_dental)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam btech Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_btech)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_btech)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })  
    
    it('Mob Exam bds Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_bds)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_bds)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })  
    
    it('Mob Exam science Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_science)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_science)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Computer Applications Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_compApps)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_compApps)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Law Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_law)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_law)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Education Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_education)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_education)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Pharmacy Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_pharmacy)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_pharmacy)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Arts Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_arts)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_arts)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Medical Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_medical)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_medical)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam design Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_design)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_design)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Agriculture Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_agri)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_agri)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Hotel Management Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_hotelMan)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_hotelMan)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Paramedics Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_paramed)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_paramed)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Veterinary Science Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_vetScience)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_vetScience)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam Mass Communincation Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_massComm)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_massComm)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
    }) 
    
    it('Mob Exam Vocational Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_vocational)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_vocational)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_exam_container_heading_1,null);
        cy.ValidateElement(this.testData.mob_exam_list_btn_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 
    
    it('Mob Exam News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_news_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_news_page)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_news_section_1,null);
        cy.ValidateElement(this.testData.mob_news_topnews_section,null);
        cy.ValidateElement(this.testData.mob_news_topnews_section_heading,'Top News');
        cy.ValidateElement(this.testData.mob_news_morenews_section,null);
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_1,'See All News');
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_2,'ALL NEWSADMISSION ALERTCOLLEGE NEWSEXAM NEWS');
        cy.ValidateElement(this.testData.mob_news_morenews_section_btn,'Read More ');
    })
})
