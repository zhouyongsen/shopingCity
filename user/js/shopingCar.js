window.onload = function() {
	var button01 = document.getElementById("button01");
	var myCar = document.getElementById("myCar");
	//生成商品信息下拉列表框
	button01.onclick = function() {
			var oDiv = document.createElement("div");
			oDiv.className = "carBox";
			oDiv.innerHTML += '<div class="carBox_01"><i class="carBox_01_i"></i>选择</div>';
			oDiv.innerHTML += '<div class="carBox_02"><img src="img/小米8 屏幕指纹版_01.png"/><span id="" class="carBox_02_name">小米8 屏幕指纹版 8GB内存 暮光金 128GB小米8 屏幕指纹版 8GB内 8</span></div>';
			oDiv.innerHTML += '<div class="carBox_03" name=""><span id="" class="carBox_price">3599</span>元</div>';
			oDiv.innerHTML += '<div class="carBox_04"><div class="carBox_04_subtract" id="carBox_04_subtract">-</div><div class="carBox_04_nums"><input type="text" name="" class="carBox_04_num" id="carBox_04_num" value="1" /></div><div class="carBox_04_add" id="carBox_04_add">+</div></div>';
			oDiv.innerHTML += '<div class="carBox_05">3599</div>';
			oDiv.innerHTML += '<div class="carBox_06"><div class="carBox_06_operation">×</div></div>';

			myCar.appendChild(oDiv);
			var delBtn = oDiv.lastChild.getElementsByTagName("div")[0];
			delBtn.onclick = function() {
					myCar.removeChild(oDiv);
				}
				//	数量
			var carBox_04_subtract = getClass(myCar, "carBox_04_subtract");
			var carBox_04_num = getClass(myCar, "carBox_04_num");
			var carBox_04_add = getClass(myCar, "carBox_04_add");

			var carBox_price = getClass(myCar, "carBox_price"); //获取价格标签
			var carBox_05 = getClass(myCar, "carBox_05"); //获取小计标签
			//商品数据减1
			for (var i = 0; i < carBox_04_subtract.length; i++) {
				carBox_04_subtract[i].index = i;

				carBox_04_subtract[i].onclick = function() {
					carBox_04_num[this.index].value = carBox_04_num[this.index].value - 1;

					if (carBox_04_num[this.index].value == 0) {
						carBox_04_num[this.index].value = 1;
					}
					carBox_05[this.index].innerHTML = carBox_04_num[this.index].value * carBox_price[this.index].innerHTML;
				}

			}

			//商品数量加1
			for (var i = 0; i < carBox_04_add.length; i++) {
				carBox_04_add[i].index = i;

				carBox_04_add[i].onclick = function() {
					carBox_04_num[this.index].value = carBox_04_num[this.index].value - 0 + 1;
					if (carBox_04_num[this.index].value == 0) {
						carBox_04_num[this.index].value = 1;
					}
					carBox_05[this.index].innerHTML = carBox_04_num[this.index].value * carBox_price[this.index].innerHTML;
				}

			}
			//			//计算小计
			//			var carBox_price = getClass(myCar,"carBox_price");//获取价格标签
			//			var carBox_05 = getClass(myCar,"carBox_05");//获取小计标签
			//			
			//			for(var i = 0; i < carBox_price.length; i++){
			//				carBox_price[i].index = i;
			//				carBox_05[this.index].innerHTML = carBox_04_num[this.index].value*carBox_price[this.index].innerHTML;
			//			}
			//选择商品结算购物
			var carBox_01_i = getClass(myCar, "carBox_01_i");


			for (var i = 0; i < carBox_01_i.length; i++) {
				carBox_01_i[i].index = i;
				var b = 0;
				carBox_01_i[i].onclick = function() {
					if (b == 0) {
						carBox_01_i[this.index].style.background = "#ff6700";
						carBox_01_i[this.index].innerHTML = "√";
						carBox_01_i[this.index].style.color = "white";
						b = 1;

					} else if (b == 1) {
						carBox_01_i[this.index].style.background = "white";
						carBox_01_i[this.index].innerHTML = "";
						b = 0;
					}
				}
			}

		}
		//全选商品
	var carBox_01_i = getClass(myCar, "carBox_01_i");
	//var carBox_01_i = document.getElementsByClassName("carBox_01_i");
	var myCar_top_all = document.getElementById("myCar_top_all");
	var b = 0;
	myCar_top_all.onclick = function() {
			var carBox_01_i = getClass(myCar, "carBox_01_i");
			var c = carBox_01_i.length;

			if (b == 0) {
				myCar_top_all.style.background = "#ff6700";
				myCar_top_all.innerHTML = "√";
				myCar_top_all.style.color = "white";

				for (var i = 0; i < c; i++) {
					carBox_01_i[i].style.background = "#ff6700";
					carBox_01_i[i].innerHTML = "√";
					carBox_01_i[i].style.color = "white";
				}
				b = 1;
			} else if (b == 1) {
				myCar_top_all.style.background = "white";
				myCar_top_all.innerHTML = "";

				for (var i = 0; i < c; i++) {
					carBox_01_i[i].style.background = "white";
					carBox_01_i[i].innerHTML = "";
				}
				b = 0;
			}
		}
		//获取myCar容器内的所有classname名叫tagname的标签，其中myCar名自己定义选择，tagname名自己定义选择
	function getClass(myCar, tagname) {
		var aTag = myCar.getElementsByTagName("*");
		var aBox = [];
		for (var i = 0; i < aTag.length; i++) {
			if (aTag[i].className == tagname) {
				aBox.push(aTag[i]);
			}
		}
		return aBox
	}
	//顶部悬浮事件和底部悬浮事件
	var top = 0;
	var myCar_top = document.getElementById("myCar_top");
	var bottom = 0;
	var carBottom_di = document.getElementById("carBottom_di");
	window.onscroll = function() {
		top = document.documentElement.scrollTop || document.body.scrollTop;
		bottom = document.documentElement.scrollTop || document.body.scrollTop;

		if (top >= 100) {
			myCar_top.style.position = "fixed";
		} else {
			myCar_top.style.position = "relative";
			myCar_top.style.top = "0";
		}
		if (bottom >= 120) {
			carBottom_di.style.position = "fixed";
		} else {
			carBottom_di.style.position = "relative";
			carBottom_di.style.bottom = "0";
		}
	}


}