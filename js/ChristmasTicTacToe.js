$(document).ready(function() {
    
    $("#reset").click(function() {
        $("#message").text("Player 1...");
        $("#message").css("background-color", "transparent");
        $(".r").removeClass("oh");
        $(".r").removeClass("ex");
        turn=1;
        
        // Reset Colors
        $(".sq1").css("background-color", "white").css("opacity",".8");
        $(".sq2").css("background-color", "white").css("opacity",".8");
        $(".sq3").css("background-color", "white").css("opacity",".8");
        $(".sq4").css("background-color", "white").css("opacity",".8");
        $(".sq5").css("background-color", "white").css("opacity",".8");
        $(".sq6").css("background-color", "white").css("opacity",".8");
        $(".sq7").css("background-color", "white").css("opacity",".8");
        $(".sq8").css("background-color", "white").css("opacity",".8");
        $(".sq9").css("background-color", "white").css("opacity",".8");
    });
    
    var turn = 1;
    
    $("button").click(function() {
        if(turn == 1) {
            $("#message").text("Player 2 Candy Canes");
        
        $(this).addClass("oh");
            turn = 2;		
        }
        else {
            $("#message").text("Player 1 Wreaths");
            $(this).addClass("ex");
            turn = 1;
        }
    });
    
    $("button").click(function() {
        if (check("ex")) {
            $("#message").text("Game Over, Candy Canes wins!");
        }
        else if (check("oh")){
            $("#message").text("Game Over, Wreaths wins!");
        }
        else if($(this).hasClass("ex") || $(this).hasClass("oh"))
        {	
            $(this).css("background-color", "#3482ff");
            setTimeout(() => {
                $(this).css("background-color", "white");
            }, 800);	
        }
    
    });
    
    function check(symbol) {
        if ($(".sq1").hasClass(symbol) &&
            $(".sq2").hasClass(symbol) &&
            $(".sq3").hasClass(symbol))
        {
            $(".sq1").css("background-color", "#708090");
            $(".sq2").css("background-color", "#708090");
            $(".sq3").css("background-color", "#708090");
            return true;
        } else if ($(".sq4").hasClass(symbol)
                && $(".sq5").hasClass(symbol)
                && $(".sq6").hasClass(symbol))
        {
            $(".sq4").css("background-color", "#708090");
            $(".sq5").css("background-color", "#708090");
            $(".sq6").css("background-color", "#708090");
            return true;
        } else if ($(".sq7").hasClass(symbol)
                && $(".sq8").hasClass(symbol)
                && $(".sq9").hasClass(symbol))
        {
            $(".sq7").css("background-color", "#708090");
            $(".sq8").css("background-color", "#708090");
            $(".sq9").css("background-color", "#708090");
            return true;
        } else if ($(".sq1").hasClass(symbol)
                && $(".sq4").hasClass(symbol)
                && $(".sq7").hasClass(symbol))
        {
            $(".sq1").css("background-color", "#708090");
            $(".sq4").css("background-color", "#708090");
            $(".sq7").css("background-color", "#708090");
            return true;
        } else if ($(".sq2").hasClass(symbol)
                && $(".sq5").hasClass(symbol)
                && $(".sq8").hasClass(symbol))
        {
            $(".sq2").css("background-color", "#708090");
            $(".sq5").css("background-color", "#708090");
            $(".sq8").css("background-color", "#708090");
            return true;
        } else if ($(".sq3").hasClass(symbol)
                && $(".sq6").hasClass(symbol)
                && $(".sq9").hasClass(symbol))
        {
            $(".sq3").css("background-color", "#708090");
            $(".sq6").css("background-color", "#708090");
            $(".sq9").css("background-color", "#708090");
            return true;
        } else if ($(".sq1").hasClass(symbol)
                && $(".sq5").hasClass(symbol)
                && $(".sq9").hasClass(symbol))
        {
            $(".sq1").css("background-color", "#708090");
            $(".sq5").css("background-color", "#708090");
            $(".sq9").css("background-color", "#708090");
            return true;
        } else if ($(".sq3").hasClass(symbol)
                && $(".sq5").hasClass(symbol)
                && $(".sq7").hasClass(symbol))
        {
            $(".sq3").css("background-color", "#708090");
            $(".sq5").css("background-color", "#708090");
            $(".sq7").css("background-color", "#708090");
            return true;
        } else {
            return false;
        }
    }
        document.getElementById("readme").addEventListener("click",function(){              window.open("ReadMe.txt","readme","height=600","width=600","menubar=1","scrollbars=1","status=1","toolbar=1","titlebar=1");
        })
        
    });