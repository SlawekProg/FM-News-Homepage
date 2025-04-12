$(".logW").css("grid-area","1/1/2/2");
$(".home").css("grid-area","1/8/2/9");
$(".new").css("grid-area","1/9/2/10");
$(".popular").css("grid-area","1/10/2/11");
$(".trending").css("grid-area","1/11/2/12");
$(".categories").css("grid-area","1/12/2/13");

$(document).ready(function() {
    $(".list  a").hover(
      function() {
        $(this).css("color", "hsl(35, 77%, 62%)");
      },
      function() {
        $(this).css("color", "hsl(36, 100%, 99%)");
      }
    );

    $(".row1  a").hover(
        function() {
          $(this).css("color", "hsl(35, 77%, 62%)");
        },
        function() {
          $(this).css("color", "hsl(236, 13%, 42%)");
        }
      );

      $(".row3 a").hover(
        function() {
          $(this).css("color", "hsl(5, 85%, 63%)");
        },
        function() {
          $(this).css("color", "black");
        }
      );

      $(".mobile-nav a").hover(
        function() {
          $(this).css("color", "hsl(35, 77%, 62%)");
        },
        function() {
          $(this).css("color", "black");
        }
      );

      $("button").hover(
        function() {
          $(this).css("background-color", " hsl(240, 100%, 5%)");
          $(this).css("color", "white");
        },
        function() {
          $(this).css("color", " hsl(240, 100%, 5%)");
          $(this).css("background-color", "hsl(5, 85%, 63%)");
        }
      );

      $(".menu").click(function() {
        $(".mobile-nav").addClass("active");
        $(".exitMenu").show();
      });
    
      $(".exitMenu").click(function() {
        $(".mobile-nav").removeClass("active");
        $(this).hide();
      });
  });
