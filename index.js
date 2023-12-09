var orden = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var cont = 0;

console.log(orden);
console.log("Estamos al principio  ");

$(".btn").click(function(){
    if(orden[cont] == $(this).attr("id")){
        var audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
        audio.play();
        $(this).fadeIn(100).fadeOut(100).fadeIn(100);
        cont++;
        if(orden.length == cont){
            cont = 0;
        setTimeout(nextSequence, 1000);
        setTimeout(recorrerOrden, 1000);
       };
    }else{
        var audio = new Audio("sounds/wrong.mp3");
        //poner clase game-over al body 
        $("body").addClass("game-over");
        console.log("game over")
        audio.play();
        orden = [];
        cont = 0;

    };

    
});

function nextSequence(){
    
    var randomNumber = Math.floor(Math.random()*4);
    orden.push(buttonColors[randomNumber]);
    console.log("ESTAMOS EN NEXT SECUENCE " + orden);
   
}

function recorrerOrden() {
   
    console.log(orden);
    for (var i = 0; i < orden.length; i++) {
        reproduceConRetraso(i);
    }
}

function reproduceConRetraso(index) {
    setTimeout(function () {
        var audio = new Audio("sounds/" + orden[index] + ".mp3");
        audio.play();
        $("#" + orden[index]).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 1000 * index);
}

$(document).click(function()
{

    if($("body").hasClass("game-over")){
        setTimeout(function(){
        $("body").removeClass("game-over")},5000);
        return;
    };
    
    if(orden.length == cont){
        console.log("Estamos en el click");
        nextSequence();
        recorrerOrden();
    };
    
});




