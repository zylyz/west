window.onload = function (){
	//获取自动登录行内块
	var span_xuan = document.getElementById('span_xuan');
	
	//添加点击“打钩”事件||取消“打钩”事件
	span_xuan.onclick =function (){
		span_xuan.style.backgroundImage="url(img/xuan.png)";
		this.onclick = function xuan(){
			span_xuan.style.backgroundImage="";
			span_xuan.onclick = function(){
				span_xuan.style.backgroundImage="url(img/xuan.png)";
				this.onclick = function (){
					xuan();
				}
			}
		}
	}
	//获取登录按钮
	var denglu = document.getElementById('denglu');
	//添加点击显示登录模块事件
	denglu.onclick = function(){
		document.getElementsByClassName('entry')[0].style.display="block";

	}
}
