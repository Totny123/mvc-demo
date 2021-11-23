import $ from "jquery";
import "./app1.css";

const $text = $(".app1 .text");
const $increase = $(".app1 .increase");
const $decrease = $(".app1 .decrease");
const $multiply = $(".app1 .multiply");
const $division = $(".app1 .division");

let number = localStorage.getItem("number") || $text.text();
$text.text(number);

$increase.on("click", () => {
  number++;
  localStorage.setItem("number", number);
  $text.text(number);
});

$decrease.on("click", () => {
  number--;
  localStorage.setItem("number", number);
  $text.text(number);
});

$multiply.on("click", () => {
  number *= 2;
  localStorage.setItem("number", number);
  $text.text(number);
});

$division.on("click", () => {
  number /= 2;
  localStorage.setItem("number", number);
  $text.text(number);
});
