if (!window.jQuery){
    throw new Error("必须提前引入jquery.js");
}
jQuery.fn.Count=function(a){
    var num = a;
    var tipId;
    var self=this;
    this.bind('mousedown', function () {
        var bid=this.id;
        tipId = setInterval(start(bid),1000); //每隔1秒调用一次start()方法
        self.unbind("mousedown");//解绑单击事件
    });
    function start(bid) {
        return function () {
            if (num > 0) {
                var vv = "点下我(" + num + ")";
                $("#"+bid).attr("disabled", "disabled"); //使按钮不能被点击
                $("#"+bid).attr("value", vv); //更改按钮上的文字
                num--;
            } else {
                num = a;
                $("#"+bid).removeAttr("disabled"); //使按钮能够被点击
                $("#"+bid).attr("value", "点下我"); //更改按钮上的文字
                clearInterval(tipId); //清除循环事件
                $("#"+bid).bind("mousedown",function () {//重新绑定单击事件
                    tipId = setInterval(start(bid), 1000); //每隔1秒调用一次start()方法
                    $("#"+bid).unbind("mousedown");
                });
            }
        }
    }
}