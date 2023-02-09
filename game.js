var gamePattern=[]
var buttoncolor=["red","blue","green","yellow"]
var userClickedPattenr=[]

var level=2



function  nextSequence() {
    var randomNumber=Math.floor(Math.random()*4);
    randomchosencolour=buttoncolor[randomNumber]
    gamePattern.push(randomchosencolour)
   // console.log(gamePattern.length+"pat")
   $("#" +randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
        // $("#"+randomchosencolour).addClass("pressed");
        //setTimeout(function(){
            //$("#"+randomchosencolour).removeClass("pressed")
       // },300)
        userClickedPattenr=[]
               
    //setInterval(()=>{
        
       // $("#"+randomchosencolour).fadeIn();
      // $("#"+randomchosencolour).fadeOut();
 //  }, );
   
    playSound(randomchosencolour)
    
}
function checkAnswer(currentLevel) {
    
   // for (let index = 0; index < gamePattern.length; index++) {
    //var indexofgamepattren=gamePattern.indexOf(currentLevel)
  // var indexofuserClickedPattenr=userClickedPattenr.indexOf(currentLevel)
       // function seya() {
            
         console.log( gamePattern[currentLevel]) 
          //console.log(indexofuserClickedPattenr) 
           // var indexofgamepattren=gamePattern.indexOf(randomchosencolour)
           
             if ( gamePattern[currentLevel]===userClickedPattenr[currentLevel] ) {
                  if (gamePattern.length===userClickedPattenr.length) {
                    $("h1").text("level "+level)
                   // $("h1").css("color",userChosenColour)
                nextSequence() 
                level++ 
                  }
              
                
             }else {
                playSound("wrong")
                $("h1").text("GAME OVER ,press any key to start")
                $("h1").css("color",gamePattern[currentLevel])
                $("body").css("background-color","gray")
               // $("#" +gamePattern[currentLevel]).text("I'M here")
               // setTimeout(function(){
                $("#" + gamePattern[currentLevel]).fadeIn(100).fadeOut(100).fadeIn(100);
              //  },2000)
               
                gamePattern=[]
                keypress=[]
                level=2
             }
           
      // }
       //seya()
       
    }  
    
//}

       


//if (keypress.length===1){

    $(".btn").click(function() {
        userChosenColour= this.id 
        userClickedPattenr.push(userChosenColour)
       // console.log(userClickedPattenr.length-1)
        //console.log(userClickedPattenr.length+"user")
       // playSound(userChosenColour)
       // indexnumber=userClickedPattenr.indexOf(userChosenColour)
       
            setTimeout(function() {
    
                checkAnswer(userClickedPattenr.length-1)
            },1000)
       
       
        
    })
    
function playSound(name) { 
    var red=new Audio('sounds/'+name+'.mp3')
    red.play()

}
function animatepressed() {
    $(".btn").click(function() {
       var seya= this.id 
        
         $("#"+seya).addClass("pressed");
        setTimeout(function(){
            $("#"+seya).removeClass("pressed")
        },300)
      })

}
animatepressed()
//}
   
    
    

    


 
var keypress=[]
$(document).keypress(function(event){
    keypress.push(event)
     if (keypress.length===1){
        nextSequence()
        $("h1").text("level 1")
        $("body").css("background-color","#011F3F")
       
     }
})


