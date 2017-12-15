window.onload=function(){

  var lis=document.querySelectorAll(".cur");
  var dl=document.querySelectorAll(".hover-con");

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
};