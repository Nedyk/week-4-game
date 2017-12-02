<script>
 
  
$(document).ready(function(){
  var wins = 0;
  var loss = 0;
  var result = 0;

  var random_num = Math.floor((Math.random() * 120) + 19);
  var crystal1 = Math.floor((Math.random() * 12) + 1);
  var crystal2 = Math.floor((Math.random() * 12) + 1);
  var crystal3 = Math.floor((Math.random() * 12) + 1);
  var crystal4 = Math.floor((Math.random() * 12) + 1);
  

  $("#random").html('Random #: ' + random_num);
  $("#wins").text("Wins"); 
  $("#loss").text("Losses");
  $('#result').html('Total points: ' + result);
  

//onclick events 
  $("#pic1").on("click", function(){
     console.log("pic");
      result += crystal1; 
      $('#result').html('Total points: ' + result);   
      winner();
  });


  $("#pic2").on("click", function(){
    console.log("pic2");
      result += crystal2; 
      $('#result').html('Total points: ' + result);

      winner();
  });

  $("#pic3").on("click", function(){
    console.log("pic3");
      result += crystal3; 
      $('#result').html('Total points: ' + result);

      winner();
  });

  $("#pic4").on("click", function(){
    console.log("pic4");
      result += crystal4; 
      $('#result').html('Total points: ' + result);

      winner();
  });


//winning
function winner(){
    if (result === random_num) {
      $("#wins").text("WINNER!!!"); 
      alert("You Won!!")
      wins++;
      $("#wins").text("Wins " + ": " + wins ); 
      
      
    };
    function loser(){
      if (result > random_num) {
        console.log("you lost")
      $("#loss").text("LOSSER!!!"); 
      alert("You Lost!!");
      loss--; 
      $("#loss").text("Losses " + ": " + loss);
     

    }
  }


  }
function reset(){
  var wins = 0;
  var loss = 0;
  var result = 0;
   var random_num = Math.floor((Math.random() * 120) + 19);
   ('#result').html('Total points: ' + result);

}

});


  



</script> 