const setTheme = theme => document.documentElement.className = theme;

function openMenu() {
  document.getElementById("mobile-nav").style.height = "100%";
}

function closeMenu() {
  document.getElementById("mobile-nav").style.height = "0%";
}