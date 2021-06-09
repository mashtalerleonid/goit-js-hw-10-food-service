const toggle = document.querySelector("#theme-switch-toggle");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const STORAGE_KEY = "theme";

function checkStorage() {
  const currentTheme = localStorage.getItem(STORAGE_KEY) ?? Theme.LIGHT;
  toggle.checked = currentTheme === Theme.DARK;
  document.body.classList.add(currentTheme);
}

checkStorage();

function onToggleChange(e) {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  localStorage.setItem(STORAGE_KEY, document.body.classList);
}

toggle.addEventListener("change", onToggleChange);
