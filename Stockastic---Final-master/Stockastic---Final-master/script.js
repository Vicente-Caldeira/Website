window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("sticky");
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("nav-bg");
  }
}
