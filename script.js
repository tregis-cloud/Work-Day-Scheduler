$(document).ready(function () {
  //Setting up header with current date
  var today = new Date();
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();
  console.log(date);
  console.log(time);
  var DayEl = $("#currentDay");
  DayEl.text(date);

  //Setting up each time slice
  var nineDescription = $("#nineText");
  var tenDescription = $("#tenText");
  var elevenDescription = $("#elevenText");
  var twelveDescription = $("#twelveText");
  var oneDescription = $("#oneText");
  var twoDescription = $("#twoText");
  var threeDescription = $("#threeText");
  var fourDescription = $("#fourText");
  var fiveDescription = $("#fiveText");

  //Setting up listener for time-block id = 9
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[0].innerText, clickBtn[1].value);
  });

  nineDescription.val(localStorage.getItem("9AM"));
  console.log($(this));

  //Setting up listener for time-block id = 10
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[1].innerText, clickBtn[2].value);
  });

  tenDescription.val(localStorage.getItem("10AM"));
  console.log($(".time-block"));

  //   //Setting up listener for time-block id = 11
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[2].innerText, clickBtn[3].value);
  });

  elevenDescription.val(localStorage.getItem("11AM"));

  //Setting up listener for time-block id = 12
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[3].innerText, clickBtn[4].value);
  });
  twelveDescription.val(localStorage.getItem("12PM"));

  //Setting up listener for time-block id = 1
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[4].innerText, clickBtn[5].value);
  });
  oneDescription.val(localStorage.getItem("1PM"));

  //Setting up listener for time-block id = 2
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[5].innerText, clickBtn[6].value);
  });
  twoDescription.val(localStorage.getItem("2PM"));

  //Setting up listener for time-block id = 3
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[6].innerText, clickBtn[7].value);
  });
  threeDescription.val(localStorage.getItem("3PM"));

  //Setting up listener for time-block id = 4
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[7].innerText, clickBtn[8].value);
  });
  fourDescription.val(localStorage.getItem("4PM"));

  //Setting up listener for time-block id = 5
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[8].innerText, clickBtn[9].value);
  });
  fiveDescription.val(localStorage.getItem("5PM"));

  //   //Default background-color is green
  //   if (time >= "9:00" && time < "10:00") {
  //     nineDescription.addClass(".past");
  //   } else if (time > "10:00") {
  //     nineDescription.attr("sytle", "background-color:gray");
  //   }
});
