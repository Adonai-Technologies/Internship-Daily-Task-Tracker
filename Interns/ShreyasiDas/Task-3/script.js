
let deadline = new Date("2024-04-10T10:20:00"); 

let timerInterval = setInterval(function() {
  let now = new Date();
  let distance = deadline.getTime() - now.getTime();

  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
