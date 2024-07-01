import PasswordChangedConfirmationModal from "./PasswordChangedConfirmationModal"

describe("<PasswordChangedConfirmationModal. />", () => {
  it("Does the reset password form render?", () => {
    cy.mount(<PasswordChangedConfirmationModal isOpen={true} />)
  })
})
