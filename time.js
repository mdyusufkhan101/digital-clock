document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    // ...existing code for the clock...

    // Function to format time in HH:MM:SS format
    function formatTime(date) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }

    // Update time for New Zealand
    const newZealandTimeElement = document.getElementById("new-zealand-time");
    const newZealandTime = new Date().toLocaleString("en-US", {
      timeZone: "Pacific/Auckland",
    });
    newZealandTimeElement.textContent = formatTime(new Date(newZealandTime));

    // Update time for Italy
    const italyTimeElement = document.getElementById("italy-time");
    const italyTime = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Rome",
    });
    italyTimeElement.textContent = formatTime(new Date(italyTime));

    // Update time for China
    const chinaTimeElement = document.getElementById("china-time");
    const chinaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    });
    chinaTimeElement.textContent = formatTime(new Date(chinaTime));

    // Update time for India
    const indiaTimeElement = document.getElementById("india-time");
    const indiaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    indiaTimeElement.textContent = formatTime(new Date(indiaTime));

    setTimeout(updateTime, 1000);
  }

  updateTime();
});
