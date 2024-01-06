function Accordion() {
  this.questions = document.querySelectorAll('.card-accordion__question')
}

Accordion.prototype.setupQuestionButtons = function() {
  this.questions.forEach(question => {
    question.addEventListener('click', selectedQuestion => {
      this.toggleAccordionStates(selectedQuestion.target)
    })
  })
}

Accordion.prototype.toggleAccordionStates = function(question) {
  let answer = question.nextElementSibling
  answer.classList.toggle('state__visible-answer')
  question.classList.toggle('state__minus-icon')
}

new Accordion().setupQuestionButtons()
