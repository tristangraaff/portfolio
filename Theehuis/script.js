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

const currentTime = new Date();
const currentMonth = currentTime.getMonth() + 1;
const currentDay = currentTime.getDate();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentSecond = currentTime.getSeconds();

const bgImg = document.querySelector(".seasonal-bg-img");

console.log(currentTime);
console.log(currentMonth);
console.log(currentDay);
console.log(currentHour);
console.log(currentMinute);
console.log(currentSecond);

const total = {month: currentMonth, day: currentDay, hour: currentHour, minute: currentMinute, second: currentSecond};
console.log(total);

// if ( total.second >= 0 ) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Lente-wallpaper_impact.jpg')", "important");
// };

// if ( total.second >= 15 ) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Zomer-wallpaper_rio2021l2_halve.jpg')", "important");
// };

// if ( total.second >= 30 ) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-herfst-wallpaper_fusion5_high.jpg')", "important");
// };

// if ( total.second >= 45 ) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Winter-wallpaper_interwoven5.jpg')", "important");
// };

// if (total.second >= 0 && total.second <= 7 || total.second >= 8 && total.second <= 14) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Lente-wallpaper_impact.jpg')", "important");
// } else if (total.second >= 15 && total.second <= 22 || total.second >= 23 && total.second <= 29) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Zomer-wallpaper_rio2021l2_halve.jpg')", "important");
// } else if (total.second >= 30 && total.second <= 37 || total.second >= 38 && total.second <= 44) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-herfst-wallpaper_fusion5_high.jpg')", "important");
// } else if (total.second >= 45 && total.second <= 52 || total.second >= 53 && total.second <= 59) {
//   document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Winter-wallpaper_interwoven5.jpg')", "important");
// };

if (
  total.month === 3 && total.day >= 21 || 
  total.month === 4 || 
  total.month === 5 || 
  total.month === 6 && total.day <= 20) {
  document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Lente-wallpaper_impact.jpg')", "important");
} else if (
  total.month === 6 && total.day >= 21 ||
  total.month === 7 ||
  total.month === 8 ||
  total.month === 9 && total.day <=20) {
    document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Zomer-wallpaper_rio2021l2_halve.jpg')", "important");
  } else if (
  total.month === 9 && total.day >= 21 ||
  total.month === 10 ||
  total.month === 11 ||
  total.month === 12 && total.day <=20) {
    document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-herfst-wallpaper_fusion5_high.jpg')", "important");
  } else if (
  total.month === 12 && total.day >= 21 ||
  total.month === 1 ||
  total.month === 2 ||
  total.month === 3 && total.day <=20) {
    document.body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Winter-wallpaper_interwoven5.jpg')", "important");
  } 



// if (
//   total.month >= 3 && total.month <= 6 &&
//   total.day >= 21 && total.day <= 
//   total.hour >= 13 &&
//   total.minute >= 0 &&
//   total.second >= 0 && total.second <= 14) {
//     body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Lente-wallpaper_impact.jpg')", "important");
// }

// if (
//   total.month >= 9 && 
//   total.day >= 20 &&
//   total.hour >= 13 &&
//   total.minute >= 0 &&
//   total.second >= 15 && total.second <= 29) {
//     body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Zomer-wallpaper_rio2021l2_halve.jpg')", "important");
// }

// if (
//   total.month >= 9 && 
//   total.day >= 20 &&
//   total.hour >= 13 &&
//   total.minute >= 0 &&
//   total.second >= 30 && total.second <= 44) {
//     body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-herfst-wallpaper_fusion5_high.jpg')", "important");
// }

// if (
//   total.month >= 9 && 
//   total.day >= 20 &&
//   total.hour >= 13 &&
//   total.minute >= 0 &&
//   total.second >= 45 && total.second <= 59) {
//     body.style.setProperty("background-image", "url('https://bibw.vorst.studio/wp-content/uploads/2021/09/0-Home-Winter-wallpaper_interwoven5.jpg')", "important");
// }



// if (currentTime => {"2021-09-20T11:31:37.932Z"}) {
//   document.body.style.background = "red";
// };

// if (currentTime => {"2021-09-20T11:32:37.932Z"}) {
//   document.body.style.background = "blue";
// };

// if (currentTime => {"2021-09-20T11:33:37.932Z"}) {
//   document.body.style.background = "green";
// };

// if (currentSecond === 15) {
//   document.body.style.background = "red";
// };

// if (currentSecond === 30) {
//   document.body.style.background = "green";
// };

// if (currentSecond === 45) {
//   document.body.style.background = "blue";
// };

// if (currentSecond === 0) {
//   document.body.style.background = "blue";
// };








