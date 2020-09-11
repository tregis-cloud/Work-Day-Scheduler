$(document).ready(function () {
  //Setting up header with current date
  var today = new Date();
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();

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
  var schedulerTimeSlot = $(".time-block");

  //Setting up listener for time-block id = 9
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[0].innerText, clickBtn[1].value);
  });

  nineDescription.val(localStorage.getItem("9AM"));

  //Setting up listener for time-block id = 10
  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    localStorage.setItem(clickBtn[1].innerText, clickBtn[2].value);
  });

  tenDescription.val(localStorage.getItem("10AM"));

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

  //Setting  background-colors
  setInterval(function () {
    for (var i = 0; i < schedulerTimeSlot.length; i++) {
      if (time >= schedulerTimeSlot[i] && time < schedulerTimeSlot[i] + 1) {
        $(".time-block").removeClass("past noClass").addClass("present");
      } else if (
        time > schedulerTimeSlot[i] &&
        time > schedulerTimeSlot[i] + 1
      ) {
        $(".time-block").removeClass("current noClass").addClass("pass");
      } else {
        $(".time-block").removeClass("future noClass").addClass("past");
      }
    }
  }, 1000);
});
