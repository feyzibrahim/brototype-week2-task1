function toggleNavIcon() {
  var icon = document.getElementById("toggle-nav-icon");
  icon.className === "fas fa-bars"
    ? (icon.className = "fas fa-close")
    : (icon.className = "fas fa-bars");
}
