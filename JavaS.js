alert("hello");
var a =prompt("Quel est ton parfum de glace prefere?")
let parfumGlace = 'chocolat';
if (a === 'chocolat') {
alert("J'adore la glace au chocolat !");
} else {
    alert("Ooooh, mais j'aurais préfére au chocolat.")}
    
    $("#bobo").click(function(){ $('#modi').css("fontWeight", "bold");
});
 $("#coco").click(function(){ var a=prompt("what's your favourite color?"); 
$("#modi").css("color",a) ;                                }) ; 

 $("#toto").click(function(){ var n=prompt("Write something !");
$("#modi").html(n);   });

/*
text disappear
*/
$("#dodo").click( function(){var v=confirm("Are you sure you want to delete");
if(v==true){ $("#modi").css("display","none");
             alert("Deleted");}
else { 
       alert("Canceled");
     }
});

$("#pho").click(function(){$("#bruh").css("display","none");})

texte= new Array();
    texte[0] = "The text is your choice!";
    texte[1] = "The photo is your choice!";
    texte[2] = "The color is your choice!";
    texte[3] = "Everything is your choice!";
    
    nb=-1;
    function change(){ 
     if(nb==texte.length-1) {nb=0}
     else{nb++}
  
    $("#move").html(texte[nb]);
 } 
 
   setInterval("change()",1500);