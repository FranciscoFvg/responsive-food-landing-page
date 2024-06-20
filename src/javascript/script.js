$(document).ready(function () {
  $("#mobile_menu_btn").click(function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_menu_btn").find("i").toggleClass("fa-x");
  });
})