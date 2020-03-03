/* Javascript Document */

document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".2";
});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px";
    document.getElementById("box").innerHTML="";
});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").innerHTML=Date();
});

document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("box").style.border = "2px solid black";
});