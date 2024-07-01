import DatePicker from "./DatePicker"

describe("<DatePicker/>", () => {
  it("Does the DatePicker render?", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DatePicker />)
  })
})
