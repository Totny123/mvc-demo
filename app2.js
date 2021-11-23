import $ from "jquery";
import "./app2.css";

const $tabBar = $(".app2 .tab-bar");
const $tabContent = $(".app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  $tabContent
    .children("li")
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $li.addClass("active").siblings().removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
