let questions = document.querySelectorAll('.card-accordion__question')

questions.forEach(question => {
  question.addEventListener('click', selectedQuestion => {
    // Change the question icon styling
    selectedQuestion.target.classList.toggle('state__minus-icon')
    // Select the answer to the question and toggle the element's visibility
    selectedQuestion.target.nextElementSibling.classList.toggle('state__visible-answer')
  })
})
