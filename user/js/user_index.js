$(function() {
	var input2 = $("#input2");
	var i = $("i").eq(0);
	input2.mouseenter(function() {
		input2.css("background-color", "orange");
		i.css("color", "white");
	})
	i.mouseenter(function() {
		input2.css("background-color", "orange");
		i.css("color", "white");
	})
	input2.mouseout(function() {
		input2.css("background-color", "white");
		i.css("color", "#CCCCCC");
	})
	i.mouseout(function() {
		input2.css("background-color", "white");
		i.css("color", "#CCCCCC");
	})
	
	//头部动画
				$(".header_right_a").eq(0).mouseover(function() {
					$(".user_name_list").eq(0).css("display", "block");
					console.log("1");
				})
				$(".header_right_a").eq(0).mouseout(function() {
					$(".user_name_list").eq(0).css("display", "none");
					console.log("2");
				})
				$(".user_name_list").eq(0).mouseover(function() {
					$(".user_name_list").eq(0).css("display", "block");
					console.log("3");
				})
				$(".user_name_list").eq(0).mouseout(function() {
						$(".user_name_list").eq(0).css("display", "none");
						console.log("4");
					})
	//定义展示框中的动画
	var timer;
	var j = 0;
	$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
	timer = setInterval(fn, 4000);

	function fn() {
		$(".zhanshi_right a").eq(j).animate({
			opacity: 0
		}, 300, function() {
			$(".zhanshi_right a").eq(j + 1).css("opacity", "1");
			$(".zhanshi_right a").eq(j + 1).css("display", "block");
			$(".zhanshi_right a").eq(j).css("display", "none");
			$(".zhanshi_right div").eq(j + 1).css("background-color", "dimgray");
			$(".zhanshi_right div").eq(j).css("background-color", "white");
			j++;
			if (j >= $(".zhanshi_right a").size()) {
				j = 0;
				$(".zhanshi_right a").eq(j).css("opacity", "1");
				$(".zhanshi_right a").eq(j).css("display", "block");
				$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
				$(".zhanshi_right div").eq($(".zhanshi_right a").size() - 1).css("background-color", "white");
			}
		})
	}
	//当鼠标移入动画框时，停止动画
	$(".zhanshi_right").mouseover(function() {
			clearInterval(timer);
		})
		//当鼠标移出动画框时，开启动画
	$(".zhanshi_right").mouseout(function() {
			timer = setInterval(fn, 4000);

		})
		//上一张按钮
	$("#zhanshi_right_span1").click(function() {
			if (j == 0) {
				j = $(".zhanshi_right a").size() - 1;
				$(".zhanshi_right a").eq(j).css("opacity", "1");
				$(".zhanshi_right a").eq(j).css("display", "block");
				$(".zhanshi_right a").eq(0).css("opacity", "0");
				$(".zhanshi_right a").eq(0).css("display", "none");
				$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
				$(".zhanshi_right div").eq(0).css("background-color", "white");
			} else {
				j = j - 1;
				$(".zhanshi_right a").eq(j).css("opacity", "1");
				$(".zhanshi_right a").eq(j).css("display", "block");
				$(".zhanshi_right a").eq(j + 1).css("opacity", "0");
				$(".zhanshi_right a").eq(j + 1).css("display", "none");
				$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
				$(".zhanshi_right div").eq(j + 1).css("background-color", "white");
			}
		})
		//下一张按钮
	$("#zhanshi_right_span2").click(function() {
		if (j == $(".zhanshi_right a").size() - 1) {
			j = -1;
		}
		j = j + 1;
		$(".zhanshi_right a").eq(j).css("opacity", "1");
		$(".zhanshi_right a").eq(j).css("display", "block");
		$(".zhanshi_right a").eq(j - 1).css("opacity", "0");
		$(".zhanshi_right a").eq(j - 1).css("display", "none");
		$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
		$(".zhanshi_right div").eq(j - 1).css("background-color", "white");
	})

	//小圆圈按钮悬浮事件
	for (var k = 0; k < $(".zhanshi_right div").size(); k++) {
		(function(k) {
			$(".zhanshi_right div").eq(k).mouseover(function() {
				$(".zhanshi_right div").eq(k).css("background-color", "dimgray");
			})
			$(".zhanshi_right div").eq(k).mouseout(function() {
				$(".zhanshi_right div").eq(k).css("background-color", "white");
				$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
			})
		})(k);
	}
	//小圆圈点击事件
	for (var k = 0; k < $(".zhanshi_right div").size(); k++) {
		(function(k) {
			$(".zhanshi_right div").eq(k).click(function() {
				$(".zhanshi_right div").css("background-color", "white");
				$(".zhanshi_right div").eq(k).css("background-color", "dimgray");
				$(".zhanshi_right a").eq(j).css("opacity", "0");
				$(".zhanshi_right a").eq(j).css("display", "none");
				j = k;
				$(".zhanshi_right a").eq(j).css("opacity", "1");
				$(".zhanshi_right a").eq(j).css("display", "block");

			})
			$(".zhanshi_right div").eq(k).mouseout(function() {
				$(".zhanshi_right div").eq(k).css("background-color", "white");
				$(".zhanshi_right div").eq(j).css("background-color", "dimgray");
			})
		})(k);
	}



})