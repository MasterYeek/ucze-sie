const inervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(inervalId);
});
