function eventfun1(self1111) {
    console.log(this) // this mean the whole window
    console.log(self1111) // mean this paramenter
    self1111.style.backgroundColor="green"
}


//there is not onclick function on this div, but use the js
var div3= document.getElementById("box3")
div3.onclick = function () {
    this.style.backgroundColor ="black"
    console.log("box3")
}
// Line-12 将覆盖 Line-8的函数.
// div3.onclick = function () {
//     console.log("box3")
// }

//事件清除.
// div3.onclick = null

//there is not onclick function on this div, but use the js
var div4= document.getElementById("box4")
function listener1 () {
    console.log("box4-1-singleClick")
};
function listener2 () {
    console.log("box4-2-dblclick")
};
div4.addEventListener("click",listener1)
div4.addEventListener("dblclick",listener2)

div4.removeEventListener("click",listener2)
// Line-23 和 Line-20的两个函数都将会执行.


var input1 = document.getElementById("in")
input1.addEventListener("focus",function () {
    console.log("focus!!!!")
})

input1.addEventListener("blur",function () {
    console.log("blur!!!!")
})