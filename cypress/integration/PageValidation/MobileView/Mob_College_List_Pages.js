describe('Verify Elements and page structure- Mob College List Pages', () => {
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
    it('Mob- SA College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.SA_collegelist)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.SA_collegelist)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    }) 

    it('Mob- Canada College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.canada_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.canada_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- USA College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.usa_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.usa_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Australia College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.australia_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.australia_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- UK College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.uk_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.uk_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Germany College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.germany_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.germany_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Ireland College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.ireland_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.ireland_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Malaysia College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.malaysia_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.malaysia_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Netherlands College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.netherlands_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.netherlands_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    it('Mob- New Zealand College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.new_zealand_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.new_zealand_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Singapore College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.singapore_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.singapore_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Sweden College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.sweden_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.sweden_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Hong Kong College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.hong_kong_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.hong_kong_col_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements('SA')
    })
    
    it('Mob- Management College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.management_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.management_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- Management Marketing College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.management_market_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.management_market_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- Management Marketing Maharashtra College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.man_market_maharashtra_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.man_market_maharashtra_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- MBA Marketing Maharashtra College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.mba_market_maharashtra_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.mba_market_maharashtra_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- MBA Marketing Mumbai College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.mba_market_mumbai_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.mba_market_mumbai_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- MBA Marketing College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.mba_market_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.mba_market_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- Maharashtra College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.maharashtra_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.maharashtra_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- Btech College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.btech_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.btech_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- Delhi College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.delhi)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.delhi)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    
    it('Mob- MBA Hyderabad College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.mba_hyderabad_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.mba_hyderabad_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    it('Mob- Mumbai College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.mumbai_col_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.mumbai_col_list)
            }
        })
        cy.commonMobPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonCollegeListPageElements()
        }
    })
    it('Mob- IIT College-List Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.iits_list)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.iits_list)
            }
        })
        cy.commonMobPageElementVal()
        cy.mobCommonCollegeListPageElements()
    })
})