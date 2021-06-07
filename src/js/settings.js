const toggle = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const STORAGE_KEY = "theme";

function checkStorage() {
  let currentTheme = localStorage.getItem(STORAGE_KEY);

  if (currentTheme) {
    toggle.checked = currentTheme === Theme.DARK ? true : false;
  } else {
    currentTheme = Theme.LIGHT;
  }

  document.body.classList.add(currentTheme);
}

checkStorage();

function onToggleChange(e) {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  localStorage.setItem(STORAGE_KEY, document.body.classList);
}

toggle.addEventListener("change", onToggleChange);
