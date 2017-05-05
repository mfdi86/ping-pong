//Back-End Logic//

// for (var index = 1; num %3 === 0; num +=1) {
//     return("ping");


//Specs:

//program can count up to input number
//program can display all numbers counting up to the input number
//if any number in the count-up to inputNum %3 === 0, program returns "ping" for that number
//if any number in the count-up to inputNum %5 === 0, program returns "pong" for that number
//if any number in the count-up to inputNum %15 === 0, program returns "ping-pong" for that number
//program refreshes new results for every new input

//Front-End Logic
$(document).ready(function() {
  $("form#numberfield").submit(function(event) {
    event.preventDefault();
    $("#result").text("");

    //Get and store input
    var num = parseInt($("input#num").val());
    for (var index = 1; index < num; index +=1) {
        //if index is divisible by whater results = ping
        //else if index is divisbile by 6 results = pong
        //else results = index
        if (index %15 === 0) {
          var results = "ping-pong"
        } else if (index %3 === 0) {
           var results = "ping"
        } else if (index %5 === 0) {
           var results = "pong"
        } else {
           var results = index;
        }
        //alert("Now don't go crazy!");
        //$('#drinks').show();
      //} //else {
        //$('#under-21').show();


      $("#result").append("<li>" + results + "</li>");
    }

  })
});
