import Text from "./Text"

describe("<Text/>", () => {
  it("Does the text render?", () => {
    cy.mount(<Text />)
  })
})
