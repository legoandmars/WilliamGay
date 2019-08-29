console.log("william gay");
setInterval(function(){ 
var imgs = document.getElementsByTagName("img");
	for(var i=0, l=imgs.length;i<l;i++){
		//if an image is not william gay, this is unacceptable. change it.
		if(imgs[i].src != chrome.runtime.getURL("images/williamGayFull.png")){
			console.log('william just got 1% gayer');
			imgs[i].src = chrome.runtime.getURL("images/williamGayFull.png");
		}
	}
}, 1000);

