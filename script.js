document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const ampm = document.getElementById("ampm");
    const currentTime = new Date();
    var hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
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
    setTimeout(updateTime, 1000);
  }
  function setDate(format) {
    var today;
    if (format === "ddmmyyyy") {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      today = dd + '/' + mm + '/' + yyyy;
    } else if (format === "mmddyyyy") {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      today = mm + '/' + dd + '/' + yyyy;

    }
    document.getElementById("date").innerHTML = `${today}`;
  }


  document.getElementById("mmddyyyy").addEventListener("click", function () {
    setDate("mmddyyyy")
  });
  document.getElementById("ddmmyyyy").addEventListener("click", function () {
    setDate("ddmmyyyy")
  });

  setDate("ddmmyyyy");
  updateTime();
});
const clock = document.getElementById("clock");
document.querySelector("a.btn").addEventListener("click", function () {
  console.log("something happened")
  clock.classList.toggle("light");
  clock.classList.toggle("dark");
  document.body.style.background = clock.classList.contains("light")
    ? "#fff"
    : "#000";
});