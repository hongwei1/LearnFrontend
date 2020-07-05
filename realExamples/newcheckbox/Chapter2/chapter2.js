function checkclick(){
    if($("#agree").is(':checked') ){
        $("#agree").attr("checked","unchecked");
        $("#checkimg").css("background-image","none");
    } else{
        $("#agree").attr("checked","checked");
        $("#checkimg").css("background-image","url(status_yes_thick.svg)");
        $("#checkimg").css("background-size","18px");
        $("#checkimg").css("background-position","7px");
        $("#checkimg").css("background-repeat","no-repeat");
    }
}










































































