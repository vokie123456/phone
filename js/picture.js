$(window).ready(function(){
	var imglis=document.querySelectorAll(".img>a");
	var leftspan=document.querySelector(".leftspan");
	var rightspan=document.querySelector(".rightspan");
	var lis=document.querySelectorAll(".numul>li");
	var index=0;
	var box=document.querySelector(".content-left");
	leftspan.onclick=function(){
		for(var j=0;j<imglis.length;j++){
		
			imglis[j].style.opacity="0";
			lis[j].className="";
		}
		index--;
		if(index<0){
			index=2;
		}
		
		imglis[index].style.opacity=1;
		lis[index].className="liactive";
	}
	rightspan.onclick=function(){
		for(var j=0;j<imglis.length;j++){
		
			imglis[j].style.opacity="0";
			lis[j].className="";
		}
		index++;
	
		if(index>2){
			index=0;
		}
		imglis[index].style.opacity=1;
		lis[index].className="liactive";
	};
	show();
	function show(){
		timer=setInterval(function(){
	
		for(var j=0;j<imglis.length;j++){
		
			imglis[j].style.opacity="0";
			lis[j].className="";
		}
		index++;
		if(index>2){
			index=0;
		}
		imglis[index].style.opacity=1;
		lis[index].className="liactive";
	}, 3000);
	}
	
box.onmouseover=function(){
	clearInterval(timer);
}
box.onmouseout=function(){
   show()
}
	$('.ajaxbtn').on('click',function(){
		$.ajax({
			url:'picajax.php',
			type:'post',
			dataType:'json',
			success:function(data){
				console.log(data);
				var str=template('template',data);
				$('.picture-c').append(str);
			}
		});
	})
});