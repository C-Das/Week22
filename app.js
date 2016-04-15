$(document).ready(function(){

  var name = getUserName();

  var yourInitialStrength = Math.floor((Math.random() * 10) + 1);
  var enemyInitiaStrength = Math.floor((Math.random() * 10) + 1);


  console.log("Your Initial Strength :"+yourInitialStrength);
  console.log("Enemy's Initial Strength :"+enemyInitiaStrength);

  while(name == ""){
    // debugger;
    $("#errorMessage").text("Name is not valid") ;
    var name = getUserName();
  }
    $("#errorMessage").text("");
    $("#gamePlayMessage").text("Welcome " +name+ " to the game");

  while (yourInitialStrength != 0 || enemyInitiaStrength != 0){

    if(yourInitialStrength === 0){
      console.log("You loose the game");
      break;
    }else if (enemyInitiaStrength === 0) {
      console.log("You win the game");
      break;
    }
    var yourAttackStrength = Math.floor((Math.random() * 10) + 1);
    var enemyAttachStrength = Math.floor((Math.random() * 10) + 1);

  console.log("your attack strength is:"+yourAttackStrength);
  console.log("Enemy's  attack strength is:"+enemyAttachStrength);

    if (yourAttackStrength > enemyAttachStrength){
      --enemyInitiaStrength;
            console.log("You win this round");
            console.log("Enemy strength now :"+enemyInitiaStrength);
    } else {
      --yourInitialStrength;
            console.log("You loose this round");
            console.log("Your strength now :"+yourInitialStrength);
    }
  }

  function getUserName(){
    return prompt("What is your name?");
  }

})
