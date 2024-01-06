function Accordion() {
  this.accordions = document.querySelectorAll('.card-accordion')
}

Accordion.prototype.setupAccordionEvents = function() {
  this.accordions.forEach(accordion => {
    accordion.addEventListener('click', selectedAccordion => {
      this.toggleAccordionStates(selectedAccordion.currentTarget)
    })
  })
}

Accordion.prototype.toggleAccordionStates = function(accordion) {
  let [question, answer] = [...accordion.children]
  question.classList.toggle('state__minus-icon')
  answer.classList.toggle('state__visible-answer')
}

new Accordion().setupAccordionEvents()
