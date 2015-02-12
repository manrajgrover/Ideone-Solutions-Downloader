var input=document.getElementsByClassName('link');
for (var i = 0; i < input.length; i++){
	var len=input[i].length;
	var sliced=input[i].getAttribute('href').slice(1,len);
	window.open("http://ideone.com/plain/"+sliced);
}
