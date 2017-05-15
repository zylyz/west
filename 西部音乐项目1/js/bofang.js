
	var data=[];
	function bofang(data_all){
	data =data_all.data.list;
    };
    function $(id){return document.getElementById(id)};
// 创建列表
window.onload=function () {
    var listmusic = $("listmusic");
	createList(data);
	function createList(data){
		// listmusic.innerHTML = "";
		
		for (var i = 0; i < data.length; i++) {
			
			var div=document.createElement("div");
			    div.className="gg";
                div.id="gg";
            var span0=document.createElement("span");
                span0.id="kk"+i;
                span0.className="kk";
                div.appendChild(span0);
            var spa=document.createElement("span");
                spa.className="xu";
                spa.innerHTML = i+1;
                div.appendChild(spa);    
			var span=document.createElement("span");
                span.className="ss";
                span.innerHTML = data[i].music;
                div.appendChild(span);
            var span1=document.createElement("span");
                span1.className="yy";
                span1.innerHTML = data[i].name;
                div.appendChild(span1);
            var span3=document.createElement("span");
                span3.className="zz";
                span3.innerHTML = data[i].time;
                div.appendChild(span3);
        //     var audio=document.createElement("audio");
        //     audio.className = "video";
        //     audio.id = "video";
        // var source=document.createElement("source");
        //         source.src = "music/"+data[i].play+".mp3";
        //        audio.appendChild(source);
        //         div.appendChild(audio)
       
			listmusic.appendChild(div);
		};
    }// 数组结束
    console.log(listmusic);
    
// 点击选中 
 var play=document.getElementById("play");       
       var k=document.getElementsByClassName("kk"); 
    for (var i = 0; i < k.length; i++) {
        k[i].index = i;
        
        k[i].onclick=function () {
        var key = this.index;
        if (k[key].innerHTML == " ") {
            k[key].innerHTML = "√" ;
        }else{
            k[key].innerHTML = " ";
        }
    }
    }
    //进度条
      var progress=document.getElementById("progress");
      //灰色进度条
      var bar=document.getElementById("bar");
      //声音按钮
      var control=document.getElementById("control");
// 进度条动画
    var animate = $("animate");    
    var gg=document.getElementsByClassName("gg");
    

    for (var i = 0; i < data.length; i++) {
// 循环
        gg[i].index = i;
        gg[i].ondblclick=function () {
          var key1 = this.index;
        

        var audio=document.createElement("audio");
            audio.className = "video";
            audio.id = "video";
        var source=document.createElement("source");
                source.src = "music/"+data[key1].play+".mp3";
               audio.appendChild(source);
                gg[key1].appendChild(audio)
        console.log(gg[key1]);
        if(gg[key1].children[5].paused || gg[key1].children[5].ended){
          play.className="pause";
          gg[key1].children[5].play();
        }else{
          play.className="play";
          gg[key1].children[5].pause();
        }

        // gg[key1].children[5].play();
        // play.className="pause"; 

        //进度条
      gg[key1].children[5].addEventListener("timeupdate",function  () {
        var scales=gg[key1].children[5].currentTime/gg[key1].children[5].duration;
              bar.style.width=progress.offsetWidth*scales+"px";
        control.style.left=progress.offsetWidth*scales+"px";
      },false);

      //进度条拖拽
           control.onmousedown=function  (e) {
         gg[key1].children[5].pause();
         document.onmousemove=function  (e) {
         var leftv=e.clientX-progress.offsetLeft-animate.offsetLeft;
         if(leftv<=0){
          leftv=0;
         }
         if(leftv>=progress.offsetWidth){
         leftv=progress.offsetWidth;
         }
         control.style.left=leftv+"px"
         }
       document.onmouseup=function  () {
         var scales=control.offsetLeft/progress.offsetWidth;
               gg[key1].children[5].currentTime =gg[key1].children[5].duration*scales;
          gg[key1].children[5].play();
        document.onmousemove=null;
        document.onmousedown=null;
       }
           } 

           // 时间显示 
var duration=document.getElementsByClassName("duration")[0];
var current=document.getElementsByClassName("current")[0];
var shiian = $("shiian");     
       gg[key1].children[5].addEventListener("timeupdate",function  () {
        
        var other = gg[key1].children[5].duration % 3600;
        var minute = Math.floor (other / 60); 
        var second = parseInt((other % 60).toFixed (2));
        
        var others = gg[key1].children[5].currentTime % 3600;
        var fens = Math.floor (others / 60);
        var miaos = parseInt((others % 60).toFixed (2));
 
        var minutes = minute<10?"0"+minute:minute;
        var seconds = second<10?"0"+second:second;
        var fen = fens<10?"0"+fens:fens;
        var miao = miaos<10?"0"+miaos:miaos;
        shiian.innerHTML = fen +" "+ ":"+" " + miao+" "+
        "/"+" "+ minutes +" "+ ":"+" " +seconds;
        
        
      },false);     
    
    
      
      //播放按钮
      
      play.onclick=function  () {
        if(gg[key1].children[5].paused || gg[key1].children[5].ended){
          play.className="pause";
          gg[key1].children[5].play();
        }else{
          play.className="play";
          gg[key1].children[5].pause();
        }
      }      
    }// 点击选项
    

    }// for循环结束

    
      

    
         
var video=document.getElementById("video");       
 //音量条容器
var volume=document.getElementById("volume");
//volumeBar音量灰色
var volumeBar=document.getElementById("volumeBar");
//音量调整按钮
var volumeControl=document.getElementById("volumeControl");
//音量调整
volumeControl.onmousedown=function(e){  
document.onmousemove=function(e){
var leftb=e.clientX-volume.offsetLeft-box.offsetLeft;
if(leftb<=0){
leftb=0;
}if (leftb>=volume.offsetWidth) {
leftb=volume.offsetWidth;
}
volumeControl.style.left=leftb+"px";
volumeBar.style.width=leftb+"px";
}
document.onmouseup=function(){

video.volume=volumeControl.offsetLeft/volume.offsetWidth;
document.onmousedown=null;
document.onmousemove=null;
}
}

           
          
    
     
        

// 全部播放
    var all=$("all");
    all.onclick=function () {
        for (var i = 0; i < k.length; i++) {
            
            if (listmusic.children[i].children[0].innerHTML == " ") {
            listmusic.children[i].children[0].innerHTML = "√";
        }else{
            listmusic.children[i].children[0].innerHTML = " ";
        }
        }
    }

    

}
 



       