const readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " Lets Play a tech Quiz \n");

var questions=[{
  question:"Hexa Decimal has base as? \n A.16 \n B.10 \n C.12 \n D.2\n",
  answer:"a"
},
{
  question:"1 GB is equivalent to ______ KB? \n A.1024 \n B.1028 \n C.512 \n D.2014\n ",
  answer:"a"
},
{
  question:"The base of Octal number System is? \n A.10 \n B.12 \n C.8 \n D.2\n ",
  answer:"c"
},
{
  question:"A computer language that is written in binary codes only is _____ ? \n A.machine language \n B.C \n C.C# \n D.Pascal\n " ,
  answer: "a"
},
{
  question:"The octal equivalent of 1100101.001010 is ______? \n A.10 \n B.12 \n C.8 \n D.2\n " ,
  answer: "b"
}]

var score=0;
var Highscore=[{
  name:"Yashoda",
  score:3
},
{
  name:"Arpit",
  score:2
}];
function play(question,answer){
  var answerone = readlineSync.question(question);
  if(answerone.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score++;
  }
  else{
    console.log("wrong!");
  }
  console.log("Current score: "+score);
  console.log("--------------")
}
var a = 'b';
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  
  if(a != 'e'){
  play(currentQuestion.question,currentQuestion.answer);
   
    // play(currentQuestion.question,currentQuestion.answer);
    if(i<questions.length-1)
      a = readlineSync.question("Press e to exit, any other key to continue.... ");
    else
      console.log("Thanks for playing....")
  }
  else{
    console.log("Thanks for playing....")
    break;
  }
}

console.log("YAY! You SCORED: "+ score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for(var j=0;j<Highscore.length;j++){
  console.log(Highscore[j].name + " : " + Highscore[j].score);
}

