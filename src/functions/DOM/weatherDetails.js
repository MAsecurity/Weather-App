function weatherDetails(){
  const mainSection = document.querySelector(".weather-info-section-two");
  const container = document.createElement("div");
  container.classList.add("weather-details-container");
  const title = document.createElement("div");
  title.classList.add("weather-details-title");
  title.textContent = 'Weather Details';
  mainSection.appendChild(container);
  container.appendChild(title)
}
export {weatherDetails}