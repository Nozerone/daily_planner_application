$(function () {
//function uses Dayjs to set the current date on the header
  var currentHeaderDate = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(currentHeaderDate);
  var currentHour = dayjs().hour();
//Function targets elements by id, gets value, parses string argument and returns interger.
  $(".description").each(function (textarea) {
    var currentTextAreaHour = parseInt(
      $(this).parent().attr("id").split("-")[1]
    );
    //if statement compares value to current time.
    if (currentTextAreaHour === currentHour) {
      $(this).addClass("present");
    } else if (currentTextAreaHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
    }
  });

  // Sets event listeners to Save Button class.
  $(".saveBtn").on("click", function () {
    //Extracts value from siblings and parent to set key and value to data thats saves to local storage.
    var textArea = $(this).siblings("textarea").val();
    var textAreaKey = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(textAreaKey, textArea);
  });
  //Retrives data from local storage and displays it text area.
  $("#hour-9").children("textarea").val(localStorage.getItem("9"));
  $("#hour-10").children("textarea").val(localStorage.getItem("10"));
  $("#hour-11").children("textarea").val(localStorage.getItem("11"));
  $("#hour-12").children("textarea").val(localStorage.getItem("12"));
  $("#hour-13").children("textarea").val(localStorage.getItem("13"));
  $("#hour-14").children("textarea").val(localStorage.getItem("14"));
  $("#hour-15").children("textarea").val(localStorage.getItem("15"));
  $("#hour-16").children("textarea").val(localStorage.getItem("16"));
  $("#hour-17").children("textarea").val(localStorage.getItem("17"));

});
