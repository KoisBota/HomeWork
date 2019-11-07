var button1 = document.getElementsByClassName('number');
for(var i = 0; i < button1.length; i++){
  button1[i].addEventListener("click",clickButton);
}

var button2 = document.getElementsByClassName('forButton');
for(var i = 0; i < button2.length; i++){
  button2[i].addEventListener("click", clickAll);
}
var text = document.getElementById('inp');
var buttonEqual = document.getElementById('equal');
var buttonSE = document.getElementById('se');
buttonEqual.addEventListener("click", clickEqual);
buttonSE.addEventListener("click", clickSE);


function clickEqual(e){
  var result;
  var num2 = document.getElementById('inp').value;
}
function clickSE(e){
    text.value = "";
}
