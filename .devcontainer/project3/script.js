const clock = document.getElementById("clock");

setInterval(() => {
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
}, 1000);