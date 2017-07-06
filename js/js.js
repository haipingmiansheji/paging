/**
 * Created by li on 2017/4/1.
 */
function aplicationPage(json){
    if(json.id){
        var page=document.getElementById(json.id);
        var nowNum=json.nowNum||4;
        var allNum=json.allNum||7;
        var callBack=json.callBack||function(){};
        if(nowNum>=2){
            var oA=document.createElement('a');
            oA.innerHTML='上一页';
            oA.href='#'+(nowNum-1);
            page.appendChild(oA)
        }else{
            var oSpan=document.createElement('span');
            oSpan.innerHTML='上一页';
            oSpan.className='disable'
            page.appendChild(oSpan)
        }
        if(nowNum>=5 && allNum>=7){
            var oA=document.createElement('a');
            oA.innerHTML='...1';
            oA.href='#1';
            page.appendChild(oA);
        }

        if(allNum<=7){
            for(var i=1;i<=allNum;i++){
                var oA=document.createElement('a');
                if(nowNum==i){
                    oA.className='active';
                }
                oA.href='#'+i;
                oA.innerHTML=i;
                page.appendChild(oA);
            }
        }else{
                for(var i=1;i<=7;i++){
                    if(nowNum==1 || nowNum==2 || nowNum==3){
                        var oA=document.createElement('a');
                        if(nowNum==i){
                            oA.className='active';
                        }
                        oA.href='#'+i;
                        oA.innerHTML=i;
                    }else if(allNum-nowNum==0 || allNum-nowNum==1 || allNum-nowNum==2){
                        var oA=document.createElement('a');
                        if(allNum-nowNum==0 && i==7){
                            oA.className='active';
                        }
                        if(allNum-nowNum==1 && i==6){
                            oA.className='active';
                        }
                        if(allNum-nowNum==2 && i==5){
                            oA.className='active';
                        }
                        oA.href='#'+(allNum-7+i);
                        oA.innerHTML=allNum-7+i;
                        page.appendChild(oA);
                    }else{
                        var oA=document.createElement('a');
                        if(i==4){
                            oA.className='active';
                        }
                        oA.href='#'+(nowNum-4+i);
                        oA.innerHTML=nowNum-4+i;
                    }
                    page.appendChild(oA);
                }
            }
        if(allNum-nowNum>=4 && allNum>=7){
            var oA=document.createElement('a');
            oA.innerHTML='...'+allNum;
            oA.href='#'+allNum;
            page.appendChild(oA)
        }
        if(allNum-nowNum!=0){
            var oA=document.createElement('a');
            oA.innerHTML='下一页';
            oA.href='#'+(nowNum+1);
            page.appendChild(oA)
        }else{
            var oSpan=document.createElement('span');
            oSpan.innerHTML='下一页';
            oSpan.className='disable'
            page.appendChild(oSpan)
        }

    }
    callBack(nowNum,allNum)
    var aA=page.getElementsByTagName('a');
    for(var i=0; i<aA.length;i++){
        aA[i].onclick=function(){
            var nowNum=parseInt(this.getAttribute('href').substring(1));
            page.innerHTML='';
            aplicationPage({
                id:json.id,
                nowNum:nowNum,
                allNum:allNum,
                callBack:function(nowNum,allNum){
                    alert(nowNum+':'+allNum)
                }
            })
            return false;
        }
    }
}
aplicationPage({
    id:'page',
    nowNum:16,
    allNum:17,
    callBack:function(nowNum,allNum){
        alert(nowNum+':'+allNum)
    }
})