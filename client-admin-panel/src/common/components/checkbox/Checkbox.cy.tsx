import Checkbox from "./Checkbox"

const HAVE_TEXT_SELECTOR = "have.text"
const CHECKBOX_SELECTOR = ".ant-checkbox-wrapper"
const CHECKBOX_LABEL_SELECTOR = ".ant-checkbox-wrapper > span:nth-child(2)"
const TEST_CHECKBOX_TEXT = "Test Checkbox"
const UPDATED_TEST_CHECKBOX_TEXT = "Test Checkbox"

describe("<Checkbox />", () => {
  it("Does the checkbox render?", () => {
    cy.mount(<Checkbox />)
  })

  it("Does the checkbox label render correct string?", () => {
    cy.mount(<Checkbox>{TEST_CHECKBOX_TEXT}</Checkbox>)

    cy.get(CHECKBOX_LABEL_SELECTOR).should(HAVE_TEXT_SELECTOR, TEST_CHECKBOX_TEXT)
  })

  it("Does the checkbox react on click handler?", () => {
    function onClickHandler() {
      const btn: HTMLElement = document.querySelector(CHECKBOX_LABEL_SELECTOR) as HTMLElement
      btn.textContent = UPDATED_TEST_CHECKBOX_TEXT
    }

    cy.mount(<Checkbox onClick={onClickHandler}>{UPDATED_TEST_CHECKBOX_TEXT}</Checkbox>)

    cy.get(CHECKBOX_SELECTOR).click()
    cy.get(CHECKBOX_LABEL_SELECTOR).should(HAVE_TEXT_SELECTOR, UPDATED_TEST_CHECKBOX_TEXT)
  })
})
