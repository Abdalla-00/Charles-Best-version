const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
