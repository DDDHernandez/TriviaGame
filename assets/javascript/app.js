$(document).ready(function() {

        $(".btn").on("click", function() {
           $('#Start-button').replaceWith("#hiddenQuestions");
            $("#hiddenQuestions").css("display", "block");
          })
})