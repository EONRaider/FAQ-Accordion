function Accordion() {
  this.accordions = document.querySelectorAll('.card-accordion')
  this.activeAccordion = this.accordions[0]
}

Accordion.prototype.setupAccordionEvents = function() {
  this.accordions.forEach(accordion => {
    accordion.addEventListener('click', event => {
      // Set the selected accordion's state to active
      const selectedAccordion = event.currentTarget
      this.toggleAccordionStates(selectedAccordion)
      // Unset the state of the previously active accordion
      this.toggleAccordionStates(this.activeAccordion)
      this.activeAccordion = selectedAccordion
    })
  })
}

Accordion.prototype.toggleAccordionStates = function(accordion) {
  let [question, answer] = [...accordion.children]
  question.classList.toggle('state__minus-icon')
  answer.classList.toggle('state__visible-answer')
}

const accordion = new Accordion()
accordion.setupAccordionEvents()
accordion.toggleAccordionStates(accordion.activeAccordion)
