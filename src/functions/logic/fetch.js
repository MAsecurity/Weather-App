import { weatherSummary } from "../DOM/weatherSummary";
import { weatherDetails } from "../DOM/weatherDetails";
import { clearSummary } from "../DOM/clearDom";
import { clearDetails } from "../DOM/clearDom";
import { loader } from "../DOM/loader";
import { removingLoader } from "../DOM/removeLoader";
async function fetchRequest(input) {
  const validationBox = document.querySelector("#validation");
  try {
    // start loading process
    loader();
    let apiKey = "8f7034bc98884d48bb875750241107";
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`,
      { mode: "cors" },
    );
    let weatherData = await response.json();
    if (weatherData.error) {
      validationBox.classList.add("active");
      validationBox.textContent = `You entered an invalid city (${input})`;
      removingLoader();
    } else {
      if (validationBox.classList.contains("active")) {
        validationBox.classList.remove("active");
        validationBox.textContent = "";
      } else {
        // remove loader
        removingLoader();
        // clear everything
        clearSummary();
        clearDetails();
        // update fields
        weatherSummary(weatherData);
        weatherDetails(weatherData);
        console.log(weatherData);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export { fetchRequest };
