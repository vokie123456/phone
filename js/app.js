$(window).ready(function(){
	$('.ajaxbtn').on('click',function(){
		$.ajax({
			url:'appajax.php',
			type:'post',
			dataType:'json',
			success:function(data){
				console.log(data);
				var str=template('template',data);
				$('.app-box').append(str);
			}
		});
	})
});