const TABS = {
            home:document.getElementsByClassName("home"),
            about:document.getElementsByClassName("about"),
            contact:document.getElementsByClassName("contact")
        };
        var slider = document.getElementsByClassName("slide")[0],
        currentLetf='0',currentWidth='124px',currentAction='click',
        currentTab="home";
        function checkScreen(left,width){
            if(window.innerWidth<=380){
                switch (width) {
                    case "153px":
                        width="115px";left="215px";
                        break;
                    case "136px":
                        width="110px";left="103px";
                        break;
                    case "124px":
                        width="110px";left="0";
                        break;
                }
            };
            return {
                left:left,width:width
            };
        };
        function currentNavTab(left,width,action){
            let screenCheckVar = checkScreen(left,width);
            currentAction = action;
            switch (action) {
                case "click":
                    slider.style.left=screenCheckVar.left;
                    slider.style.width=screenCheckVar.width;
                    currentLetf=left;currentWidth=width;
                    break;
                case "mouseover":
                    slider.style.left=screenCheckVar.left;
                    slider.style.width=screenCheckVar.width;
                    break;
                case "mouseout":
                    screenCheckVar = checkScreen(currentLetf,currentWidth);
                    slider.style.left=screenCheckVar.left;
                    slider.style.width=screenCheckVar.width;
                    break;
            }
        };
        function hide(element){
            //clearTimeout(element.hide);
            element.style.opacity="0";
            element.hide=setTimeout(() => {
                element.style.display="none";
            }, 1000);
        };
        function show(element){
            //clearTimeout(element.hide);
            //clearTimeout(element.show2);
            element.style.display="none";
            element.style.marginTop="200px";
            element.style.opacity="1";
            //element.show1=setTimeout(() => {
                element.style.display="block";
                element.show2=setTimeout(() => {
                    element.style.marginTop="0px";
                }, 50);
            //}, 50);
        };
        function hideDisplay(tab){
            var i,x,tabs=['home','about','contact'];
            for(x=0;x<tabs.length;x++){
              if(tabs[x]!==tab){
                for(i=0;i<TABS[tabs[x]].length;i++){
                  TABS[tabs[x]][i].style.display="none";
                }
              }
            }
        };
        function display(tab){
            var i,x,tabs=['home','about','contact'];
            for(x=0;x<tabs.length;x++){
              if(tabs[x]!==tab){
                for(i=0;i<TABS[tabs[x]].length;i++){
                  TABS[tabs[x]][i].style.display="none";
                }
              }
            }
            for(i=0;i<TABS[tab].length;i++){
              TABS[tab][i].style.display="block";
            }
            keeper=tab;
        };
        var shower=null,keeper='home';
        function showTab(tab,keepTab){
            if(keeper===tab&&!keepTab){return};
            if(keepTab){keeper=tab;};
            var i,y=currentTab;currentTab=tab;
            //clearTimeout(shower);
            for(i=0;i<TABS[tab].length;i++){
                let x=i;
                shower=setTimeout(() => {
                    hide(TABS[y][x]);
                   setTimeout(() => {
                        TABS[y][x].style.display="none";
                        show(TABS[tab][x]);
                   }, 900+(i+1)*150);
                }, (i+1)*150);
            };
        };
        function hideTab(tab){
            if(keeper===tab){return};
            showTab(keeper,true);
        };
        setTimeout(() => {
            var i;
            for(i=0;i<TABS.home.length;i++){
                let x=i;
                setTimeout(() => {
                    show(TABS.home[x]);
                }, (i+1)*150);
            };
        }, 150);
        window.onresize=function(){
            currentNavTab(currentLetf,currentWidth,currentAction);
        };
