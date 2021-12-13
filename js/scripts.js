

$(function () {
    $("#header").load("header.html");
  });
$(function () {
  $("#sidebar-wrapper").load("sidebar.html");
});
$(function () {
  $("#footer").load("footer.html");
});

// Toggle the side navigation
// const sidebarToggle = document.body.querySelector('#wrapper');
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// i have to run the file with the live server so it will work
$(document).ready(function () {
  $("#Customer").DataTable({
    ajax: "./json/data.json",
    columns: [
      { data: "name" },
      { data: "address" },
      { data: "city" },
      { data: "age" },
      { data: "last visit" },
      { data: "orders" },
    ],
  });
});
