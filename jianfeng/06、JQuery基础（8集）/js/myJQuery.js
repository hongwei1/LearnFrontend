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
    // $("p:contains('hongwei')")// 选出字段有`hongwei` 的 p 标签.

    //text 
    //text is no format, only text
    // $("#box3 p").text("<h1> goood </h1>")
    
    // html is the HTML format. 
    // $("#box3 p").html("<h1> This is a good example!! </h1>")
    
    //对元素值的操作 val (input.value. checked.value, select.value, radio.value..
    $("#line20").val("I set the new value")
    var line82 = $("#line20").val()
    console.log(line82)
    
    // $("#line21 #line22 #line23").val(12312)
    $(".line21").val([3])
    $("select").val(["l3","l1"])
    
    // 创建节点
    // var $jsp = $("<p></p>")
    // $("#box3 p").append($jsp)
    //
    // // 文本节点
    // var $jsp = $("<p>This is a p </p>")
    // $("#box3 p").append($jsp)
    
    // 属性节点
    // var $jsp = $("<p title ='go '>This is a p </p>")
    // $("#box3 p").append($jsp)
    
    //插入的方法

    // $("#box3 p").append() // 为内部追加内容
    // $("#box3 p").appendTo()//
    // $("#box3 p").prepend()//
    // $("#box3 p").prependTo()//
    //
    // $("#box3 p").after()
    // $("#box3 p").before()
    //
    //
    // $("#box1").bind("click", function () {
    //     $(this).clone(true).insertAfter($(this))
    // })
    //
    console.log("happy day2!!!")
})

//Dom 加载完毕会调用这个方法.
$(document).ready(function () {
    
//     $("#box2 p").bind("click", function () {
//         console.log($(this).text())
//     })
//
//     $("#box2 p").unbind("click");
//     $("#box1").click(function () {
//         $("#box2 p").append("<p>I am new !!</p>")         
//     })
// //    bind 的问题: 
// //    1 ￿隐式迭代,会把所有匹配的标签都添加事件. 如果有太多标签,会执行太多次...
// //    2 对尚未存在的标签无法绑定事件.
//    
//     $("div").delegate("p","click", function () {
//         $("#box2 p").append("<p>I am new !!</p>")
//     })
//     $("div").undelegate("p", "click");
//    
//     //on 是给父元素绑定事件,然后传递到子级...
//     $("div").on("click", "p", function () {
//         $("#box2 p").append("<p>I am new !!</p>")
//     })
//
//     $("div").off("click", "p")

    //绑定一次事件
    // $("div").one("click", "p", function () {
    //     $("#box2 p").append("<p>I am new !!</p>")
    // })

    // $("div").hover(function () {
    //     console.log("Move in!")
    // },function () {
    //     console.log("Move out!")
    // })

    //ajax
    
    

    // 只能同源访问, 3同: 同协议, 同网址, 同端口
    $("div").hover(function () {
        $.ajax({
            type: "get",
            url:" http://localhost:63342/LearnFrontend/jianfeng/06%E3%80%81JQuery%E5%9F%BA%E7%A1%80%EF%BC%888%E9%9B%86%EF%BC%89/index.html",
            data:{a:1,b:2},
            dataType: "html",
            success: function (data, textStatus) {
                console.log(textStatus)
                console.log(data)

            }
        })
    },null)
});



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