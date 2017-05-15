    var getDate=[];
	function createJson(json){
		getDate=json.list;
	}
	function $(id){
		return document.getElementById(id);
	};
	window.onload=function(){
		var mvDiv=$("mv");
		createCell(3,5);
		function createCell(w_num,h_num){
			mvDiv.innerHTML="";
			for(var i=0;i<w_num*h_num;i++){
                var sub_div=document.createElement("div");
                sub_div.className="sub_div";
                mvDiv.appendChild(sub_div);
                var sub_img=document.createElement("img");
                sub_img.src=getDate[i].pic;
                sub_div.appendChild(sub_img);
                var sub_p=document.createElement("p");
                sub_p.innerHTML=getDate[i].name;
                sub_div.appendChild(sub_p);
                var sub_p1=document.createElement("p");
                sub_p1.innerHTML=getDate[i].play;
                sub_div.appendChild(sub_p1);
                var sub_span=document.createElement("p");
                var sub_span1=document.createElement("p");
                sub_div.appendChild(sub_span);
                sub_div.appendChild(sub_span1);
                sub_span.innerHTML=getDate[i].author;
                sub_span1.innerHTML=getDate[i].time; 

			}
		}//构建九宫格函数
//MV轮播部分
    var mvLunbo=$("mvLunbo");
    var picLunbo=$("picLunbo");
    var line=$("line");
    var picLis=picLunbo.children;
    var last=$("last");
    var next=$("next");
    var picJson=[
           {
              width: 310,           
              top: 142,
              left:260,
              opacity: 1,
              zIndex: 2
          },//0
          {
              width: 488,
              top:90,
              left: 330,
              opacity: 1,
              zIndex: 3
          },//1
          {
              width: 670,
              top: 42,
              left: 410,
              opacity: 1,
              zIndex: 4
          },//2
          {
              width: 488,
              top: 90,
              left:690,
              opacity:1,
              zIndex: 3
          },//3
          {
              width: 310,
              top:142,
              left:930,
              opacity: 1,
              zIndex: 2
          }//4 

    ];
    for(var i=0;i<picLis.length;i++){
      var lineLi=document.createElement("li");
      line.appendChild(lineLi);
    }
     var lineLi=line.children;
     // console.log(lineLi)
     lineLi[0].index=0;
     lineLi[0].onclick=function(){
         lineLi[0].style.height='3px';
         lineLi[0].style.backgroundColor='#9f9fa0';
         lineLi[1].style.height='1px';
         lineLi[1].style.backgroundColor='#ccc';
         lineLi[2].style.height='1px';
         lineLi[2].style.backgroundColor='#ccc';
         lineLi[3].style.height='1px';
         lineLi[3].style.backgroundColor='#ccc';
         lineLi[4].style.height='1px';
         lineLi[4].style.backgroundColor='#ccc';
         flag = false;
         var y=this.index;
         picJson.push(picJson.shift());
         picJson.push(picJson.shift());
         move();
     }
     lineLi[1].index=1;
        lineLi[1].onclick = function(){
           lineLi[1].style.height='3px';
           lineLi[1].style.backgroundColor='#9f9fa0';
           lineLi[0].style.height='1px';
           lineLi[0].style.backgroundColor='#ccc';
           lineLi[3].style.height='1px';
           lineLi[3].style.backgroundColor='#ccc';
           lineLi[4].style.height='1px';
           lineLi[4].style.backgroundColor='#ccc';
           lineLi[2].style.height='1px';
           lineLi[2].style.backgroundColor='#ccc';
           flag = false;
        var y = this.index;
            picJson.push(picJson.shift());
            move();
        }
        lineLi[3].index=3;
        lineLi[3].onclick = function(){
           lineLi[3].style.height='3px';
           lineLi[3].style.backgroundColor='#9f9fa0';
           lineLi[4].style.height='1px';
           lineLi[4].style.backgroundColor='#ccc';
           lineLi[0].style.height='1px';
           lineLi[0].style.backgroundColor='#ccc';
           lineLi[1].style.height='1px';
           lineLi[1].style.backgroundColor='#ccc';
           lineLi[2].style.height='1px';
           lineLi[2].style.backgroundColor='#ccc';
           flag = false;
        var y = this.index;
            picJson.unshift(picJson.pop());
            move();
        }
        lineLi[4].index=4;
        lineLi[4].onclick = function(){
           lineLi[4].style.height='3px';
           lineLi[4].style.backgroundColor='#9f9fa0';
           lineLi[3].style.height='1px';
           lineLi[3].style.backgroundColor='#ccc';
           lineLi[1].style.height='1px';
           lineLi[1].style.backgroundColor='#ccc';
           lineLi[0].style.height='1px';
           lineLi[0].style.backgroundColor='#ccc';
           lineLi[2].style.height='1px';
           lineLi[2].style.backgroundColor='#ccc';
           flag = false;
        var y = this.index;
            picJson.unshift(picJson.pop());
            picJson.unshift(picJson.pop());
            move();
        }
        function move(){
          for(var i=0;i<picLis.length;i++){
            animate(picLis[i],picJson[i],function(){
              flag=true;
            });
          };
        };
        var flag=true;
        move();
        next.onclick=function(){
          lineLi[1].style.height='3px';
          lineLi[1].style.backgroundColor='#9f9fa0';
          lineLi[0].style.height='1px';
          lineLi[0].style.backgroundColor='#ccc';
          lineLi[3].style.height='1px';
          lineLi[3].style.backgroundColor='#ccc';
          lineLi[4].style.height='1px';
          lineLi[4].style.backgroundColor='#ccc';
          lineLi[2].style.height='1px';
          lineLi[2].style.backgroundColor='#ccc';
            flag = false;
            picJson.push(picJson.shift());
            move();
        }
        last.onclick = function () {
           lineLi[3].style.height='3px';
           lineLi[3].style.backgroundColor='#9f9fa0';
           lineLi[4].style.height='1px';
           lineLi[4].style.backgroundColor='#ccc';
           lineLi[0].style.height='1px';
           lineLi[0].style.backgroundColor='#ccc';
           lineLi[1].style.height='1px';
           lineLi[1].style.backgroundColor='#ccc';
           lineLi[2].style.height='1px';
           lineLi[2].style.backgroundColor='#ccc';
            flag = false;
            picJson.unshift(picJson.pop());
            move();
    }
    function animate(obj,json,fn){
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            // console.log("target: " + target + "leader: " + leader + "step: " + step);
            if (leader != target) {
                flag = false;//告诉人家 我还有没到的呢
            }
        }
        //最后再判断 如果标记仍然是true说明 没有没到达的了
        //也就是都到达了
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
    }
    function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
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
  var left = $("pageUp");
  var right = $("pageDown");
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
  








	}//页面加载完成
	




