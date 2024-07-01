import Icon from "./Icon"

describe("<Icon />", () => {
  it("Does the Icon render?", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Icon width={32} height={32} image="/" />)
  })
})
