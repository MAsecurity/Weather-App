function weatherDetails(weatherData){
  const mainSection = document.querySelector(".weather-info-section-two");
  const container = document.createElement("div");
  container.classList.add("weather-details-container");
  const title = document.createElement("div");
  title.classList.add("weather-details-title");
  title.textContent = 'Weather Details';
  const moreDetailsContainer = document.createElement("div");
  moreDetailsContainer.classList.add("divs-container");
  // wind section
  const wind = document.createElement("div");
  wind.classList.add("wind")
  const windInfo = document.createElement("div");
  windInfo.classList.add("wind-info");
  const windTitle = document.createElement("div");
  windTitle.classList.add("wind-title");
  windTitle.textContent = "WIND";
  const windMph = document.createElement("div");
  windMph.classList.add("wind-mph")
  windMph.textContent = `${weatherData.current.gust_mph} mp/h`;
  const windIcon = document.createElement("div");
  windIcon.classList.add("wind-icon")
  const windIconspan = document.createElement("span");
  windIconspan.classList.add("material-symbols-outlined");
  windIconspan.textContent = "air";
  // humidity section
  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  const humidityInfo = document.createElement("div");
  humidityInfo.classList.add("humidity-info");
  const humidityTitle = document.createElement("div");
  humidityTitle.textContent = "HUMIDITY";
  humidityTitle.classList.add("humidity-title")
  const humidityPercentage = document.createElement("div");
  humidityPercentage.classList.add("humidity-percentage")
  humidityPercentage.textContent = `${weatherData.current.humidity}%`;
  const humidityIcon = document.createElement("div");
  humidityIcon.classList.add("humidity-icon");
  const humidityIconSpan = document.createElement("span");
  humidityIconSpan.classList.add("material-symbols-outlined");
  humidityIconSpan.textContent = "humidity_percentage";
  // feels like section
  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feels-like");
  const feelsLikeInfo = document.createElement("div");
  feelsLikeInfo.classList.add("feels-like-info");
  const feelsLikeTitle = document.createElement("div");
  feelsLikeTitle.textContent = "FEELS LIKE";
  feelsLikeTitle.classList.add("feels-like-title");
  const feelsLikeDeg = document.createElement("div");
  feelsLikeDeg.classList.add("feels-like-deg");
  feelsLikeDeg.textContent = `${weatherData.current.feelslike_c} °C`;
  const feelsLikeIcon = document.createElement("div");
  feelsLikeIcon.classList.add("feels-like-icon");
  const feelsLikeIconSpan = document.createElement("span");
  feelsLikeIconSpan.classList.add("material-symbols-outlined");
  feelsLikeIconSpan.textContent = "device_thermostat";
  //  visibility
  const visibility = document.createElement("div");
  visibility.classList.add("visibility");
  const visibilityInfo = document.createElement("div");
  visibilityInfo.classList.add("visibility-info");
  const visibilityTitle = document.createElement("div");
  visibilityTitle.classList.add("visibility-title");
  visibilityTitle.textContent = "VISIBILITY";
  const visibilityKm = document.createElement("div");
  visibilityKm.classList.add("visibility-km");
  visibilityKm.textContent = `${weatherData.current.vis_km} km`;
  const visibilityIcon = document.createElement("div");
  visibilityIcon.classList.add("visibility-icon");
  const visibilityIconSpan = document.createElement("span");
  visibilityIconSpan.classList.add("material-symbols-outlined");
  visibilityIconSpan.textContent = "visibility" 
  // Add to DOM
  mainSection.appendChild(container);
  container.appendChild(title);
  container.appendChild(moreDetailsContainer);
  moreDetailsContainer.appendChild(wind);
  wind.appendChild(windInfo);
  windInfo.appendChild(windTitle)
  windInfo.appendChild(windMph)
  wind.appendChild(windIcon);
  windIcon.appendChild(windIconspan);
  moreDetailsContainer.appendChild(humidity);
  humidity.appendChild(humidityInfo);
  humidityInfo.appendChild(humidityTitle);
  humidityInfo.appendChild(humidityPercentage);
  humidity.appendChild(humidityIcon);
  humidityIcon.appendChild(humidityIconSpan);
  moreDetailsContainer.appendChild(feelsLike);
  feelsLike.appendChild(feelsLikeInfo);
  feelsLikeInfo.appendChild(feelsLikeTitle);
  feelsLikeInfo.appendChild(feelsLikeDeg);
  feelsLike.appendChild(feelsLikeIcon);
  feelsLikeIcon.appendChild(feelsLikeIconSpan);
  moreDetailsContainer.appendChild(visibility);
  visibility.appendChild(visibilityInfo);
  visibilityInfo.appendChild(visibilityTitle);
  visibilityInfo.appendChild(visibilityKm);
  visibility.appendChild(visibilityIcon);
  visibilityIcon.appendChild(visibilityIconSpan);
}
export {weatherDetails}