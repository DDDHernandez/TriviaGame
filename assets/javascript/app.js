$(document).ready(function() {

        $(".btn").on("click", function() {
           $('.btn').replaceWith(".hiddenQuestions");
            $(".hiddenQuestions").style.display = "block";
          })
})