function openMenu0() {
  document.getElementById("question__answer").classList.toggle("faq--open");
}

function openMenu1() {
  document.getElementById("question__answer1").classList.toggle("faq--open");
}

function openMenu2() {
  document.getElementById("question__answer2").classList.toggle("faq--open");
}

function openMenu3() {
  document.getElementById("question__answer3").classList.toggle("faq--open");
}

function openMenu4() {
  document.getElementById("question__answer4").classList.toggle("faq--open");
}

function openMenu5() {
  document.getElementById("question__answer5").classList.toggle("faq--open");
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
