describe('Verify Elements and page structure- Other Pages', () => {
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

    it('Review with params Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_param)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_param)
            }
        })  
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.review_section,null)
        cy.ValidateElement(this.testData.review_listing,null)
        cy.ValidateElement(this.testData.single_review,null)
        cy.ValidateElement(this.testData.review_user,null)
        cy.ValidateElement(this.testData.review_content,null)
        cy.ValidateElement(this.testData.review_btns,null)
    }) 

    it('Review with random Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_random_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_random_page)
            }
        })  
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.review_section,null)
        cy.ValidateElement(this.testData.review_listing,null)
        cy.ValidateElement(this.testData.single_review,null)
        cy.ValidateElement(this.testData.review_user,null)
        cy.ValidateElement(this.testData.review_content,null)
        cy.ValidateElement(this.testData.review_btns,null)
    })

    it('Review with random page with param', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_rp_param)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_rp_param)
            }
        })  
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_searchbar,null)
        cy.ValidateElement(this.testData.review_section,null)
        cy.ValidateElement(this.testData.review_listing,null)
        cy.ValidateElement(this.testData.single_review,null)
        cy.ValidateElement(this.testData.review_user,null)
        cy.ValidateElement(this.testData.review_content,null)
        cy.ValidateElement(this.testData.review_btns,null)
    })

    it('Single Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.review_single)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.review_single)
            }
        })  
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.review_sidebar_1,null)
        cy.ValidateElement(this.testData.review_btn_1,'WRITE A REVIEW')
        cy.ValidateElement(this.testData.review_btn_2,'GET FREE COUNSELLING')
        cy.ValidateElement(this.testData.review_subsidebar_1,null)
        cy.ValidateElement(this.testData.review_subsidebar_1_heading,'RELATED REVIEWS')
        cy.ValidateElement(this.testData.review_content_2,null)
    })

    it('News Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.news_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.news_admission)
            }
        })  
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_news_headers,null);
        cy.ValidateElement(this.testData.exam_featured_news,null);
        cy.ValidateElement(this.testData.exam_featured_news_heading,'Featured news');
        cy.ValidateElement(this.testData.exam_news_section,null);
        cy.ValidateElement(this.testData.exam_bignews_section,null);
        cy.ValidateElement(this.testData.exam_bignews_section_heading,'The Big Stories');
        cy.ValidateElement(this.testData.exam_morenews_section,null);
        cy.ValidateElement(this.testData.exam_morenews_section_heading,'More NewsNext');
    })

    it('News College Page', function () {
            cy.fixture('endpoint').then((data1)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data1.news_college)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data1.news_college)
                }
            })  
            cy.commonPageElementVal()
            cy.ValidateElement(this.testData.exam_news_headers,null);
            cy.ValidateElement(this.testData.exam_featured_news,null);
            cy.ValidateElement(this.testData.exam_featured_news_heading,'Featured news');
            cy.ValidateElement(this.testData.exam_news_section,null);
            cy.ValidateElement(this.testData.exam_bignews_section,null);
            cy.ValidateElement(this.testData.exam_bignews_section_heading,'The Big Stories');
            cy.ValidateElement(this.testData.exam_morenews_section,null);
            cy.ValidateElement(this.testData.exam_morenews_section_heading,'More NewsNext');
        })

    it('CollegeDunia Admission Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.other_ad_number)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.other_ad_number)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.admission_heading_1,'Get admission in best colleges');
        cy.ValidateElement(this.testData.admission_search_btn,'Search');
        cy.ValidateElement(this.testData.other_col1,'Apply Now');
    })

    it('QNA Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_page)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_page)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');        
    })

    it('QNA single question', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_single_question)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_single_question)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_2,null);
        cy.ValidateElement(this.testData.qna_answer,null);
        cy.ValidateElement(this.testData.qna_signup_2,null);
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')      
    })

    it('QNA Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_page_3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_page_3)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');        
    })

    it('QNA-College ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_collegeID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_collegeID)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');
    })

    it('QNA-Course ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_courseID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_courseID)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');
    })

    it('QNA-Substream ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_substream)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_substream)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');
    })

    it('QNA-Country ID Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.qna_countryID)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.qna_countryID)
            }
        })
        cy.commonPageElementVal();
        cy.ValidateElement(this.testData.qna_sidebar_1,null);
        cy.ValidateElement(this.testData.qna_question_list,null);
        cy.ValidateElement(this.testData.qna_signup,null);
        cy.ValidateElement(this.testData.qna_question_1,null);
        cy.ValidateElement(this.testData.qna_heading,' Get Answers on test preperation, Admissions & Campus Life ');
    })

    it('Rank Predictor Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.rank_predictor)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.rank_predictor)
            }
        })
        if(Cypress.env("varEnv")=='stage'){
            cy.get('.banner-home-page').find('img').should('have.attr', 'src').should('include','/public/asset/img/rank-predictor-banner.jpg');
            cy.ValidateElement(this.testData.rank_predictor_sections,null);
        }else{
            cy.ValidateElement(this.testData.SA_header_silo_1,null);
            cy.get('body').find('img').should('have.attr', 'src').should('include','/public/asset/img/cd_logo.png');
            cy.ValidateElement(this.testData.rank_pred_exam_section,null);
            cy.ValidateElement(this.testData.rank_pred_tut_section,null);                
        }
    })
    
    it('SA News Page-1', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news1)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news1)
            }
        })
        cy.commonSAPages();
        cy.commonSAButtons(); 
        cy.ValidateElement(this.testData.col_news_section_heading,' News and Articles ')
        cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
        cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');
        cy.ValidateElement(this.testData.SA_similar_db_btn,'Download Brochure');
    }) 

    it('SA News Page-2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news2)
            }
        })
        cy.commonSAPages();
        cy.ValidateElement(this.testData.col_apply_now_btn,'Apply Now')
        cy.ValidateElement(this.testData.col_DB_btn,' Download Brochure ') 
        cy.ValidateElement(this.testData.col_header_like_btn,null)
        cy.ValidateElement(this.testData.col_header_getmoredetails_btn,'Get contact details') 
        cy.ValidateElement(this.testData.col_askaquestion_btn,'Ask a Question') 
        cy.ValidateElement(this.testData.rating_1,null);      
        cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
        cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');
        cy.ValidateElement(this.testData.SA_similar_db_btn,'Download Brochure');
    }) 

    it('News Page-3', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_news3)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_news3)
            }
        })
        cy.commonSAPages();
        cy.ValidateElement(this.testData.col_apply_now_btn,'Apply Now')
        cy.ValidateElement(this.testData.col_DB_btn,' Download Brochure ') 
        cy.ValidateElement(this.testData.col_header_like_btn,null)
        cy.ValidateElement(this.testData.col_header_getmoredetails_btn,'Get contact details') 
        cy.ValidateElement(this.testData.col_askaquestion_btn,'Ask a Question') 
        cy.ValidateElement(this.testData.rating_1,null);     
        cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
        cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');
        cy.ValidateElement(this.testData.SA_similar_db_btn,'Download Brochure'); 
    }) 

    // it('Admission Page-2', function () {
    //     cy.fixture('endpoint').then((data1)=>{
    //         if(Cypress.env("varEnv")=='prod'){
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("prod")+data1.SA_admission_2)
    //         }else{
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("stage")+data1.SA_admission_2)
    //         }
    //     })
    //     cy.commonSAPages();
    //     cy.ValidateElement(this.testData.col_apply_now_btn,'Apply Now')
    //     cy.ValidateElement(this.testData.col_DB_btn,' Download Brochure ') 
    //     cy.ValidateElement(this.testData.col_header_like_btn,null)
    //     cy.ValidateElement(this.testData.col_header_getmoredetails_btn,'Get contact details') 
    //     cy.ValidateElement(this.testData.col_askaquestion_btn,'Ask a Question') 
    //     cy.ValidateElement(this.testData.rating_1,null);     
    //     cy.ValidateElement(this.testData.SA_similar_col_section_1,null);
    //     cy.ValidateElement(this.testData.SA_similar_col_section_heading_1,'Similar Colleges');
    //     cy.ValidateElement(this.testData.SA_similar_db_btn,'Download Brochure'); 
    // }) 

    it('Client Register Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.client_register)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.client_register)
            }
        })
        cy.ValidateElement(this.testData.SA_header_silo_1,null)
        cy.ValidateElement(this.testData.SA_login_btn,'Login')
        cy.ValidateElement(this.testData.SA_footer1,null)
        cy.ValidateElement(this.testData.SA_footer2,null)
        cy.ValidateElement(this.testData.SA_footer_heading_2,'Download the Collegedunia app on')
        cy.ValidateElement(this.testData.client_register_section_btn_1,'Submit')
    }) 

    it('Exam article Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.exam_article_1)
            }else{ 
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.exam_article_2)
            }
        })
        cy.ValidateElement(this.testData.common_menu_header_1,null)
        cy.ValidateElement(this.testData.login_btn,'Login')
        cy.ValidateElement(this.testData.page_footer,null)
        cy.ValidateElement(this.testData.page_footer_submenu,null)
        cy.ValidateElement(this.testData.page_footer_heading_1,'SUBSCRIBE TO OUR NEWS LETTER')
        cy.ValidateElement(this.testData.page_footer_heading_2,'Download the Collegedunia app on')
        cy.ValidateElement(this.testData.SA_getfeedetails_btn,'download guide')
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.SA_freecounselling2_btn,'free counselling')
        }else{ 
            cy.ValidateElement(this.testData.exam_freecounselling4_btn,'free counselling')
        }
        
        
    }) 

    // it('Review search Page', function () {
    //     cy.fixture('endpoint').then((data1)=>{
    //         if(Cypress.env("varEnv")=='prod'){
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("prod")+data1.other_search)
    //         }else{
    //             cy.log(Cypress.env("varEnv"))
    //             cy.visit(Cypress.env("stage")+data1.other_search)
    //         }
    //     })
    //     cy.commonSAPages();
    //     cy.ValidateElement(this.testData.course_searchbar,null)
    //     cy.ValidateElement(this.testData.review_list_section,null)
    //     cy.ValidateElement(this.testData.review_singleReview_section,null)
    //     cy.ValidateElement(this.testData.review_notification_section,null)
    //     cy.ValidateElement(this.testData.rating_1,null)
    //     cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')     
    // }) 
})