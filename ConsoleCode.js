var input=$('.link');
var output=[];
for (var i = 0; i < input.length; i++){
    var len=input[i].length;
    output.push(input[i].getAttribute('href').slice(1,len));
}
