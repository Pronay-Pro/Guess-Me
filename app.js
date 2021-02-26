var y = Math.floor(Math.random()*10+1);
var guess = 1;
document.getElementById("submitGuess").onclick= function(){
    var x = document.getElementById("guessField").value;
    if(x==y){
        alert("Congratulation Dude!!! You Guess IT RIGHT IN " + guess + "Guess");
    }
    else if(x>y){
        guess++;
        alert("OOPS DUDE !! You are soo close")
    }else{
        guess++;
        alert("OOPS!! Try Again Dude")
    }
    document.getElementById("guessField").value =""
}