//Back-End Logic//
function pingPong(index) {
  if (index %15 === 0) {
    var results = "ping-pong"
  } else if (index %3 === 0) {
     var results = "ping"
  } else if (index %5 === 0) {
     var results = "pong"
  } else {
     var results = index;
  }
return results;
}

//Front-End Logic

$(document).ready(function() {
  $("form#numberfield").submit(function(event) {
    event.preventDefault();
    $("#result").text("");
  //on submit result.text clears the div
    //gets and stores input, converts input to workable number
    var num = parseInt($("input#num").val());
    for (var index = 1; index < num; index +=1) {
    results = pingPong(index);
      
        $("#result").append("<li>" + results + "</li>");
    }
  })
});
