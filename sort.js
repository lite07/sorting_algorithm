var canvas = document.getElementById("cvs");
var interval;

//Bubble Sort
function bubbleSort(){
  clearInterval(interval);
  var data = [];
  for(var i = 0; i < canvas.width/10;i++){
    var newValue = Math.random()*canvas.height;
    data.push(newValue);
  }
  var i = 0;
  var j = 0;
  interval = setInterval(
    function(){
      if(data[j]>data[j+1]){
        var temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;
        clearCanvas();
        drawData(data);
        j++;
        if(j==data.length-i-1){
          j = 0;
          i++;
        }
      }
      else {
        j++;
        if(j==data.length-i-1){
          j = 0;
          i++;
        }
      }
      if(i==data.length-1){
        clearInterval(interval);
      }
    },0)
}

//Selection Sorting
function selectionSort(){
  clearInterval(interval);
  var data = [];
  for(var i = 0; i < canvas.width/10;i++){
    var newValue = Math.random()*canvas.height;
    data.push(newValue);
  }
  var n = data.length;
  var i = 1;
  var j = 0;
  var curMax = data[0];
  var maxInd = 0;
  interval = setInterval(
    function(){
      if(j<=(n-i)){
        if(data[j]>curMax){
          curMax = data[j];
          maxInd = j;
        }
        j++;
      }
      else{
        var temp = data[n-i];
        data[n-i] = curMax;
        data[maxInd] = temp;
        clearCanvas();
        drawData(data);
        i++;
        if(i==n){
          clearInterval(interval);
        }
        curMax = data[0];
        maxInd = 0;
        j = 0;
      }
    },0)
}

//Insertion Short
function insertionShort(){
  clearInterval(interval);
  var data = [];
  for(var i = 0; i < canvas.width/10;i++){
    var newValue = Math.random()*canvas.height;
    data.push(newValue);
  }
  var n = data.length;
  var i = 1;
  var j = 0;
  clearCanvas();
  drawData(data);
  interval = setInterval(function(){
    if(j<i){
      if(data[i]<data[j]){
            data.splice(j,0,data[i]);
            data.splice(i+1,1);
            clearCanvas();
            drawData(data);
            j = -1;
            i++;
            if(i==n){
              clearInterval(interval);
            }
      }
      j++;
    }
    else{
      j = 0;
      i++;
      if(i==n){
        clearInterval(interval);
      }
    }
  },0)
}
