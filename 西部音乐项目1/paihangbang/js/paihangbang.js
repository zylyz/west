var paihangbang_new=[];
var paihangbang_head=[];
function paihang(data_all){
	paihangbang_new =data_all.data.list;
	paihangbang_head =data_all.data.thead;
}
function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	var date=new Date();
	var dateYear=date.getFullYear();
	var dateMonth=date.getMonth();
	var dateDate=date.getDate();
	var updateTime=$("updateTime");
	updateTime.innerHTML="最近更新："+dateYear+"-"+(dateMonth+1)+"-"+(dateDate-1);
	var listMusic=$("listMusic");
	createList(paihangbang_new);
	function createList(paihangbang_new){
		listMusic.innerHTML="";
		var headMessage=document.createElement("div");
		headMessage.className="headMessage";
		for (var i = 0; i < paihangbang_head.length; i++) {
			paihangbang_head[i].index=i;
			var headSmall=document.createElement("span");
			headSmall.className="headSmall"+i;
			headSmall.innerHTML=paihangbang_head[i];
			headMessage.appendChild(headSmall);
		};
		listMusic.appendChild(headMessage);
		for (var i = 0; i < paihangbang_new.length; i++) {
			paihangbang_new[i].index=i;
			var musicBox=document.createElement("div");
			if(i%2==0){
				musicBox.className="musicbox_white";
			}else{
				musicBox.className="musicbox_deep";
			};
			if (i<4) {
				musicBox.style.height="80px";
				musicBox.style.lineHeight="80px";
			};
			musicBox.style.color="#333";
            // 创建序号
			var musicNumber=document.createElement("span");
			musicNumber.innerHTML=paihangbang_new[i].number;
			musicNumber.className="musicNumber";
			musicBox.appendChild(musicNumber);
            // 创建趋势
			var musicState=document.createElement("span");
			musicState.className="musicState";
			musicState.innerHTML=paihangbang_new[i].musicState;
			musicBox.appendChild(musicState);
			//创建图片
			var musicImage=document.createElement("img");
			musicImage.src=paihangbang_new[i].musicImage
            musicImage.className="musicImage";
            musicBox.appendChild(musicImage);
            // 创建歌曲名称和说明
            var musicName=document.createElement("span");
            musicName.className="musicName";
            musicName.innerHTML=paihangbang_new[i].musicName;
            var musicExplain=document.createElement("span");
            musicExplain.className="musicExplain";
            musicExplain.innerHTML=paihangbang_new[i].musicExplain;
            musicName.appendChild(musicExplain);
            if (i<4) {
            	musicName.style.left="198px";
            };
            musicBox.appendChild(musicName);
            // 创建歌手
            var musicSinger=document.createElement("span");
            musicSinger.className="musicSinger";
            musicSinger.innerHTML=paihangbang_new[i].musicSinger;
            musicBox.appendChild(musicSinger);
            //创建音乐时间
            var musicTime=document.createElement("musicTime");
            musicTime.className="musicTime";
            musicTime.innerHTML=paihangbang_new[i].musicTime;
            musicBox.appendChild(musicTime);
            //创建播放 添加 下载 转发
            var playAddBox=document.createElement("span");
            playAddBox.className="playAddBox";
            var musicPlay=document.createElement("img");
            musicPlay.src=paihangbang_new[i].musicPlay;
            playAddBox.appendChild(musicPlay);
            var musicAdd=document.createElement("img");
            musicAdd.src=paihangbang_new[i].musicAdd;
            playAddBox.appendChild(musicAdd);
            var musicUpdate=document.createElement("img");
            musicUpdate.src=paihangbang_new[i].musicUpdate;
            playAddBox.appendChild(musicUpdate);
            var musicRelay=document.createElement("img");
            musicRelay.src=paihangbang_new[i].musicRelay;
            playAddBox.appendChild(musicRelay);
            musicBox.appendChild(playAddBox);
            if (i<4) {
            	playAddBox.style.top="10px";
            };
            
		    listMusic.appendChild(musicBox);
		};

        var playAddBox=document.getElementsByClassName('playAddBox');
        var musicImage=document.getElementsByClassName('musicImage');
        var musicName=document.getElementsByClassName('musicName');
        playAddBox[0].style.display="block";
        for (var j = 0; j < musicName.length; j++) {
            musicName[j].index=j;
            musicName[j].onclick=function(){
            	var k=this.index;
            	for (var i = 0; i < playAddBox.length; i++) {
            		playAddBox[i].style.display="none";
            	};
            	playAddBox[k].style.display="block";
            }
        };
        for (var a = 0; a < musicImage.length; a++) {
        	musicImage[a].index=a;
        	musicImage[a].onclick=function(){
        		var k=this.index;
        		for (var i = 0; i < playAddBox.length; i++) {
            		playAddBox[i].style.display="none";
            	};
            	playAddBox[k].style.display="block";
        	}
        };

	}
}