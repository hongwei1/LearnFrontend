// 等所有页面加载完在执行代码. 多个不会覆盖.    
$(document).ready(function () {
    console.log("happy day!!!")
    
    //This can get the DOM object
    var jsDiv = document.getElementById("box1");
    
    
    //JQuery , 链式结构 
    var $jqDiv = $("#box1").html("Hongwei. Come on !!!")
    // $jqDiv.html("Haha...")
    
    //Jq --> Dom
    var jsDiv1 = $jqDiv[0]
    var jsDiv2 = $jqDiv.get(0) 
    
    
    //Dom -->Jq
    var $jqDiv1 = $(jsDiv)
    var $jqDiv2 = $(jsDiv)
    
 })

$(document).ready(function () {
    // # selectors
    // $("#box") // Id 选择器
    // // $("div").html("Come on !!!") // 元素选择器
    // // $(".ap").html("Come on ap!!!") // 类选择器
    // // $(".ap, p").html("fu he selector!!") // fuhe选择器
    // // $("*").html("*****") // *选择器
    //
    // // level selector
    // $("#box3 p").html("sub level !!")  // 所有后代选择器(子孙都有):  匹配 box3 下的所有 p 标签.
    // $("#box3>p").html("only sun level !!")  // 选择器(只有儿子:  匹配 box3 下的所有 p 标签.
    // // $("#box1+div").html("紧挨的兄弟level !!")  //紧挨的兄弟div
    // $("#box1~div").html("所有的兄弟level !!")  //所有的兄弟div
    //
    // // filters
    // //1st: first : 匹配找到的第一个元素,是与选择器结合使用的.
    // $("tr:first") //表格的第一行
    // $("tr:last") //表格的最后一行
    // $("tr:even") //索引值伟偶数的元素
    // $("tr:odd") //索引值为奇数的元素
    // $("div:eq(1)") //匹配一个给定索引值的元素
    // $("span:gt(1)") //匹配索引值个大于给定索引值的元素
    // $("div:lt(2)") // 小于索引值的元素
    // $(".h11:header ").addClass("header") //全部标题元素, 可以组合过滤
    // $("input:not(:checked)") //没有选中的 input 元素
    // $("div:animated") // 正在执行的 div元素
    //
    //
    // // eg:
    // $(".pp:first").html("pp first")
    // $(".pp:last").html("pp last")
    // // $(".pp:eq(1)").html("pp second").addClass("app")
    // //                            添加类!! 删除类
    // $(".pp:even").html("pp even").addClass("app").removeClass("app")
    // $(".pp:odd").html("pp odd")
    //
    // //表单的操作
    // $("input:checked")
    // $("input:disabled")
    // $("input:enabled")
    $("select:selected")
    
    //子元素过滤器
    // $("box2 p:first-child")
    // $("box2 p:last-child")
    
    //内容过滤器
    $("p:contains('hongwei')")// 选出字段有`hongwei` 的 p 标签.
    
    
    
    

    console.log("happy day2!!!")
})

function selectVal(){
    // console.log("*****")
    console.log( $("select option:selected").val())
    console.log( $("select option:selected").text())
   
}
 
//This will be called firstly !!! 
console.log("hongwei")

window.onload = function () {
    console.log("window")
}

// 这个会覆盖 window方法.
window.onload = function () {
    console.log("window1")
}