
var ul=document.getElementById("ul");
var liArr=ul.getElementsByTagName("li");
var right=document.getElementById("right");
var contentArr=right.getElementsByTagName("div");

// for(i=0;i<liArr.length;i++){
// 	liArr[i].index=i;
// 	liArr[i].onclick=function(){
//        for(i=0;i<liArr.length;i++){
//        	 liArr[i].className="";
//        	 contentArr[i].style.display="none";
       
//        }
//        this.className="active";
       
// 	}
// }
	// for(i=0;i<liArr.length;i++){
	// 			liArr[i].index=i;

	// 			liArr[i].onmouseover=function(){
					
	// 				for(i=0;i<liArr.length;i++){
 //                        liArr[i].className="";
	// 					contentArr[i].style.display="none";
	// 				}
					
	// 				this.className="active";
	// 			}
	// 		}

	for(i=0;i<liArr.length;i++){
  			liArr[i].index=i;
  			liArr[i].onclick=function(){
  				for(i=0;i<liArr.length;i++){
  					liArr[i].className="";
  					contentArr[i].style.display="none";
  				   
  				}
  				this.className="active";
  				contentArr[this.index].style.display="block";
  				
  				
  				
  			}
  		}