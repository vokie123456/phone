<?php
 header("content-type:text/html;charset=utf-8");

 $jsonStr=file_get_contents('data/pic.json');

$totalArr = json_decode($jsonStr);

	$randomkeysArr = array_rand($totalArr,4);
	$resultArr =  array( );

	// 循环 从 总数组中 根据 随机的 下标 获取 元素 并 添加到 $resultArr中
	// php中 获取 数组 长度的 函数
	for ($i=0; $i <count($randomkeysArr) ; $i++) { 
		// 随机的下标
		$randomKey = $randomkeysArr[$i];
		// 使用随机的下标 从 数组中 获取 一个 元素
		$randomObj  =$totalArr[$randomKey];
		// 添加到 $resultArr
		array_push($resultArr, $randomObj);
	}


	// 包装为 关系型数组 
	$keyValueArr = array(
		'items' =>$resultArr
		 );

	echo json_encode($keyValueArr);
	// echo $keyValueArr;
	// print_r($keyValueArr);

 ?>