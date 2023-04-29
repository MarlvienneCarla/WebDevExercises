// const keyword is used to declare a variable that cannot be reassigned a new value
const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
// event listener is a function that is attached to an HTML element and triggered when a specific event occurs on that element, such as a user clicking a button or scrolling the page.
window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});
// this is where the convertion button made
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;
// here are the formula of the convertions
if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
  }
}