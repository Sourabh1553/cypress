describe('Verify Elements and page structure- Mob SA Pages', () => {
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

    it('Mob- SA College Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_overview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_overview)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();    
    }) 

    it('Mob- SA College Gallery Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_gallery)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_gallery)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();  
    }) 

    it('Mob- SA College Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_scholarship)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();  
    }) 

    it('Mob- SA College Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_admission)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();
    }) 

    it('Mob- SA College Hostel Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_hostel)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_hostel)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA('norating');
    }) 

    it('Mob- SA College Ranking Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_ranking)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_ranking)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();  
    }) 

    it('Mob- SA College Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_reviews)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_reviews)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();
    }) 

    it('Mob- SA College Programs Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_program)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_program)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
    }) 

    it('Mob- SA College Specific Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_colSpecCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_colSpecCourse)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButtonSA();
        cy.mobCommonSectionSA();
    }) 

    it('Mob- SA College Listing Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_list)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_saList_section_1,null)
        cy.ValidateElement(this.testData.mob_sacol_applynow2_btn,null)
        cy.ValidateElement(this.testData.mob_sacol_applynow3_btn,null) 
        cy.ValidateElement(this.testData.mob_sacol_db3_btn,null)
        cy.ValidateElement(this.testData.mob_sacol_db4_btn,null) 
    }) 

    it('Mob- SA College Single Article Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle)
            }
        })
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_sa_downloadguide_btn,null) 
        cy.ValidateElement(this.testData.mob_sa_free_counselling,null)   
        cy.ValidateElement(this.testData.exam_rating_1,null);
    }) 

    it('Mob- SA College Single Article Page- 2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle2)
            }
        })
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_sa_downloadguide_btn,null) 
        cy.ValidateElement(this.testData.mob_sa_free_counselling,null)
        cy.ValidateElement(this.testData.exam_rating_1,null); 
    }) 

    it('Mob- SA College Single Article Page- 3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle3)
            }
        })
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_sa_downloadguide_btn,null) 
        cy.ValidateElement(this.testData.mob_sa_free_counselling,null) 
        cy.ValidateElement(this.testData.exam_rating_1,null);
    }) 

    it('Mob- SA College Single Article Page- 4', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle4)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle4)
            }
        })
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_footer_applynow_btn,null) 
        cy.ValidateElement(this.testData.mob_footer_db_btn,null) 
        cy.ValidateElement(this.testData.exam_rating_1,null);
    }) 

    it('Mob- SA College Single Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleReview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleReview)
            }
        })
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_review_section_4,) 
        cy.ValidateElement(this.testData.exam_rating_1,null);
    }) 
})