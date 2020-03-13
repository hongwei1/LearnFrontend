console.log("BOM 是操作浏览器和计算机屏幕的对象解集合.")
console.log("DOM 是操作页面的对象.")

//most important 6 objects:
// console.log(window.document) ;// 就是整个 DOM 文件,里面好多操作 DOM 的方法.
// console.log(window.frames);// 浏览器整个框架的集合.
// console.log(window.navigator); //浏览器的信息
// console.log(window.screen) ;//屏幕的信息.
//
// console.log(window.location)//--> 特别要用
// console.log(window.location.href) //we can change the URL and go to the new page.
// // console.log(window.location.assign()) //加载刷新页面
// console.log(window.location.reload()) //刷新页面cmd +R      c
// console.log(window.location.reload(true)) //刷新页面, 从缓存拿数据,不需要重新读取服务器.
// console.log(window.location.replace(true)) //加载新页面,不会在浏览器留下记录


//
// console.log(window.history)
// console.log(window.history.length)
// console.log(window.history.back())
// console.log(window.history.forward())
// console.log(window.history.go(1))
// var count =0;
function forwordToBlue() {
    console.log("click me!!")
    window.location.href = "blue.html"
}

function refresch() {
    console.log("click me!!")
    window.location.reload(true) //Get the content from the cache, not from the server.
}

function assign() {
    console.log("click me!!")
    window.location.assign("blue.html") //Get the content from the cache, not from the server.
}

function replaceToBlue() {
    console.log("click me!!")
    window.location.replace("blue.html") //Get the content from the cache, not from the server.
}


function forwordToRed() {
    console.log("click me!!")
    window.location.href = "red.html"
}


function goToBack() {
    console.log("click me!!")
    window.history.back()
}

function goToForword() {
    console.log("click me!!")
    window.history.forward()
}

function goToHome() {
    console.log(window.history.length)
    window.history.go(-5)
}

function windowOpen() {
    window.open(
        "blue.html",
        "blank", 
        "width=800px, height= 400px, top =0px, left = 200px")
}
function windowClose() {
    window.close()
}

//当页面完全加载成功触发该事件,所以最后执行!!
// window.onload = function () {
//     alert("页面加载成功!!!")
// }

// alert(" 我先执行,气死你 onload !!!")
// BOM 有很多事件驱动,当某些事情发生会执行一些代码.



window.onscroll = function () {
    var a = document.documentElement.scrollTop || document.body.scrollTop
    console.log("页面滚动了!!!!!: "+ a)
}

window.onresize = function () {
    w=document.documentElement.clientWidth || document.body.clientWidth  
    h=document.documentElement.clientHeight|| document.body.clientHeight  
    console.log("why do you change the size?? :( "+w+"," + h+")")
}


//67 定时器
var time;//所有这些都是定义在 window 对象里面的属性.
time = setInterval( function () {
    console.log("This is a good timer !!!"+time +":"+ Date())

}, 2000); //2000ms

//
// function createTimer() {
//     time =window.setInterval( function () {
//         console.log("This is a good timer !!!"+time +":"+ Date())
//
//     }, 2000); //2000ms
// }
//
//
// function clearTimer() {
//     console.log("this is the timer"+time)
//     window.clearInterval(time)
// }


// //设置了时间,只在1s 之后执行一次.
// var time2 = setTimeout(function () {
//     console.log("This is a ok")
// },1000)
// //
//


















