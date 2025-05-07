const countdownDuration = 120;

  window.onload = function () {
    const bar = document.getElementById("countdown-bar");
    const label = document.getElementById("countdown-label");
    let timeLeft = countdownDuration;

    const interval = setInterval(() => {
      timeLeft--;

      const percent = (timeLeft / countdownDuration) * 100;
      bar.style.width = percent + "%";

      if (timeLeft > 0) {
        label.textContent = `${timeLeft}s`;
      } else {
        clearInterval(interval);
        label.textContent = "Alda qardashm";
        bar.classList.remove("bg-green-500");
        bar.classList.add("bg-red-500");


        setTimeout(() => {
          window.location.href = 'index.htm';
        }, 2000);
      }
    }, 1000);
  };