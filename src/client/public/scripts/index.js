let navbtn = document.querySelector(".navbar-burger");

navbtn.addEventListener("click", (e) => {
  console.log("click");
  document.querySelector(".navbar-menu").classList.toggle("is-active");
  navbtn.classList.toggle("is-active");
});
