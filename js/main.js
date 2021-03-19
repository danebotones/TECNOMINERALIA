var myElement = document.getElementById('myImg');
myImgs = [

    'src="materiales/randome/1.png"',
    'src="materiales/randome/2.png"',
    'src="materiales/randome/3.png"',
    'src="materiales/randome/4.png"',
],
myRandomNum = Math.floor(Math.random() * myImgs.length);



function changeImage(myElement, myImgs){
    'use strict';
    setInterval(function(){
myElement.src= myImgs[myRandomNum];

    }, 1000);
 
}

changeImage(myElement, myImgs);