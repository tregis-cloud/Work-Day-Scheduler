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
  var nineButton = $("#nine");
  var nineDescription = $("#nineText");
  console.log(nineButton);
  console.log(nineDescription);

  //Setting up event listener

  $(".saveBtn").on("click", function () {
    var clickBtn = $(this).siblings();
    console.log(clickBtn[0].innerText);
    localStorage.setItem(clickBtn[0].innerText, clickBtn[1].value);
  });

  nineDescription.val(localStorage.getItem("9AM"));
  console.log($(".time-block"));
  //Default background-color is green
  if (time >= "9:00" && time < "10:00") {
    nineDescription.addClass(".past");
  } else if (time > "10:00") {
    nineDescription.attr("sytle", "background-color:gray");
  }
});
