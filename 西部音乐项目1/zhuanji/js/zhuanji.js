 function $(tbj) {
 	return document.getElementById(tbj);
 }
 var nation = ["全部","内地","港台","欧美","韩国","日本","其它"];
 for (var i = 0 ; i < nation.length; i++) {
 	var Div = document.createElement("div");
 	var nation_A = document.createElement("a");
 	nation_A.href = "#";
 	Div.className = "area_minute";
 	Div.innerHTML = nation[i];
 	nation_A.appendChild(Div);
    $("Area_second").appendChild(nation_A);
 };
    $("Area_second").children[0].children[0].style.color = "white";
    $("Area_second").children[0].children[0].style.width = "70px";
    $("Area_second").children[0].children[0].style.height = "30px";
    $("Area_second").children[0].children[0].style.backgroundColor = "#000";
    $("Area_second").children[0].children[0].style.marginLeft = "0";
    $("Area_second").children[1].children[0].style.marginLeft = "30px";
 var genre = ["全部","流行","古典","爵士","摇滚","电子","拉丁","轻音乐","世界音乐","嘻哈","原声","乡村","舞曲","R&B","民谣","金属",];
 for (var i = 0 ; i < genre.length; i++) {
 	var gen = document.createElement("div");
 	var genre_A = document.createElement("a");
 	genre_A.href = "#";
 	genre_A.appendChild(gen);
 	gen.className = "area_minute";
 	gen.innerHTML = genre[i];
    $("Genre_second").appendChild(genre_A);
 };
    $("Genre_second").children.color = "#000";
    $("Genre_second").children[0].children[0].style.color = "white";
    $("Genre_second").children[0].children[0].style.width = "70px";
    $("Genre_second").children[0].children[0].style.height = "30px";
    $("Genre_second").children[0].children[0].style.backgroundColor = "#000";
    $("Genre_second").children[0].children[0].style.marginLeft = "0";
    $("Genre_second").children[1].children[0].style.marginLeft = "30px";
    $("Genre_second").children[10].children[0].style.width = "70px";
    $("Genre_second").children[10].children[0].style.marginLeft = "0px";
    $("Genre_second").children[10].children[0].style.marginTop = "15px";
    $("Genre_second").children[11].children[0].style.marginTop = "15px";
    $("Genre_second").children[11].children[0].style.marginLeft = "30px";
    $("Genre_second").children[12].children[0].style.marginTop = "15px";
    $("Genre_second").children[13].children[0].style.marginTop = "15px";
    $("Genre_second").children[14].children[0].style.marginTop = "15px";
    $("Genre_second").children[15].children[0].style.marginTop = "15px";
 var time = ["全部","2016","2015","2014","一零年代","零零年代","九十年代","八十年代","七十年代","六十年代",];
    for (var i = 0 ; i < time.length; i++) {
 	var tim = document.createElement("div");
 	var time_A = document.createElement("a");
 	time_A.href = "#";
 	tim.className = "area_minute";
 	tim.innerHTML = time[i];
 	time_A.appendChild(tim);
    $("Time_second").appendChild(time_A);
 };
    $("Time_second").children[0].children[0].style.color = "white";
    $("Time_second").children[0].children[0].style.width = "70px";
    $("Time_second").children[0].children[0].style.height = "30px";
    $("Time_second").children[0].children[0].style.backgroundColor = "#000";
    $("Time_second").children[0].children[0].style.marginLeft = "0";
    $("Time_second").children[1].children[0].style.marginLeft = "30px";
    $("Time_second").children[2].children[0].style.marginLeft = "48px";
    $("Time_second").children[3].children[0].style.marginLeft = "52px";
    $("Time_second").children[4].children[0].style.marginLeft = "42px";
    $("Time_second").children[5].children[0].style.marginLeft = "30px";
    $("Time_second").children[6].children[0].style.marginLeft = "30px";
    $("Time_second").children[7].children[0].style.marginLeft = "30px";
    $("Time_second").children[8].children[0].style.marginLeft = "47px";
    $("Time_second").children[9].children[0].style.marginLeft = "45px";
var date_new = [];
    function fun (data_all){
    date_new = data_all.data.list;
    console.log(date_new);
}
   window.onload = function () {
    var special = document.getElementById("Special");
    console.log(special);

    for (var i = 0; i < date_new.length ; i++) {
        var sub_div = document.createElement('div');
        var sub_a = document.createElement('a');
        sub_a.href = "#";
        sub_div.className = "sub_div";
        sub_a.appendChild(sub_div);
        special.appendChild(sub_a);
        
        var sub_img_box = document.createElement("div");
        var sub_img = document.createElement("img");
        var sub_img_second = document.createElement("img");
        sub_img_box.className = "sub_img_box";
        sub_img.className = "sub_img";
        sub_img_second.className = "sub_img_second";
        sub_img.src = date_new[i].m_image_url;
        sub_img_second.src = date_new[i].m_image_url_thirt;
        sub_img_box.appendChild(sub_img);
        sub_img_box.appendChild(sub_img_second)
        sub_div.appendChild(sub_img_box);

        var sub_img_CD  = document.createElement("div");
        var sub_img_CDimg = document.createElement("img");
        sub_img_CD.className = "sub_img_CD";
        sub_img_CDimg.className = "sub_img_CDimg";
        sub_img_CDimg.src = date_new[i].m_image_url_second;
        sub_img_CD.appendChild(sub_img_CDimg);
        sub_div.appendChild(sub_img_CD);

        var M_title  = document.createElement("div");
        M_title.className = "M_title";
        M_title.innerHTML = date_new[i].m_title;
        sub_div.appendChild(M_title);

        var M_writer_name  = document.createElement("div");
        M_writer_name.className = "M_writer_name";
        M_writer_name.innerHTML = date_new[i].m_writer_name;
        sub_div.appendChild(M_writer_name);

        var M_create_time  = document.createElement("div");
        M_create_time.className = "M_create_time";
        M_create_time.innerHTML = date_new[i].m_create_time;
        sub_div.appendChild(M_create_time);

        var M_image_url_four  = document.createElement("div");
        var Sub_img_CDimg_second = document.createElement("img");
        M_image_url_four.className = "M_image_url_four";
        Sub_img_CDimg_second.className = "Sub_img_CDimg_second";
        Sub_img_CDimg_second.src = date_new[0].m_image_url_four;
        M_image_url_four.appendChild(Sub_img_CDimg_second);
        sub_div.appendChild(M_image_url_four);

    };

    var sub = document.getElementsByClassName("sub_div");
    var sub_img_second = document.getElementsByClassName("sub_img_second");
    var M_image_url_four = document.getElementsByClassName("M_image_url_four");
    for (var i = 0; i < sub.length; i++) {
        sub[i].index = i;
        sub[i].onmouseover = function () {
            var k=this.index;
            sub_img_second[k].style.opacity="1";
            M_image_url_four[k].style.opacity="1";
            M_image_url_four[k].style.transform="scalex(2)";

        }
        sub[i].onmouseout = function () {
            var k=this.index;
            sub_img_second[k].style.opacity="0";
            M_image_url_four[k].style.opacity="0";
        }
    };
    special.children[0].children[0].style.marginLeft = "0";
    special.children[5].children[0].style.marginLeft = "0";
    special.children[10].children[0].style.marginLeft = "0";
    special.children[15].children[0].style.marginLeft = "0";

    var page_lis = document.getElementById('page').children;
    //默认第二页那一项有样式
    page_lis[2].id = 'click_style_1';
    //除开始和结束为指导的左右箭头和中间的“…”其他项都可以点击变色
    for(var i=0;i<page_lis.length;i++){
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
  
    //找到页数的每一项
    var page_lis = document.getElementById('page').children;
    //默认第二页那一项有样式
    page_lis[2].id = 'click_style_1';
    //除开始和结束为指导的左右箭头和中间的“…”其他项都可以点击变色
    for(var i=0;i<page_lis.length;i++){
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
    console.log(right)
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
