var num;
var operator;
function clickButton(e){
  text.value += e.target.innerText;
  console.log(num);
}

function clickAll(e){
  num = document.getElementById('inp').value;
  document.getElementById('inp').value = "";
  operator = e.target.innerText;
}


var button1 = document.getElementsByClassName('number');
for(var i = 0; i < button1.length; i++){
  button1[i].addEventListener("click",clickButton);
}

var button2 = document.getElementsByClassName('forButton');
for(var i = 0; i < button2.length; i++){
  button2[i].addEventListener("click", clickAll);
}
var square = document.getElementById('square');
var cube = document.getElementById('cube');
var root = document.getElementById('root');
var text = document.getElementById('inp');
var buttonEqual = document.getElementById('equal');
var buttonSE = document.getElementById('se');
buttonEqual.addEventListener("click", clickEqual);
buttonSE.addEventListener("click", clickSE);


function clickEqual(e){
  var result;
  var num2 = document.getElementById('inp').value;
  if(operator=="+"){
      result = parseInt(num)+(parseInt(num2));
  }
  if(operator=="-"){
      result = parseInt(num)-(parseInt(num2));
  }
  if(operator=="*"){
      result = parseInt(num)*(parseInt(num2));
  }
  if(operator=="/"){
      result = parseInt(num)/(parseInt(num2));
  }
  if(operator=="x^2"){
    result = parseInt(num)*parseInt(num);
  }
   if(operator=="x^3"){
    result = parseInt(num) * parseInt(num) * parseInt(num);
  }
   if(operator=="x^(1/2)"){
    result = Math.sqrt(parseInt(num));
  }
  document.getElementById('inp').value=result;
}
function clickSE(e){
    document.getElementById('inp').value = "";
}
