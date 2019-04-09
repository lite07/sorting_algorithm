var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
canvas.id = "cvs";
canvas.style.border = "1px solid black";


var optInput = document.createElement("select");
var option1 = document.createElement("option");
option1.innerHTML = "Bubble Sort";
option1.value = '1';
var option2 = document.createElement("option");
option2.innerHTML = "Selection Sort";
option2.value = '2';
var option3 = document.createElement("option");
option3.innerHTML = "Insertion Sort";
option3.value = '3';

optInput.appendChild(option1);
optInput.appendChild(option2);
optInput.appendChild(option3);


var button = document.createElement("button");
button.innerHTML = "Start Sorting";
button.onclick = function(){
  switch(parseInt(optInput.options[optInput.selectedIndex].value)){
    case 1: bubbleSort();
      break;
    case 2: selectionSort();
      break;
    case 3: insertionShort();
      break;
    default:
  }
}
document.body.appendChild(canvas);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(optInput);
document.body.appendChild(button);
