describe('enche linguica no easy', () => {
    for (let i = 0; i < 50; i++) {
    it('visit easy', ()=>{
        cy.visit('http://easycampaign.com.br')
        cy.wait(5000)
    })
    it('add leads', () => {
            cy.wait(3000)
            cy.visit('localhost:2000')
            cy.contains('Por que?').click()
            cy.contains('Saiba mais').click()
            cy.fixture("leads.json").then((leads) => {
                const lead = leads[i]
                cy.get(':nth-child(2) > .form-control').type(lead.name)
                cy.get('#exampleInputEmail1S').type(lead.email)
                cy.get('#experimentar > .btn').click({ force: true })
                cy.wait(10000)
            });
        
    })
}
})