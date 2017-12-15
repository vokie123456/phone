<?php
 header("content-type:text/html;charset=utf-8");

 $jsonStr=file_get_contents('data/phone.json');

$totalArr = json_decode($jsonStr);


 $sex=$_POST['sex'];
 $money=$_POST['money'];
 $people=$_POST['people'];

 $moneyArr= explode("-", $money);


$resultArr=array();
for($i=0;$i<count($totalArr);$i++){
 if($sex==$totalArr[$i]->sex){
 		if($people==$totalArr[$i]->people){
            if($moneyArr[0]<$totalArr[$i]->money){
            	    if($moneyArr[1]>$totalArr[$i]->money){

            	array_push($resultArr,$totalArr[$i]);
            	}
            }
           
        }
  }
}
$keyValueArr = array(
		'items' =>$resultArr
 );

	echo json_encode($keyValueArr);
?>

