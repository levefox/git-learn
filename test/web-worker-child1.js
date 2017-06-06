postMessage("start countdown"); //给主线程发消息

onmessage = function (oEvent) { //接受主线程消息
    var countRange = oEvent.data;
    var timer = setInterval(function(){
        if(countRange>0){
            countRange-=1000;
            postMessage(countRange);    //给主线程发消息
        }else {
            clearInterval(timer);
            self.close();   //关闭子线程
        }
    },1000);
};
