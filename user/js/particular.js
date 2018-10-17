window.onload =function(){

	var box =document.getElementById("box");
//	var topbar04_left = document.getElementsByClassName("topbar04_left");
	var topbar04_left= document.getElementById("topbar04_left");
	var btn1 =document.getElementById("btn1");
	var btn2 =document.getElementById("btn2");				
	var oimg = document.getElementsByClassName("img_lunbo")
	var oa= document.getElementsByClassName("topbar04_left_a");
	var topbar04_left_div= document.getElementsByClassName("topbar04_left_div");
	var i = 0 ;
	
	oa[0].style.background = "#616161" ;
	var timer = setInterval(lunbo,3000);
	function lunbo(){
		i++;
		fr();
		if(i>=oimg.length){
			i=0;
		}
		oimg[i].style.display = "block" ;
		oa[i].style.background = "#616161" ;
	}
	function fr(){
		for (var k = 0; k < oimg.length; k++) {
			oimg[k].style.display = "none";
			oa[k].style.background = "#ccc" ;
		}
	}
	//鼠标移入，停止动画
	topbar04_left.onmouseover = function(){		
		clearInterval(timer);
	}
	//鼠标移出，开启动画
	topbar04_left.onmouseout = function(){
		timer = setInterval(lunbo,3000);
		
	}

	//上一张按钮
	btn1.onclick = function(){
		i--;
		fr();
		if(i<0){
			i=oimg.length-1;
		}
		oimg[i].style.display = "block";
		oa[i].style.background = "#616161" ;
	}
	//下一张按钮
	btn2.onclick = function(){
		i++;
		fr();
		if(i>=oimg.length){
			i=0;
		}
		oimg[i].style.display = "block";
		oa[i].style.background = "#616161" ;
	}
//	//点
//	for(var j=0;j<topbar04_left_div.length;j++){
//		topbar04_left_div[j].index = j ;
//		oa[j].onmouseover = function(){
//			fr();
//			oimg[this.index].style.display = "block";
//			oa[this.index].style.background = "#616161" ;
//			i = this.index;
//		}
//	}

//	选择数量
	var versions_numbe_subtract= document.getElementById("versions_numbe_subtract");
	var versions_num_input =document.getElementById("versions_num_input");
	var versions_numbe_add =document.getElementById("versions_numbe_add");
	
	versions_numbe_subtract.onclick = function() {
				
		versions_num_input.value=versions_num_input.value-1;
		if(versions_num_input.value==0){
			versions_num_input.value=1;
		}
	};
	versions_numbe_add.onclick = function() {	
		versions_num_input.value=versions_num_input.value-0+1;
	};
//选择版本，选择颜色
	var versions_choose01= document.getElementById("versions_choose01");
	var versions_choose02 =document.getElementById("versions_choose02");
	var versions_choose03 =document.getElementById("versions_choose03");
	var versions_choose04 =document.getElementById("versions_choose04");
	
	versions_choose01.onclick = function(){
		versions_choose02.style.borderColor="#CCCCCC";
		versions_choose01.style.borderColor="red";
	}
	versions_choose02.onclick = function(){
		versions_choose01.style.borderColor="#CCCCCC";
		versions_choose02.style.borderColor="red";
	}
	versions_choose03.onclick = function(){
		versions_choose04.style.borderColor="#CCCCCC";
		versions_choose03.style.borderColor="red";
	}
	versions_choose04.onclick = function(){
		versions_choose03.style.borderColor="#CCCCCC";
		versions_choose04.style.borderColor="red";
	}
//表头顶部悬浮
	var topbar02 = document.getElementById("topbar02");
	
	//顶部悬浮事件
	var top = 0 ;
	window.onscroll = function(){
		 top = document.documentElement.scrollTop ||document.body.scrollTop;
		console.log(top);
		if(top>=108){
			topbar02.style.position ="fixed";
		}else{
			topbar02.style.position ="relative";
			topbar02.style.top="0";
		}
	}





}