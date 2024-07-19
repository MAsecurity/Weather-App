import { dates } from "../logic/dateSorter";
function weatherSummary(data){
  let weatherInfo = data;
  const sectionOne = document.querySelector(".weather-info-section-one");
  const summarySection = document.createElement("div");
  summarySection.classList.add("weather-summary");
  // date and icon section
  const summarySectionOne = document.createElement("div");
  summarySectionOne.classList.add("weather-summary-section-one");
  const dateSection = document.createElement("div");
  dateSection.classList.add("date-section");
  const today = document.createElement("div");
  today.classList.add("today")
  today.textContent = "Today"
  const todaysDate = document.createElement("div");
  let date = weatherInfo.location.localtime.split(" ")
  let dateFormatted = dates(date);
  todaysDate.textContent = `${dateFormatted}`;
  todaysDate.classList.add("todays-date")
  const iconSection = document.createElement("div");
  iconSection.classList.add("icon-section")
  const img = document.createElement("img");
  img.src = `https:${weatherInfo.current.condition.icon}`;
  // temp section
  const summarySectionTwo = document.createElement("div");
  summarySectionTwo.classList.add("temp-section");
  const tempDegrees = document.createElement("div");
  tempDegrees.classList.add("temp-degrees")
  tempDegrees.textContent = `${weatherInfo.current.temp_c}°`
  // location section
  const summarySectionThree = document.createElement("div")
  summarySectionThree.classList.add("location-section")
  const locationIcon = document.createElement("span");
  locationIcon.classList.add("material-symbols-outlined");
  locationIcon.textContent = "location_on"
  const actualLocation = document.createElement("div");
  actualLocation.classList.add("actual-location");
  actualLocation.textContent = `${weatherInfo.location.name}, ${weatherInfo.location.country}`
  // Add to DOM
  sectionOne.appendChild(summarySection);
  summarySection.appendChild(summarySectionOne);
  summarySectionOne.appendChild(dateSection);
  dateSection.appendChild(today);
  dateSection.appendChild(todaysDate)
  summarySectionOne.appendChild(iconSection)
  iconSection.appendChild(img);
  summarySection.appendChild(summarySectionTwo);
  summarySectionTwo.appendChild(tempDegrees);
  summarySection.appendChild(summarySectionThree);
  summarySectionThree.appendChild(locationIcon);
  summarySectionThree.appendChild(actualLocation);

}
export{weatherSummary}