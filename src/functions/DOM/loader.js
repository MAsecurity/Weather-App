function loader(){
  const addLoader = document.querySelector(".remove-loader");
  addLoader.classList.add("loader");
  addLoader.classList.remove("remove-loader")
}
export {loader}