import RegisterLinkConfirmationModal from "./RegisterLinkConfirmationModal"

describe("<RegisterLinkConfirmationModal />", () => {
  it("Does the reset password form render?", () => {
    cy.mount(<RegisterLinkConfirmationModal isOpen={true} />)
  })
})
