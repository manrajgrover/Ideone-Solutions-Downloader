var list=$('ul[class="dropdown-menu "]')[0].children.length;
var download=function(){
	if(list>0){
		list--;
		var input=$('.link');
		for(var i=0;i<input.length;i++){
			var len=input[i].length;
			var sliced=input[i].getAttribute('href').slice(1,len);
			window.open("http://ideone.com/plain/"+sliced);
			setTimeout(function(){console.log("Testing: "+i);},1000);
		}
		$('.icon-angle-right').click();
	}
	else{
		clearInterval(download);
	}
};
setInterval(download,10000);