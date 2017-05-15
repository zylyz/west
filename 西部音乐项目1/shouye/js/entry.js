window.onload = function (){
	//获取自动登录行内块
	var span_xuan = document.getElementById('span_xuan');
	//添加点击“打钩”事件||取消“打钩”事件
	span_xuan.onclick =function (){
		span_xuan.style.backgroundImage="url(../img/xuan.png)";
		this.onclick = function xuan(){
			span_xuan.style.backgroundImage="";
			span_xuan.onclick = function(){
				span_xuan.style.backgroundImage="url(../img/xuan.png)";
				this.onclick = function (){
					xuan();
				}
			}
		}
	}
	//获取登录按钮
	var denglu = document.getElementById('denglu');
	var guanbi = document.getElementById('guanbi');
	//添加点击显示登录模块事件
	denglu.onclick = function(){
		document.getElementsByClassName('entry')[0].style.display="block";
	}
	guanbi.onclick = function(){
		document.getElementsByClassName('entry')[0].style.display="none";
	}
}
$(function () {
//jquery验证邮箱 
$("#email").blur(function () {
	checkSubmitEmail();
});
function checkSubmitEmail() { 
if ($("#email").val() == "") { 
alert("不能为空!"); 
$("#email").focus(); 
return false; 
} 
if (!$("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) { 
alert("格式不正确"); 
$("#email").focus(); 
return false; 
} 
return true; 
}; 
// !$("#email").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/) 
//验证密码
$("#password").blur(function () {
	checkPass();
});
function checkPass() { 
if ($("#password").val() == "") { 
alert("不能为空!") 
$("#password").focus(); 
return false; 
} 
if ($("#password").match(/^[a-zA-Z0-9_]{6,20}$/)) { 
alert("格式不正确"); 
$("#password").focus(); 
return false; 
} 
return true; 
}; 
});