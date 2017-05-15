
	var data=[];
	function gequ(data_all){
	data =data_all.data.list;
    };
    function $(id){return document.getElementById(id)};
window.onload=function () {
    var listmusic = $("listmusic");
	createList(data);
	function createList(data){
		// listmusic.innerHTML = "";
		
		for (var i = 0; i < data.length; i++) {
			
			var div=document.createElement("div");
			    div.className="gg";
			var span=document.createElement("span");
                span.className="ss";
                span.innerHTML = data[i].music;
                div.appendChild(span);
            var span1=document.createElement("span");
                span1.className="yy";
                span1.innerHTML = data[i].name;
                div.appendChild(span1);
			var span2=document.createElement("span");
                span2.className="xx";
                span2.innerHTML = data[i].album;
                div.appendChild(span2);
            var span3=document.createElement("span");
                span3.className="zz";
                span3.innerHTML = data[i].time;
                div.appendChild(span3);


			listmusic.appendChild(div);
		};

		
		console.log(listmusic)
    } 
}   