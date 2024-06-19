// Set the date we're counting down to
var countDownDate = new Date("Jul 27, 2024 10:00:00").getTime();
let hasgone = false;
// Update the count down every 1 second
var x = setInterval(
  function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    var hours = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    var minutes = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    // Display the result in the element with id="timer"
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "LSL 8 HAS STARTED!";
      return;
    }
    document.getElementById(
      "countdown"
    ).innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    hasgone = true;
  },
  hasgone ? 1000 : 0
);
