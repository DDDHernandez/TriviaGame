$(document).ready(function() {


    var number = 20;
    var intervalId;
        $(".btn").on("click", function() {
            console.log($('#Start-button'))
           $('#Start-button').css("display", "none");
            $("#gameStart").css("display", "block");
            run();
        });
     
            function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
              } 
              function decrement() {
                number--;
                $("#showNumber").html("<h2>" + number + "</h2>");  
                   
                if (number === 0) {
                stop();
                alert("Time Up!");
                 console.log("Time up!");
                 
                }
            } 
              function stop() {
                    clearInterval(intervalId);
                    Answers();

              
                 var correct = 0;
               
              function Answers() {
             if ($('#yes').attr('checked') === 'checked') {
                  correct++;
                  $("#gameStart").css("display", "none");   
              $("#results").html("Congratulations you got " + correct + " out of 7 correct!\nRefresh the page to play again!" )
                console.log(correct)
            }
        }; 
        }
    });
           

