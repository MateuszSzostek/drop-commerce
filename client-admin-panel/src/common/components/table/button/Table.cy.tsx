import Table from "./Table"

describe("<Table />", () => {
  it("Does the table render?", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Table />)
  })
})
