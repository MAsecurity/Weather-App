function weatherDetails(weatherData){
  const mainSection = document.querySelector(".weather-info-section-two");
  const container = document.createElement("div");
  container.classList.add("weather-details-container");
  const title = document.createElement("div");
  title.classList.add("weather-details-title");
  title.textContent = 'Weather Details';
  const moreDetailsContainer = document.createElement("div");
  moreDetailsContainer.classList.add("divs-container");
  const wind = document.createElement("div");
  wind.classList.add("wind")
  const windInfo = document.createElement("div");
  windInfo.classList.add("wind-info");
  const windTitle = document.createElement("div");
  windTitle.classList.add("wind-title");
  windTitle.textContent = "Wind";
  const windMph = document.createElement("div");
  windMph.classList.add("wind-mph")
  windMph.textContent = `${weatherData.current.gust_mph} mp/h`;
  const windIcon = document.createElement("div");
  windIcon.classList.add("wind-icon")
  const windIconspan = document.createElement("span");
  windIconspan.classList.add("material-symbols-outlined");
  windIconspan.textContent = "air"

  // Add to DOM
  mainSection.appendChild(container);
  container.appendChild(title);
  container.appendChild(moreDetailsContainer);
  moreDetailsContainer.appendChild(wind);
  wind.appendChild(windInfo);
  windInfo.appendChild(windTitle)
  windInfo.appendChild(windMph)
  wind.appendChild(windIcon);
  windIcon.appendChild(windIconspan)
}
export {weatherDetails}