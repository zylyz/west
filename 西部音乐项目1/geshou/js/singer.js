window.onload = function (){
	//找到菜单所有项目（li）
	var menu_lis = document.getElementById('menu').children;
	//默认“华语男”有样式
	menu_lis[1].id = 'click_style';
	//除开始以外的其他项目（li）都添加点击变样式事件
	for(var i=0;i<menu_lis.length;i++){
		menu_lis[i].onmouseup = function (){
			var text=window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		}
		if(i!=0){
			menu_lis[i].onclick = function (){
			for(var i=1;i<menu_lis.length;i++){
				menu_lis[i].id = "";
			}
			this.id = 'click_style';
			}
		}	
	}
	//找到页数的每一项
	var page_lis = document.getElementById('page').children;
	//默认第二页那一项有样式
	page_lis[2].id = 'click_style_1';
	//除开始和结束为指导的左右箭头和中间的“…”其他项都可以点击变色
	for(var i=0;i<page_lis.length;i++){
		page_lis[i].onmouseup = function (){
			var text=window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		}
		if(i!=0&&i!=4&&i!=7){
			page_lis[i].onclick = function (){
				for(var i=0;i<page_lis.length;i++){
					if(i!=0&&i!=4&&i!=7)
					page_lis[i].id = '';
					this.id = 'click_style_1';
				}
			}
		}
	}
	//找到左右箭头
	var left = page_lis[0];
	var right = page_lis[7];
	//左箭头的点击事件
	left.onclick = function (){
	for(var i=0;i<page_lis.length;i++){
		if(page_lis[i].id=='click_style_1'){
			if(i!=1){
				page_lis[i].id = '';
			}
			if(i==1&&parseInt(page_lis[1].innerText)<=26&&parseInt(page_lis[1].innerText)!=1){
				page_lis[1].innerText = (parseInt(page_lis[1].innerText)-1);
				page_lis[2].innerText = (parseInt(page_lis[2].innerText)-1);
				page_lis[3].innerText = (parseInt(page_lis[3].innerText)-1);
				page_lis[4].innerText = "…";
				page_lis[5].innerText = '30';
				page_lis[6].innerText = '31';
			}
			if(i!=1&&(i!=5||parseInt(page_lis[4].innerText)==29)){
				i--;
				page_lis[i].id = 'click_style_1';
				break;
			}if(i==5&&parseInt(page_lis[4].innerText)!=29){
				i-=2;
				page_lis[i].id = 'click_style_1';
				break;
				}
			}
		}
	}
	//右箭头的点击事件
	right.onclick = function (){
	for(var i=0;i<page_lis.length;i++){
		if(page_lis[i].id=='click_style_1'){
			if(i!=6){
				page_lis[i].id = '';
			}
			if(i!=6&&i!=3){
				i++;
				page_lis[i].id = 'click_style_1';
				break;
			}if(i==3){
				if(parseInt(page_lis[3].innerText)==27){
					page_lis[4].innerText = '29';
				}
				if(parseInt(page_lis[3].innerText)>=28){
					page_lis[4].id = 'click_style_1';
					break;
				}else{
					page_lis[1].innerText = (parseInt(page_lis[1].innerText)+1);
					page_lis[2].innerText = (parseInt(page_lis[2].innerText)+1);
					page_lis[3].innerText = (parseInt(page_lis[3].innerText)+1);
					page_lis[i].id = 'click_style_1';
					}
				}
			}
		}
	}
}