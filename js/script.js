var button1 = document.getElementsByClassName('number');
for(var i=0;i<button1.length;i++){
  button1[i].addEventListener("click",clickButton);
}

var button2 = document.getElementsByClassName('forButton');
for(var i=0;i<button2.length;i++){
  button2[i].addEventListener("click",clickAll);
}
