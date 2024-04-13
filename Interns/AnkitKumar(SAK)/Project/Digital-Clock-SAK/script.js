setInterval(function () {
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');
    let date = new Date();
    hour.innerHTML = (date.getHours() - 12);
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();

}, 1000);