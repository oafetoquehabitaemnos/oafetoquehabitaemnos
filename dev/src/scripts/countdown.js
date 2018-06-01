// Countdown
// Set the date we're counting down to
let countDownDate = new Date("Sep 1, 2018 09:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements

  document.querySelector("#js-timer-banner .days").innerHTML = days + "<span>Dias</span>";
  document.querySelector("#js-timer-banner .hours").innerHTML = hours + "<span>Horas</span>";
  document.querySelector("#js-timer-banner .minutes").innerHTML = minutes + "<span>Minutos</span>";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("#js-timer-banner").innerHTML = "Em breve... ";
  }
}, 1000);