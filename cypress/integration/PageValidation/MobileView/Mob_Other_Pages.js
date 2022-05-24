describe('Verify Elements and page structure- Mob Other Pages', () => {
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

    it('Mob- Review with params Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_param)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_param)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_other_review_card_1,null);
        cy.ValidateElement(this.testData.mob_review_1_rating,null);
        cy.ValidateElement(this.testData.course_searchbar,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    }) 

    it('Mob- Review with random Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_random_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_random_page)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_other_review_card_1,null);
        cy.ValidateElement(this.testData.mob_review_1_rating,null);
        cy.ValidateElement(this.testData.course_searchbar,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- Review with random page with param', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_rp_param)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_rp_param)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_exam_container_2,null);
        cy.ValidateElement(this.testData.mob_other_review_card_1,null);
        cy.ValidateElement(this.testData.mob_review_1_rating,null);
        cy.ValidateElement(this.testData.course_searchbar,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- Single Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_single)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_single)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_review_1_rating,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- News Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.news_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.news_admission)
            }
        })  
        cy.commonMobPageElementVal()
        cy.ValidateElement(this.testData.mob_news_topnews_section,null);
        cy.ValidateElement(this.testData.mob_news_topnews_section_heading,'Top News');
        cy.ValidateElement(this.testData.mob_news_morenews_section,null);
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_1,'See All News');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- News College Page', function () {
            cy.fixture('endpoint').then((data1)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data1.news_college)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data1.news_college)
                }
            })  
            cy.commonMobPageElementVal()
            cy.ValidateElement(this.testData.mob_news_topnews_section,null);
            cy.ValidateElement(this.testData.mob_news_topnews_section_heading,'Top News');
            cy.ValidateElement(this.testData.mob_news_morenews_section,null);
            cy.ValidateElement(this.testData.mob_news_morenews_section_heading_1,'See All News');
            cy.ValidateElement(this.testData.exam_rating_1,null);
            cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        })

    it('Mob- CollegeDunia Admission Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_ad_number)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_ad_number)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_admission_card_1,null);
        cy.ValidateElement(this.testData.mob_other_admission_card_btns_1,'Apply Now');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- QNA Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_page)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910'); 
    })

    it('Mob- QNA single question', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_single_question)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_single_question)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');      
    })

    it('Mob- QNA Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_page_3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_page_3)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');             
    })

    it('Mob- QNA-College ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_collegeID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_collegeID)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');     
    })

    it('Mob- QNA-Course ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_courseID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_courseID)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910'); 
    })

    it('Mob- QNA-Substream ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_substream)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_substream)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910'); 
    })

    it('Mob- QNA-Country ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_countryID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_countryID)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_other_qna_card_1,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })

    it('Mob- Rank Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.rank_predictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.rank_predictor)
            }
        })
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.rank_pred_exam_section,null);
            cy.ValidateElement(this.testData.rank_pred_exam_section2,null);
        }else{
            cy.ValidateElement(this.testData.rank_predictor_sections,null);
        }
    })

    it('Mob- SA News Page-1', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news1)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news1)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonSectionSA('norating');
    }) 

    it('Mob- News Page-2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news2)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonSection();
    }) 

    it('Mob- News Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news3)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonSection(); 
    }) 
    
    //404
    // it('Mob- Admission Page-2', function () {
    //     cy.fixture('endpoint').then((data1)=>{
    //         if(Cypress.env("varEnv")=='prod'){
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("prod")+data1.SA_admission_2)
    //         }else{
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("stage")+data1.SA_admission_2)
    //         }
    //     })
    //     cy.commonMobPageElementVal();
    //     cy.mobCommonSection();
    // }) 

    it('Mob- Client Register Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.client_register)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.client_register)
            }
        })
        cy.ValidateElement(this.testData.client_register_section_btn_1,null)
    }) 

    it('Mob- Exam article Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_article_1)
            }
        })
        cy.commonMobPageElementVal();
    }) 

    // it('Mob- Review search Page', function () {
    //     cy.fixture('endpoint').then((data1)=>{
    //         if(Cypress.env("varEnv")=='prod'){
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("prod")+data1.other_search)
    //         }else{
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("stage")+data1.other_search)
    //         }
    //     })
    //     cy.commonMobPageElementVal();
    //     cy.ValidateElement(this.testData.course_searchbar,null);
    //     cy.ValidateElement(this.testData.mob_exam_container_2,null);
    //     cy.ValidateElement(this.testData.mob_review_singleReview_section,null);
    // }) 
})