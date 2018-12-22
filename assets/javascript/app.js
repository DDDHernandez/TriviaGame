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
                };
                   
                if (number === 0) {
                    stop();
                    alert("Time Up!");
                    Answers();
                    $("#hiddenQuestions").html("Congratulations you got " + correct + " out of 5 correct!\nRefresh the page to play again!" )
                } else {
                    showQuestion();
                    run();
                }
                function stop() {
                    clearInterval(intervalId);
                  }
                  var correct = 0;
               
            function Answers() {
                if ("#yes" == checked){
                    correct++;}
                
            }
           
})
