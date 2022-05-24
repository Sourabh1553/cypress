describe('Verify Elements and page structure- SA Pages', () => {
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

    it('SA College Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_overview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_overview)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons('additionalbtns'); 
        cy.commonSAPageSections();
        cy.ValidateElement(this.testData.SA_rating_section_1,null);      
    }) 

    it('SA College Gallery Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_gallery)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_gallery)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();     
        cy.commonSAPageSections();
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Scholarship Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_scholarship)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_scholarship)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();     
        cy.commonSAPageSections('scholarship');
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_admission)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();    
        cy.commonSAPageSections(); 
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Hostel Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_hostel)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_hostel)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();
        cy.commonSAPageSections();     
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Ranking Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_ranking)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_ranking)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();    
        cy.commonSAPageSections(); 
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_reviews)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_reviews)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();    
        cy.commonSAPageSections(); 
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Programs Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_program)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_program)
            }
        })
        cy.commonSAPages();
        cy.ValidateElement(this.testData.SA_header_like_btn,null);
        cy.ValidateElement(this.testData.SA_header_getmoredetails_btn,null);
        cy.ValidateElement(this.testData.exam_filter_nav,null);          
        cy.ValidateElement(this.testData.col_program_list_1,null);    
        cy.ValidateElement(this.testData.rating_1,null);        
        cy.ValidateElement(this.testData.SA_checkdetails_btn,null);
    }) 

    it('SA College Specific Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_colSpecCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_colSpecCourse)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons();    
        cy.ValidateElement(this.testData.SA_specificCourse_section_1,null); 
        cy.ValidateElement(this.testData.SA_Home_sidebar_container_1,null);
        cy.ValidateElement(this.testData.uni_noti_folshare_section,null);
        cy.ValidateElement(this.testData.SA_Home_sidebar_section_1,null);   
        cy.ValidateElement(this.testData.SA_specificCourse_btn_1,'Get Fee Details');  
        cy.ValidateElement(this.testData.SA_specificCourse_btn_2,'Get Free Counselling');   
        cy.ValidateElement(this.testData.rating_1,null);      
        cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
        cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');
        cy.ValidateElement(this.testData.SA_similar_db_btn,'Download Brochure');
    }) 

    it('SA College Listing Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_list)
            }
        })
        cy.commonSAPages();  
        cy.ValidateElement(this.testData.exam_filter_nav,null);    
        cy.ValidateElement(this.testData.SA_applynow2,null);  
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.SA_db2,null);      
        }
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Single Article Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle)
            }
        })
        cy.commonSAPages();    
        cy.ValidateElement(this.testData.review_btn_1,'download guide');   
        cy.ValidateElement(this.testData.review_btn_3,'free counselling');   
        cy.ValidateElement(this.testData.rating_1,null);   
        cy.ValidateElement(this.testData.SA_article_section_1,null);   
        cy.ValidateElement(this.testData.SA_article_section_heading_1,'More Articles in this Category');      
    }) 

    it('SA College Single Article Page- 2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle2)
            }
        })
        cy.commonSAPages();    
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.review_btn_1,'download guide');   
            cy.ValidateElement(this.testData.review_btn_3,'free counselling'); 
        }else{
            cy.ValidateElement(this.testData.review_btn_4,'download guide');   
            cy.ValidateElement(this.testData.review_btn_5,'free counselling');   
        }
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 

    it('SA College Single Article Page- 3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle3)
            }
        })
        cy.commonSAPages();    
        cy.ValidateElement(this.testData.review_btn_1,'download guide');   
        cy.ValidateElement(this.testData.review_btn_3,'free counselling');   
        cy.ValidateElement(this.testData.rating_1,null);   
        cy.ValidateElement(this.testData.SA_article_section_1,null);   
        cy.ValidateElement(this.testData.SA_article_section_heading_1,'More Articles in this Category');      
    }) 

    it('SA College Single Article Page- 4', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleArticle4)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleArticle4)
            }
        })
        cy.commonSAPages();    
        cy.ValidateElement(this.testData.SA_applynow_btn,'Apply Now');   
        cy.ValidateElement(this.testData.SA_db_btn,'Download Brochure');   
        cy.ValidateElement(this.testData.rating_1,null);      
        cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
        cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');     
    }) 

    it('SA College Single Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_singleReview)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_singleReview)
            }
        })
        cy.commonSAPages();  
        cy.ValidateElement(this.testData.review_btn_1,'WRITE A REVIEW');
        cy.ValidateElement(this.testData.review_btn_2,'GET FREE COUNSELLING');      
        cy.ValidateElement(this.testData.review_section_4,null);      
        cy.ValidateElement(this.testData.rating_1,null);      
    }) 
})