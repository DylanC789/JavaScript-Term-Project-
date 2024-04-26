    document.getElementById("readme").addEventListener("click",function(){ window.open("ReadMe.txt","readme","height=600","width=600","menubar=1","scrollbars=1","status=1","toolbar=1","titlebar=1");
    })
    document.getElementById("home").addEventListener("mouseover",function(){
        document.getElementById("message").innerHTML="<p>Christmas-Themed Games</p><p>Click to select a game or hover over to see a description of the game.</p>";
    })
    document.getElementById("Tree").addEventListener("mouseover",function(){
        document.getElementById("message").innerHTML="<em>Christmas Tree Decorating</em> Arrange Ornaments and Presents in order to decorate an Evergreen Tree, While Santa can be seen flying off in the distance.";
    }) 
    document.getElementById("TicTacToe").addEventListener("mouseover",function(){
        document.getElementById("message").innerHTML="<em>Christmas TicTacToe </em> Play against another player to connect either 3 Wreaths or 3 Candy Canes in order to win!";
    })    
    document.getElementById("Christmaspuz").addEventListener("mouseover",function(){
        document.getElementById("message").innerHTML="<em>A SnowBall's Chance </em> Try to survive as long as you can, avoid the flames.";
    })
    document.getElementById("readme").addEventListener("mouseover",function(){
        document.getElementById("message").innerHTML="Includes game descriptions, file structure, contact information and copyright information.";
    }) 