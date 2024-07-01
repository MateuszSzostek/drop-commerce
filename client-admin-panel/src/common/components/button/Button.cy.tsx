import Button from "./Button"

const BTN_ID = "btn-id"
const HAVE_TEXT = "have.text"
const TEST_BUTTON_TEXT = "Test Button"
const UPDATED_TEST_BUTTON_TEXT = "Updated Test Button"

describe("<Button />", () => {
  it("Does the button render?", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />)
  })

  it("Does the button render correct string?", () => {
    cy.mount(<Button id={BTN_ID}>{TEST_BUTTON_TEXT}</Button>)
    cy.get(`#${BTN_ID}`).should(HAVE_TEXT, TEST_BUTTON_TEXT)
  })
  it("Does the button react on click?", () => {
    function onClickHandler() {
      const btn: HTMLElement = document.querySelector(`#${BTN_ID} span`) as HTMLElement
      btn.textContent = UPDATED_TEST_BUTTON_TEXT
    }

    cy.mount(
      <Button id={BTN_ID} onClick={onClickHandler}>
        {TEST_BUTTON_TEXT}
      </Button>,
    )

    cy.get(`#${BTN_ID}`).click()
    cy.get(`#${BTN_ID}`).should(HAVE_TEXT, UPDATED_TEST_BUTTON_TEXT)
  })
})
