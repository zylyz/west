function $(id){
	return document.getElementById(id)
};
window.onload=function(){
	var caption=[" ","歌曲","歌手","专辑","时长"];
	// 创建数据
    var createGedan=[
	    {"num":"1",
        "music":"半透明的墙",
        "people":"张杰",
        "zhuanji":"最接近天堂的地方",
        "time":"04:19"},
        {"num":"2",
        "music":"明天过后",
        "people":"张杰",
        "zhuanji":"明天过后",
        "time":"03:56"},
        {"num":"3",
        "music":"夜空中最亮的星",
        "people":"张杰",
        "zhuanji":"我是歌手第二季 第8期",
        "time":"04:10"},
        {"num":"4",
        "music":"勿忘心安(《窃听风云》电影主题曲)",
        "people":"张杰",
        "zhuanji":"穿越三部曲",
        "time":"04:02"},
        {"num":"5",
        "music":"安和桥",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:50"},
        {"num":"6",
        "music":"董小姐",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:59"},
    
        {"num":"7",
        "music":"半透明的墙",
        "people":"张杰",
        "zhuanji":"最接近天堂的地方",
        "time":"04:19"},
        {"num":"8",
        "music":"明天过后",
        "people":"张杰",
        "zhuanji":"明天过后",
        "time":"03:56"},
        {"num":"9",
        "music":"夜空中最亮的星",
        "people":"张杰",
        "zhuanji":"我是歌手第二季 第8期",
        "time":"04:10"},
        {"num":"10",
        "music":"勿忘心安(《窃听风云》电影主题曲)",
        "people":"张杰",
        "zhuanji":"穿越三部曲",
        "time":"04:02"},
        {"num":"11",
        "music":"安和桥",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:50"},
        {"num":"12",
        "music":"董小姐",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:59"},

        {"num":"13",
        "music":"半透明的墙",
        "people":"张杰",
        "zhuanji":"最接近天堂的地方",
        "time":"04:19"},
        {"num":"14",
        "music":"明天过后",
        "people":"张杰",
        "zhuanji":"明天过后",
        "time":"03:56"},
        {"num":"15",
        "music":"夜空中最亮的星",
        "people":"张杰",
        "zhuanji":"我是歌手第二季 第8期",
        "time":"04:10"},
        {"num":"16",
        "music":"勿忘心安(《窃听风云》电影主题曲)",
        "people":"张杰",
        "zhuanji":"穿越三部曲",
        "time":"04:02"},
        {"num":"17",
        "music":"安和桥",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:50"},
        {"num":"18",
        "music":"董小姐",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:59"},

        {"num":"19",
        "music":"半透明的墙",
        "people":"张杰",
        "zhuanji":"最接近天堂的地方",
        "time":"04:19"},
        {"num":"20",
        "music":"明天过后",
        "people":"张杰",
        "zhuanji":"明天过后",
        "time":"03:56"},
        {"num":"21",
        "music":"夜空中最亮的星",
        "people":"张杰",
        "zhuanji":"我是歌手第二季 第8期",
        "time":"04:10"},
        {"num":"22",
        "music":"勿忘心安(《窃听风云》电影主题曲)",
        "people":"张杰",
        "zhuanji":"穿越三部曲",
        "time":"04:02"},
        {"num":"23",
        "music":"安和桥",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:50"},
        {"num":"24",
        "music":"董小姐",
        "people":"宋冬野",
        "zhuanji":"安和桥北",
        "time":"03:59"}
    ];
    var content=$("content");
    createTable(content,caption,createGedan);
    function createTable(content,caption,crerateGedan){
    	var table=document.createElement("table");
    	content.appendChild(table);
        var thead=document.createElement("thead");
        table.appendChild(thead);
        var tr=document.createElement("tr");
        thead.appendChild(tr);
        // for循环创建表头
        for(var i=0;i<caption.length;i++){
        	var td=document.createElement("td");
        	tr.appendChild(td);
            td.innerHTML=caption[i];
        }
        var tbody=document.createElement("tbody");
    	table.appendChild(tbody);
        createTbody(tbody,createGedan);
    }//创建表格 
    //创建表各主体部分
    function createTbody(tbody,createGedan){
    	for(var b=0;b<createGedan.length;b++){
    		var tbodyTr=document.createElement("tr");
    		tbody.appendChild(tbodyTr);
    		for(var key in createGedan[b]){
    			var tbodyTd=document.createElement("td");
    			tbodyTr.appendChild(tbodyTd)
    			tbodyTd.innerHTML=createGedan[b][key];
    		}
    		if(b%2==0){
    			tbodyTr.style.backgroundColor="white";
    		}
    	}
    }
    var button=document.getElementsByTagName("button");
    button[0].style.backgroundColor="#e7a80c";
	button[0].style.color="white";
    for(var i=0;i<button.length;i++){
    	button[i].onclick=function(){
	    	for(var j=0;j<button.length;j++){
	    		button[j].style.backgroundColor="";
	    		button[j].style.color="";
	    	}
	        this.style.backgroundColor="#e7a80c";
	        this.style.color="white";	
        }
    }










}//网页加载完成
