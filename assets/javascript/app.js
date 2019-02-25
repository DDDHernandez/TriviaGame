$(document).ready(function(){
  
  $("#startButton").click(function(){
    $("#gameStart").css("display", "block")
    run();
  })
  
  
  
  var questionArray = [
      {
          question: "Name the world's largest ocean?",
          answerArray : [
              "Atlantic", 
              "Pacific",
              "Arctic",
              "Indian"
          ],
          index: 2
      },
      {
          question: "What is the world's oldest piece of chewing gum?",
          answerArray: [
              "9000 Years Old",
              "2 Weeks Old",
              "9 Months Old",
              "20 years old"
          ],
          index: 1
      },
      {
          question: "How many pieces of wood does it take to make a violin?",
          answerArray: [
              "20 pieces",
              "40 pieces",
              "70 pieces",
              "100 pieces"
          ],
          index: 3
      },
      {
          question: "Where was the fortune cookie invented",
          answerArray: [
              "China",
              "Japan",
              "India",
              "United States",
          ],
          index: 4
      },
      {
          question: "What is a group of frogs known as?",
          answerArray: [
              "Frogmania",
              "Roomp",
              "Army",
              "Knot"
          ],
          index: 3
      },
      {
        question: "When did Gmail launch?",
        answerArray: [
            "April 1st, 2004",
            "December 12th, 2017",
            "August 4th, 2008",
            "September 6th, 2010"
        ],
        index: 1
    },
  ];
  var i = 0;
  var Countdown = 30;
  var intervalId;
  var correct = 0;
  function showQuestion(){
      $("#question-view").html(questionArray[i].question);
      $("#button1").text(questionArray[i].answerArray[0]);
      $("#button2").text(questionArray[i].answerArray[1]);
      $("#button3").text(questionArray[i].answerArray[2]);
      $("#button4").text(questionArray[i].answerArray[3]);

      $("#button" + questionArray[i].index).data("correct", "true")

      i++
  }
  showQuestion();
  
  

  function decrement() {
      Countdown--;
      $("#Stopwatch").html("<h2>Time: " + Countdown);
      if(Countdown === 0) {
          stop ();
          alert("Time's Up!");
      } else {
          
      }
  }
  function run () {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
  }
  function stop() {
      clearInterval(intervalId);
  }
  var userGuess;
  $("button").on("click",function(){
      userGuess = $(this);
      stop();
      Countdown = 30;
      if($(this).data("correct") === "true"){
          console.log("correct")
          $(this).data("correct", "");
          correct++;
          console.log()
      }
      else{
          console.log("incorrect")
      };
      if(i == 5) {
          $("#question-view").html("Congratulations you got " + correct + " out of 5 correct!\nRefresh the page to play again!" );
          $(".btn-group-vertical").html("")
          $("#Stopwatch").html("")
      } else {
          showQuestion();
          run();
      }
      

     

  })

})
