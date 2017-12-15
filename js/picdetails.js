window.onload=function(){
  var imgArr=document.querySelectorAll(".pic>img");
  var itemArr=document.querySelectorAll(".item");
  var btn1=document.querySelector(".btn1");
  var btn2=document.querySelector(".btn2");
 var index=0;
  btn1.onclick=function(){
    for(var i=0;i<imgArr.length;i++){
      imgArr[i].index=i;
      imgArr[i].style.display="none";
      itemArr[i].style.display="none";
    }
   index--;
   if(index<0){
    index=3;
   }

   imgArr[index].style.display="block";
    itemArr[index].style.display="block";
  };

    btn2.onclick=function(){
    for(var i=0;i<imgArr.length;i++){
      imgArr[i].index=i;
      imgArr[i].style.display="none";
 itemArr[i].style.display="none";
    }
   index++;
   if(index>3){
    index=0;
   }

   imgArr[index].style.display="block";
       itemArr[index].style.display="block";
  }
};
