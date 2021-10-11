function openMenu0() {
  document.getElementById("question__answer").classList.toggle("faq--open");
  document.getElementById("chevrons0").classList.toggle("rotate");
}

function openMenu1() {
  document.getElementById("question__answer1").classList.toggle("faq--open");
  document.getElementById("chevrons1").classList.toggle("rotate");
}

function openMenu2() {
  document.getElementById("question__answer2").classList.toggle("faq--open");
  document.getElementById("chevrons2").classList.toggle("rotate");
}

function openMenu3() {
  document.getElementById("question__answer3").classList.toggle("faq--open");
  document.getElementById("chevrons3").classList.toggle("rotate");
}

function openMenu4() {
  document.getElementById("question__answer4").classList.toggle("faq--open");
  document.getElementById("chevrons4").classList.toggle("rotate");
}

function openMenu5() {
  document.getElementById("question__answer5").classList.toggle("faq--open");
  document.getElementById("chevrons5").classList.toggle("rotate");
}

function burgerMenu() {
  document.getElementById("burger").classList.add("menu__backdrop");
}

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}
