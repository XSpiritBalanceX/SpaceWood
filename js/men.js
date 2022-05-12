$(document).ready(function(){
    $("#navig").click(function () {
      if ($(".contaner").is(":hidden")) {
          $(".contaner").show("slow");
          $("#pokaz").hide("slow")
      } else {
          $(".contaner").hide("slow");
      }
      return false;
      });
     });