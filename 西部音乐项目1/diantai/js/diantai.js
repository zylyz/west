var diantai_thead=[];
var diantai_theadImg=[];
var diantai_list=[];
var diantai_listPaihang=[];
function diantai(data_all){
    diantai_thead=data_all.data.thead;
    diantai_theadImg=data_all.data.theadImg;
    diantai_list=data_all.data.list;
    diantai_listPaihang=data_all.data.listPaihang;
}
function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	var leftLeftLine=$("leftLeftLine");
	var rightRightLine=$("rightRightLine");
	createLine();
	function createLine(){
         
		// 线的左面部分
		for (var i = 0; i <4*diantai_thead.length+3; i++) {
	        var x=0;
			var smallTheadImg=document.createElement("img");
			smallTheadImg.className="smallTheadImg";
			z=x-0+i*8;
			smallTheadImg.style.top=z+"px";
			smallTheadImg.src=diantai_theadImg[0];
			if(i%4==0&&i>1){
				smallTheadImg.src=diantai_theadImg[1];
				smallTheadImg.style.left="0px";
			}
			if(i<1){
				smallTheadImg.style.display="none";
			}
			leftLeftLine.appendChild(smallTheadImg);
		};
		// 线的右面部分
		for (var i = 0; i <4*diantai_thead.length+3; i++) {
	        var x=0;
			var smallTheadImg=document.createElement("img");
			smallTheadImg.className="smallTheadImg";
			z=x-0+i*8;
			smallTheadImg.style.top=z+"px";
			smallTheadImg.src=diantai_theadImg[0];
			if(i%4==0&&i>1){
				smallTheadImg.src=diantai_theadImg[1];
				smallTheadImg.style.left="0px";
			}
			if(i<1){
				smallTheadImg.style.display="none";
			}
			rightRightLine.appendChild(smallTheadImg);
		};
	    // 金线的左面部分
		for (var i = 0; i <4*diantai_thead.length+3; i++) {
	        var x=0;
			var goldTheadImg=document.createElement("img");
			goldTheadImg.className="goldTheadImgL";
			z=x-0+i*8;
			goldTheadImg.style.top=z+"px";
			
			if(i%4==0&&i>1){
				goldTheadImg.src=diantai_theadImg[4];
				goldTheadImg.style.left="0px";
			}
			else if(i%2==0){
				goldTheadImg.src=diantai_theadImg[2];
			}
			else if(i%4!=0&&i%2!=0){
                goldTheadImg.src=diantai_theadImg[3];
			}
			if(i<1){
				goldTheadImg.style.display="none";
			}
			leftLeftLine.appendChild(goldTheadImg);
		};
		// 金线的右面部分
		for (var i = 0; i <4*diantai_thead.length+3; i++) {
	        var x=0;
			var goldTheadImg=document.createElement("img");
			goldTheadImg.className="goldTheadImgR";
			z=x-0+i*8;
			goldTheadImg.style.top=z+"px";
			if(i%4==0&&i>1){
				goldTheadImg.src=diantai_theadImg[4];
				goldTheadImg.style.left="0px";
			}
			else if(i%2==0){
				goldTheadImg.src=diantai_theadImg[2];
			}
			else if(i%4!=0&&i%2!=0){
                goldTheadImg.src=diantai_theadImg[3];
			}
			if(i<1){
				goldTheadImg.style.display="none";
			}
			rightRightLine.appendChild(goldTheadImg);
		};
	    // 中间文字部分
	    var centerCenterWord=$("centerCenterWord");
	    for (var i = 0; i < diantai_thead.length; i++) {
	    	diantai_thead[i].index=i;
	    	var centerWord=document.createElement("div");
	    	// 加入a标签
	    	var centerWordA=document.createElement("a");
	    	centerWordA.innerHTML=diantai_thead[i];
	    	centerWord.appendChild(centerWordA);
	    	centerWordA.href="";
	    	
	    	centerWord.className="centerWord";
	    	// centerWord.innerHTML=diantai_thead[i]
	    	centerCenterWord.appendChild(centerWord);
	    };
	    var centerWord=document.getElementsByClassName('centerWord');
	    var goldTheadImgL=document.getElementsByClassName("goldTheadImgL");
	    var goldTheadImgR=document.getElementsByClassName("goldTheadImgR");
	    for (var i = 0; i < centerWord.length; i++) {
	    	centerWord[i].index=i;
	    	centerWord[1].style.backgroundColor="#333";
	    	var centerWordA=centerWord[1].children[0];
	    	centerWordA.style.color="#e1a003";
	    	var z=(1+1)*4;
            goldTheadImgL[z-1].style.display="block";
            goldTheadImgL[z-2].style.display="block";
            goldTheadImgL[z].style.display="block";
            goldTheadImgL[z+1].style.display="block";
            goldTheadImgL[z+2].style.display="block";
            goldTheadImgR[z-1].style.display="block";
            goldTheadImgR[z-2].style.display="block";
            goldTheadImgR[z].style.display="block";
            goldTheadImgR[z+1].style.display="block";
            goldTheadImgR[z+2].style.display="block";
	        var centerWordAA=centerWord[i].children;
            centerWord[i].onmouseover=function(){
            	var s=this.index;
            	var m=(s+1)*4;
	    	    var centerWordA=centerWord[s].children[0];
	    	    for (var p = 0; p < centerWord.length; p++) {
	    	    	centerWord[p].style.backgroundColor="";
	    	    	centerWord[p].children[0].style.color="";
	    	    };
            	centerWord[s].style.backgroundColor="#333";
	    	    centerWordA.style.color="#e1a003";
	    	    for (var k = 0; k < goldTheadImgL.length; k++) {
	    	    	goldTheadImgL[k].style.display="none";
	    	    };
	    	    for (var t = 0; t < goldTheadImgR.length; t++) {
	    	    	goldTheadImgR[t].style.display="none";
	    	    };
	    	    goldTheadImgL[m-1].style.display="block";
	            goldTheadImgL[m-2].style.display="block";
	            goldTheadImgL[m].style.display="block";
	            goldTheadImgL[m+1].style.display="block";
	            goldTheadImgL[m+2].style.display="block";
	            goldTheadImgR[m-1].style.display="block";
	            goldTheadImgR[m-2].style.display="block";
	            goldTheadImgR[m].style.display="block";
	            goldTheadImgR[m+1].style.display="block";
	            goldTheadImgR[m+2].style.display="block";
            }
	    };

	    // 创建明星新电台
	    var station_new_image=$("station_new_image");
	    for (var i = 0; i < diantai_list.length; i++) {
	    	diantai_list[i].index=i;
	    	var starNewBox=document.createElement("a");
	    	starNewBox.className="starNewBox";
	    	starNewBox.href="";

	    	var starNewImg=document.createElement("img");
	    	starNewImg.src=diantai_list[i].starImage;
	    	starNewBox.appendChild(starNewImg);

	    	var starNewStation=document.createElement("span");
	    	starNewStation.className="starNewStation";
	    	starNewStation.innerHTML=diantai_list[i].starStation;
	    	starNewBox.appendChild(starNewStation);

	    	var stationIntroduction=document.createElement("span");
	    	stationIntroduction.className="stationIntroduction";
	    	stationIntroduction.innerHTML=diantai_list[i].stationIntroduction;
	    	starNewBox.appendChild(stationIntroduction);
	    	station_new_image.appendChild(starNewBox);
	    };

	    // 创建电台排行榜	
	    var stationPaihangHot=document.getElementById("stationPaihangHot");
	    var staPaiHotChild=stationPaihangHot.children;
	    for (var l = 0; l < staPaiHotChild.length; l++) {
	    	staPaiHotChild[l].index=l;
	    	staPaiHotChild[0].style.backgroundColor="#e1a003";
	    	staPaiHotChild[l].onclick=function(){
	    		for (var i = 0; i < staPaiHotChild.length; i++) {
	    			staPaiHotChild[i].style.backgroundColor="";
	    		};
	    		var j=this.index;
	    		staPaiHotChild[j].style.backgroundColor="#e1a003";
	    	}
	    };


	    //创建电台排行榜图片
	    var stationPaihangImg=document.getElementById('stationPaihangImg');
	    var imgl=0;
	    var img1l=0;
	    var img2l=0;
	    for (var i = 0; i < diantai_listPaihang.length; i++) {
	    	var staPaihangImgA=document.createElement("a");
	    	staPaihangImgA.className="staPaihangImgA";
	    	staPaihangImgA.href="";
	    	if(i<5){
	    		staPaihangImgA.style.top="0px";
	    		staPaihangImgA.style.left=imgl+"px";
	    		imgl=imgl+172;
	    	};
	    	if(i>=5&&i<10) {
	    		staPaihangImgA.style.top="252px";
	    		staPaihangImgA.style.left=img1l+"px";
	    		console.log(staPaihangImgA);
	    		img1l=img1l+172;
	    	};
	    	if(i>=10&&i<15) {
	    		staPaihangImgA.style.top="504px";
	    		staPaihangImgA.style.left=img2l+"px";
	    		console.log(staPaihangImgA);
	    		img2l=img2l+172;
	    	};

	    	var staPaihangImg=document.createElement("div");
	    	staPaihangImg.className="staPaihangImg";
            
	    	var starPaihangImg=document.createElement("img");
	    	starPaihangImg.src=diantai_listPaihang[i].starImage;
	    	staPaihangImg.appendChild(starPaihangImg);

	    	var starPaihangStation=document.createElement("div");
	    	starPaihangStation.className="starPaihangStation";
	    	starPaihangStation.innerHTML=diantai_listPaihang[i].starStation;
	    	staPaihangImg.appendChild(starPaihangStation);

	    	var starPaihangName=document.createElement("div");
	    	starPaihangName.className="starPaihangName";
	    	starPaihangName.innerHTML=diantai_listPaihang[i].starName;
	    	staPaihangImg.appendChild(starPaihangName);

	    	var starPaihangTotal=document.createElement("span");
	    	starPaihangTotal.className="starPaihangTotal";
	    	starPaihangTotal.innerHTML=diantai_listPaihang[i].stationTotal;
	    	staPaihangImg.appendChild(starPaihangTotal);

	    	var starPaihangOrder=document.createElement("span");
	    	starPaihangOrder.className="starPaihangOrder";
	    	starPaihangOrder.innerHTML=diantai_listPaihang[i].stationOrder;
	    	staPaihangImg.appendChild(starPaihangOrder);

	    	staPaihangImgA.appendChild(staPaihangImg);
	    	stationPaihangImg.appendChild(staPaihangImgA)
	    };


	    //添加跳转事件
	    var stationPaihangChoose=$("stationPaihangChoose");
	    var getUl=stationPaihangChoose.children[0];
	    var getA=getUl.children;
	    var stationPaihangChooseUp=$("stationPaihangChooseUp");
	    var stationPaihangChooseDown=$("stationPaihangChooseDown");
	    for(var i=0;i<getA.length;i++){
	        var getLi=getA[i].children[0];
	        getA[i].children[0].index=i;


        // 1、2、3数字跳转
	        getLi.onclick=function(){
	            for(var j=0;j<getA.length;j++){
	                getA[j].children[0].style.backgroundColor=""
	                getA[j].children[0].style.color=""
	            }
	            this.style.backgroundColor="#313333";
	            this.style.color="white";
	        }
	    } 
       // 进入下一页
        var ulChild=stationPaihangChooseDown.parentNode.children[0].children;
        stationPaihangChooseDown.onclick=function(){ 
            for (var i = 0; i < ulChild.length; i++) {
                ulChild[i].index=i;
                if (ulChild[i].children[0].style.color=="white") {
                    for(var a=0;a<getA.length;a++){
                        getA[a].children[0].style.backgroundColor="";
                        getA[a].children[0].style.color="";
                    }
                    var xsA=++i
                    if (i>ulChild.length-1) {
                        i=0;
                        stationPaihangChooseDown.disabled=false;
                        ulChild[i].children[0].style.backgroundColor="#313333";
                        ulChild[i].children[0].style.color="white";
                    }; 
                    if(i<ulChild.length&&i>0){
                        ulChild[xsA].children[0].style.backgroundColor="#313333";
                        ulChild[i].children[0].style.color="white";
                    } 
                    
                };
            };    
        }



        // 进入上一页
        stationPaihangChooseUp.onclick=function(){
               for (var e= 0; e < ulChild.length; e++) {
                ulChild[e].index=e;
                var ulAChild=ulChild[e].children[0];
                if (ulChild[e].children[0].style.color=="white") {
                    for(var a=0;a<getA.length;a++){
                        getA[a].children[0].style.backgroundColor="";
                        getA[a].children[0].style.color="";
                    }
                    var XAA=--e
                    if (e<0) {
                        e=ulChild.length-1;
                        stationPaihangChooseDown.disabled=false;
                        ulChild[e].children[0].style.backgroundColor="#313333";
                        ulChild[e].children[0].style.color="white";
                    }; 
                    if(e<ulChild.length-1&&e>=0){
                        ulChild[XAA].children[0].style.backgroundColor="#313333";
                        ulChild[e].children[0].style.color="white";
                    } 
                    
                };
            };
        }
	}
}