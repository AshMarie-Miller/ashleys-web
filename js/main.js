const setTheme = theme => document.documentElement.className = theme;

function toggleMenu() {
    let mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.className === "mobile-nav") {
      mobileNav.className += " mobile";
    } else {
      mobileNav.className = "mobile-nav";
    }
  }