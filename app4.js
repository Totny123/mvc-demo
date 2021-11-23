import $ from "jquery";
import "./app4.css";

const $circle = $(".app4 .circle");
$circle.mouseover(() => {
  $circle.addClass("active");
});

$circle.mouseout(() => {
  $circle.removeClass("active");
});
