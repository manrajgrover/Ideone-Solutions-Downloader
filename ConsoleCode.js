function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


var input=$('.link');
var output=[];
for (var i = 0; i < input.length; i++){
    var len=input[i].length;
    output.push(input[i].getAttribute('href').slice(1,len));
}

for(var id = 0; id < output.length; id++){
	window.open("http://ideone.com/plain/" + output[id]);
	sleep(5);
}
