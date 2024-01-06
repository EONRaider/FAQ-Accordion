let questions = document.querySelectorAll('.card-accordion__question')

questions.forEach(question => {
  question.addEventListener('click', function() {
    // Change the question icon styling
    this.classList.toggle('state__minus-icon')

    // Select the answer to the question and toggle the "visible-answer" class
    this.nextElementSibling.classList.toggle('state__visible-answer')
  })
})
