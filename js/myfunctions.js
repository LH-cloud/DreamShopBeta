var x,y;
y=document.getElementById("picContainer");
var sup=document.getElementById("picContainer").style.backgroundImage.url;
function upDate(prePic){
	x=prePic.src;
	console.log(x);
	document.getElementById("picContainer").style.backgroundImage='url('+x+')';
	document.getElementById("imgtext").innerHTML="";
	document.getElementById("picContainer").style.backgroundSize="50%";
	document.getElementById("picContainer").style.backgroundPosition="center";

}
function unDo(prePic){
	document.getElementById("picContainer").style.backgroundImage='url("imgs/dreamy.jpg")';
	document.getElementById("imgtext").innerHTML="sweip to see  our latest designs!";
		document.getElementById("picContainer").style.backgroundSize="100%";
}
