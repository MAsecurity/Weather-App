function clearSummary() {
  const clearWeatherSummary = document.querySelector(
    ".weather-info-section-one",
  );
  while (clearWeatherSummary.firstElementChild) {
    clearWeatherSummary.firstElementChild.remove();
  }
}
function clearDetails() {
  const clearWeatherDetails = document.querySelector(
    ".weather-info-section-two",
  );
  while (clearWeatherDetails.firstElementChild) {
    clearWeatherDetails.firstElementChild.remove();
  }
}
export { clearSummary, clearDetails };
