import { weatherSummary } from "../DOM/weatherSummary";
import { weatherDetails } from "../DOM/weatherDetails";
import { clearSummary } from "../DOM/clearDom";
import { clearDetails } from "../DOM/clearDom";
async function fetchRequest(input) {
  const validationBox = document.querySelector("#validation");
  try {
    let apiKey = "8f7034bc98884d48bb875750241107";
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`,
      { mode: "cors" },
    );
    let weatherData = await response.json();
    if (weatherData.error) {
      validationBox.classList.add("active");
      validationBox.textContent = `You entered an invalid city (${input})`;
    } else {
      if (validationBox.classList.contains("active")) {
        validationBox.classList.remove("active");
        validationBox.textContent = "";
      } else {
        // clear everything
        clearSummary();
        clearDetails();
        weatherSummary(weatherData)
        weatherDetails();
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export { fetchRequest };
