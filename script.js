document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const ampm = document.getElementById("ampm");
    const currentTime = new Date();
    var hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const date = document.getElementById("date");
    const mmddyyyyBtn = document.getElementById("mmddyyy");
    const ddmmyyyyBtn = document.getElementById("ddmmyyy");
    hours.innerHTML =
      currentTime.getHours() < 10
        ? "0" + currentTime.getHours()
        : currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes.innerHTML =
      currentTime.getMinutes() < 10
        ? "0" + currentTime.getMinutes()
        : currentTime.getMinutes();
    seconds.innerHTML =
      currentTime.getSeconds() < 10
        ? "0" + currentTime.getSeconds()
        : currentTime.getSeconds();
    ampm.innerHTML = hours >= 12 ? "PM" : "AM";
    const mmddyyyyFormat = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const ddmmyyyyFormat = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    // Function to update the date display based on the selected format
    function updateDateDisplay(format) {
      date.innerHTML = currentTime.toLocaleDateString(undefined, format);
    }

    // Initial update based on default format (MM/DD/YYYY)
    updateDateDisplay(mmddyyyyFormat);

    // Event listeners for format buttons
    mmddyyyyBtn.addEventListener("click", function () {
      updateDateDisplay(mmddyyyyFormat);
    });

    ddmmyyyyBtn.addEventListener("click", function () {
      updateDateDisplay(ddmmyyyyFormat);
    });

    setTimeout(updateTime, 1000);
  }
  updateTime();
});
const clock = document.getElementById("clock");
document.querySelector("a.btn").addEventListener("click", function () {
  clock.classList.toggle("light");
  clock.classList.toggle("dark");
  document.body.style.background = clock.classList.contains("light")
    ? "#fff"
    : "#000";
});
