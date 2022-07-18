const mainContainer = document.querySelector("#content1");
const thanksContainer = document.querySelector("#content2");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".ratings");
let guard;

function submit() {
  if (guard === 1) {
    mainContainer.classList.add("visually-hidden");
    thanksContainer.classList.remove("visually-hidden");
  } else {
    alert("Puan Vermeden Geçemezsiniz.");
  }
}

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    if (rate.innerHTML === "1") {
      document.getElementById("rating-one").classList.remove("rating-button");
      document.getElementById("rating-one").classList.add("rating-button2");
      rating.innerHTML = "1";
      guard = 1;
    } else if (rate.innerHTML === "2") {
      document.getElementById("rating-two").classList.remove("rating-button");
      document.getElementById("rating-two").classList.add("rating-button2");
      rating.innerHTML = "2";
      guard = 1;
    } else if (rate.innerHTML === "3") {
      document.getElementById("rating-three").classList.remove("rating-button");
      document.getElementById("rating-three").classList.add("rating-button2");
      rating.innerHTML = "3";
      guard = 1;
    } else if (rate.innerHTML === "4") {
      document.getElementById("rating-four").classList.remove("rating-button");
      document.getElementById("rating-four").classList.add("rating-button2");
      rating.innerHTML = "4";
      guard = 1;
    } else if (rate.innerHTML === "5") {
      document.getElementById("rating-five").classList.remove("rating-button");
      document.getElementById("rating-five").classList.add("rating-button2");
      rating.innerHTML = "5";
      guard = 1;
    }
  });
});
