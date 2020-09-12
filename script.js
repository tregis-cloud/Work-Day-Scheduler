$(document).ready(function () {
  // Setting up header with current date
  var date = moment().format("MMM Do YYYY");
  var timeNow = 9;
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
  var nine = $("#9");
  var ten = $("#10");
  var eleven = $("#11");
  var twelve = $("#12");
  var one = $("#1");
  var two = $("#2");
  var three = $("#3");
  var four = $("#4");
  var five = $("#5");
  nine = 9;
  ten = 10;
  eleven = 11;
  twelve = 12;
  one = 1;
  two = 2;
  three = 3;
  four = 4;
  five = 5;
  var array = [nine, ten, eleven, twelve, one, two, three, four, five];
  //var timeNow = moment().hour();

  setInterval(function () {
    for (var i = 0; i < array.length; i++) {
      if (timeNow < array[i]) {
        $(".time-block").removeClass("past noClass").addClass("future");
      } else if (timeNow == array[i]) {
        $(".time-block").removeClass("future noClass").addClass("present");
      } else if (timeNow > array[i]) {
        $(".time-block").removeClass("present noClass").addClass("past");
      }
    }
  }, 1000);
});
