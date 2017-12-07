function renderOneSnack(id) {
  return RequestSnacks.oneWithReviews(id)
    .then(response => {
      const snack = response[0].data
      const reviewsArray = response[1].data
      const content = singleSnackTemplate(snack, reviewsArray)
      document.querySelector("#popup").innerHTML = content
      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
      document.querySelector('.action-btn').addEventListener('click',
    (event) => {
      if(event.target.id === "addReview"){
        const user = Token.check()
        const snack_id = event.target.parentElement.parentElement.parentElement.id
        document.querySelector('#popup').innerHTML = reviewForm(snack_id);
      }
      activateReviewSubmit(document.querySelector('.review-submit'))
    })
  })
}

function activateReviewSubmit(button){
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const title = document.querySelector('#title').value
    const text = document.querySelector('#text').value
    const user = Token.check()
    const user_id = user.userId
    const snack_id = event.target.id
    const rating = document.querySelector('#rating').value
    console.log({title, text, user_id, snack_id, rating});
    Reviews.create({title, text, user_id, snack_id, rating})
  })
}
