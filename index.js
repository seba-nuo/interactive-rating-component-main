let lastRateClicked = null

function updateLastRate(e) {
  const rate = document.querySelector('#selected')
  lastRateClicked = e.target.id
  rate.innerText = lastRateClicked
}

function handleSubmit(e) {
  e.preventDefault()
  if (lastRateClicked == null) return
  const ratingForm = document.querySelector('.form')
  const thankYou = document.querySelector('.thank-you')
  ratingForm.classList.toggle('none')
  thankYou.classList.toggle('none')
}