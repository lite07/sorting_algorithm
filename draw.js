var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");

function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function colorGaussian(startPos,curPos,n){
  return 255*Math.exp(-Math.abs(curPos-startPos)/6.25);
}

function drawData(data){
  var n = data.length;
  var scale = canvas.width/n;
  for(var i = 0; i <n; i++)
  {
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    var red = colorGaussian(n/3,i,n).toString(10);
    var green = colorGaussian(n/2,i,n).toString(10);
    var blue = colorGaussian(2*n/3,i,n).toString(10);
    var rgb = 'rgb('+red+','+green+','+blue+')';
    ctx.fillStyle = rgb;
    ctx.fillRect(i*scale,canvas.height-data[i],10,data[i]);
    ctx.stroke();
  }
}
