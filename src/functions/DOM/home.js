import { fetchRequest } from "../logic/fetch";
function home() {
  // link font icons
  const linkEl = document.createElement("link");
  Object.assign(linkEl,{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
  })
  const mainContent = document.createElement("div");
  mainContent.classList.add("content");
  const navSearchContainer = document.createElement("div");
  navSearchContainer.classList.add("nav-container");
  const form = document.createElement("form");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper")
  const input = document.createElement("input");
  input.setAttribute("type","text");
  input.setAttribute("placeholder", "Enter any city");
  const validationDiv = document.createElement("div");
  validationDiv.setAttribute("id","validation")
  validationDiv.classList.add("empty");
  const button = document.createElement("button");
  button.addEventListener("click",() =>{
    event.preventDefault();
    if (!input.value.length){
      validationDiv.classList.add("active");
      validationDiv.textContent = "Please enter a city"
    }else{
      validationDiv.classList.remove("active");
      validationDiv.textContent = "";
      fetchRequest(input.value)
    }
    
  })
  const spanSearchIconContainer = document.createElement("span");
  spanSearchIconContainer.classList.add("material-symbols-outlined");
  spanSearchIconContainer.textContent = 'search'


  const weatherInfoSectionOne = document.createElement("div");
  weatherInfoSectionOne.classList.add("weather-info-section-one")
  const weatherInfoSectionTwo = document.createElement("div");
  weatherInfoSectionTwo.classList.add("weather-info-section-two");
  // Add loader div
  const loader = document.createElement("div");
  loader.classList.add("remove-loader")
  // Add to DOM
  document.head.appendChild(linkEl)
  document.body.appendChild(mainContent);
  mainContent.appendChild(loader);
  mainContent.appendChild(navSearchContainer);
  navSearchContainer.appendChild(form)
  form.appendChild(wrapper);
  wrapper.appendChild(input);
  wrapper.appendChild(validationDiv)
  wrapper.appendChild(button);
  button.appendChild(spanSearchIconContainer)
  mainContent.appendChild(weatherInfoSectionOne);
  mainContent.appendChild(weatherInfoSectionTwo);

}
export { home };
