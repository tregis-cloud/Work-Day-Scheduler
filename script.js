$(document).ready(function () {
  // Setting up header with current date
  var date = moment().format("MMM Do YYYY");
  var timeNow = moment().hour();
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

  //Placeholder for color logic

  if (timeNow < 9) {
    $(".nine").removeClass("past noClass").addClass("future");
  } else if (timeNow == 9) {
    $(".nine").removeClass("future noClass").addClass("present");
  } else {
    $(".nine").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 10) {
    $(".ten").removeClass("past noClass").addClass("future");
  } else if (timeNow == 10) {
    $(".ten").removeClass("future noClass").addClass("present");
  } else {
    $(".ten").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 11) {
    $(".eleven").removeClass("past noClass").addClass("future");
  } else if (timeNow == 11) {
    $(".eleven").removeClass("future noClass").addClass("present");
  } else {
    $(".eleven").removeClass("current noClass").addClass("past");
  }

  if (timeNow < 12) {
    $(".twelve").removeClass("past noClass").addClass("future");
  } else if (timeNow == 11) {
    $(".twelve").removeClass("future noClass").addClass("present");
  } else {
    $(".twelve").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 13) {
    $(".one").removeClass("past noClass").addClass("future");
  } else if (timeNow == 13) {
    $(".one").removeClass("future noClass").addClass("present");
  } else {
    $(".one").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 14) {
    $(".two").removeClass("past noClass").addClass("future");
  } else if (timeNow == 14) {
    $(".two").removeClass("future noClass").addClass("present");
  } else {
    $(".two").removeClass("current noClass").addClass("past");
  }

  if (timeNow < 15) {
    $(".three").removeClass("past noClass").addClass("future");
  } else if (timeNow == 15) {
    $(".three").removeClass("future noClass").addClass("present");
  } else {
    $(".three").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 16) {
    $(".four").removeClass("past noClass").addClass("future");
  } else if (timeNow == 16) {
    $(".four").removeClass("future noClass").addClass("present");
  } else {
    $(".four").removeClass("current noClass").addClass("past");
  }
  if (timeNow < 17) {
    $(".five").removeClass("past noClass").addClass("future");
  } else if (timeNow == 17) {
    $(".five").removeClass("future noClass").addClass("present");
  } else {
    $(".five").removeClass("current noClass").addClass("past");
  }
});
