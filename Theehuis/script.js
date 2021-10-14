menuButton = document.querySelector(".menu-btn");
menuCloseButton = document.querySelector(".menu-close-btn");
navBar = document.querySelector(".nav-bar");
burgerStripes = document.querySelectorAll(".menu-btn-stripe");
closeStripe1 = document.querySelector(".menu-close-btn-stripe-1");
closeStripe2 = document.querySelector(".menu-close-btn-stripe-2");

menuButton.addEventListener("click", function () {
  menuButton.style.visibility = "hidden";
  navBar.style.visibility = "visible";
  menuCloseButton.style.visibility = "visible";
});

menuCloseButton.addEventListener("click", function () {
  menuButton.style.visibility = "visible";
  navBar.style.visibility = "hidden";
  menuCloseButton.style.visibility = "hidden";
});

menuButton.addEventListener("mouseover", function () {
  burgerStripes.forEach(stripe => {
    stripe.style.background = "#087990";
  })
});

menuButton.addEventListener("mouseleave", function () {
  burgerStripes.forEach(stripe => {
    stripe.style.background = "#fff";
  })
});

menuCloseButton.addEventListener("mouseover", function () {
  closeStripe1.style.background = "#087990";
  closeStripe2.style.background = "#087990";
});

menuCloseButton.addEventListener("mouseleave", function () {
  closeStripe1.style.background = "#fff";
  closeStripe2.style.background = "#fff";
});









