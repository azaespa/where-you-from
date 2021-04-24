// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

function handleChange(event) {
  const currentValue = event.target.value;
  localStorage.setItem("country", currentValue);
}

function loadSelect() {
  const currentCountry = localStorage.getItem("country");
  if (currentCountry !== null) {
    const currentOption = select.querySelector(
      `option[value=${currentCountry}]`
    );
    select.value = currentOption.value;
  }
}

function init() {
  loadSelect();
  select.addEventListener("change", handleChange);
}

init();
