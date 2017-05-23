 (function(){
        var listCenter=document.getElementById('listCenter');
        var ol0ListCenter=listCenter.children[0];
        var ul1ListCenter=listCenter.children[1];
        var ol2ListCenter=listCenter.children[2];
        var ul3ListCenter=listCenter.children[3];
        var ol0ListCenterChild=ol0ListCenter.children[0];
        ol0ListCenterChild.style.top="25px";
        var ll=65;
        var ul1ListCenterChild=ul1ListCenter.children;
        for (var i = 0; i < ul1ListCenterChild.length; i++) {
            ul1ListCenterChild[i].style.top=ll+"px";
            ll+=70;
        };
        ol2ListCenter.style.top="370px";
        var xx=410;
        var ul3ListCenterChild=ul3ListCenter.children;
        for (var i = 0; i < ul3ListCenterChild.length; i++) {
            ul3ListCenterChild[i].style.top=xx+"px";
            xx+=70;
        };
    })()