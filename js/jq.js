$(window).ready(function(){
	var sex='';
	var money='';
	var people='';
	var span7=document.querySelectorAll('.span7');
	$('.span1').on('click',function(){
		$(this).css('background','#3EA7CB').siblings('span')
		.css('background','');
		sex='男';
	});
	$('.span2').on('click',function(){
		$(this).css('background','pink').siblings('span')
		.css('background','');
		sex='女';
	});
	$('.span3').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		people='学生';
	});
	$('.span4').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		people='科技';
	});
	$('.span5').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		people='游戏';
	});
	$('.span6').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		people='工作';
	});
	$('.span7').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='0-500';
	});
	$('.money2').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='500-1000';
	
	});
	$('.span9').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='1000-1500';
	});
	$('.span10').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='1500-2000';
	});
	$('.span11').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='2500-3000';
	});
	$('.span12').on('click',function(){
		$(this).css('background','#F9B957').siblings('span')
		.css('background','');
		money='3000-100000';
	});
	
	
	 $('.begin').on('click',function(){
        $.ajax({
        	url:'https://guthubsun.github.io/phone/shai.php',
        	data:{'sex':sex,'money':money,'people':people},
            dataType:'jsonP',
            type:'get',
            success:function(data){
            	
            var container=document.querySelector('.container');
            	var resultStr = template('template', data);
			 $(".container").append(resultStr);
			 $(".container > section").css("display","none");
			 window.scrollTo(0,0);

				// 添加到界面上
				
				
            }
        })
    });
    });

