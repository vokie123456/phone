
	var phone_header=document.getElementById("phone_header");
var phlis=phone_header.children;
var pclis=document.querySelectorAll(".phone_content");
var pcbig=document.getElementById("phone_content_big");
var phlis1=pclis[1];

var getTop=document.getElementById("top");

 var timer = null;
            var target = 0; //目标位置
            var leader = 0; //显示区域自身的位置


setInterval(function(){
    pcbig.style.height=phlis1.offsetHeight+"px";
},10);


for(var i=0;i<phlis.length;i++){
	phlis[i].index=i;
	phlis[i].onclick=function(){
        for(var j=0;j<phlis.length;j++){
        	pclis[j].style.top=70+"rem";
        	phlis[j].className="";
        }
    pclis[this.index].style.top=0;
    this.className="active";
	}
}






window.onscroll=function(){
     if(scroll().top>1000){
                    getTop.style.display = "block";
       }else{
                   getTop.style.display = "none";
       }
leader = scroll().top;

     
       };

  getTop.onclick=function(){
        clearInterval(timer);
                timer = setInterval(function () {
                    //获取步长
                    var step = (target-leader)/10;
                    //二次处理步长
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader +step;
                    //显示区域移动
                    window.scrollTo(0,leader);
                    //清除定时器
                    if(leader === 0){
                        clearInterval(timer);
                    }
                },15);



};


function scroll(){
    if(window.pageYOffset !== null){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    else if(document.compatMode==="CSS1Compat"){
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return{
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
    function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },15);
}




