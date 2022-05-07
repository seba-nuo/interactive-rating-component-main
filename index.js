const rateButtons = document.querySelector(".rate").querySelectorAll("button");
let lastRateClicked = null;

function updateLastRate(e) {
  rateButtons.forEach((btn) => {
    btn.classList.remove("selected"); // remove all selected class
  });
  e.target.classList.add("selected"); //add selected class to the target

  const rate = document.querySelector("#selected");
  lastRateClicked = e.target.id;
  rate.innerText = lastRateClicked;
}

function handleSubmit(e) {
  e.preventDefault();
  if (lastRateClicked == null) return;
  const ratingForm = document.querySelector(".form");
  const thankYou = document.querySelector(".thank-you");
  ratingForm.classList.toggle("none");
  thankYou.classList.toggle("none");
}
