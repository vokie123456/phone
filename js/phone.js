window.onload=function(){
	var bigImg=document.querySelector(".img>img");
	var smallImg=document.querySelectorAll(".img-item>img");
	var lis=document.querySelectorAll(".cur");
  var dl=document.querySelectorAll(".hover-con");

	for(var i=0;i<smallImg.length;i++){
		smallImg[i].onmouseover=function(){
			bigImg.src=this.src;
		
		}
	}

  for(var i=0;i<lis.length;i++){
  lis[i].index=i;
  	lis[i].onmouseover=function(){
       // dl[i].style.display="block";
       for(var j=0;j<lis.length;j++){
          dl[j].style.display="none";
       }
       dl[this.index].style.display="block";
  	}
  	
  }
}