// DOM
//  DOM: 文档对象模型 -- 访问 HTML 和操作 HTML 标准

// Core DOM 
// XML DOM  
// HTML DOM
// 节点分类: 
// 1 文档节点
// 最常用的就3种:
// 2 元素节点 <input> 这个 元素
// 3 属性节点 <input type="text"> 这个type属性
// 4 文本节点 <p> good </p> 这个 good 值就是 text node

// 5 注释节点

/*
 DOM 的层级关系.(DOM 树)
 1: parent node
 2: child node
 3: sibling node
 4: root node <HTML>


JS 的操作
1: 获取节点 -> 修改样式,修改属性
2: 创建节点
3: 删除节点
4: 复制节点 

 */

//下面4种方式,可以拿到你想要的所有元素的节点!!
//1st: get the element by ID
var jsDiv = document.getElementById("idDiv");

console.log(jsDiv)
console.log(typeof jsDiv)

jsDiv.outerHTML // this will show the whole html page...


//2rd get the element by the class.
var jsDivs = document.getElementsByClassName("classDiv")

console.log(jsDivs)
console.log(typeof jsDivs)


//3rd get the element by name
var jsDivsLArr = document.getElementsByName("inputText")


//4th, I want to get all the dive--> Tag name is from document!!!
var jsDivs = document.getElementsByTagName("div");


// 然后拿所有属性节点. --> 属性属于标签,然后在便签里面拿属性.
var js58 = document.getElementById("in");
//1st: 官方定义的属性
js58.type
js58.placeholder
js58.id

var count = 0;
function changePlaceHolder(){
    var newValue = "Love you "+ ++count;
    js58.placeholder= newValue
    js58.value=newValue
    console.log(js58.value)
}
//2rd: getAttribute("my"), 也支持自定义的属性.
js58.getAttribute("my")
js58.setAttribute("my","1231")

function removePlaceHolder(){
    js58.remove()
}

function addAttribute(){
    js58.setAttribute("newOne","newAttribute")
}


//文本节点 --> get the node --> get the text
var js84 = document.getElementById("box")
console.log(js84.textContent)
console.log(js84.innerText)
console.log(js84.innerHTML) //有换行的.从标签开始到结束的所有东西.
console.log(js84.outerHTML) //有换行的.从标签开始到结束的所有东西.包含开始和结束


function addedSth() {
    js84.innerHTML ="<h1> click : "+count++ +"</h1>"
}

//修改 CSS 的样式. 改颜色
var items = ["red","blue","yellow","black"]
function changeColour() {
    js84.style.backgroundColor = items[Math.floor(Math.random()*items.length)];
    js84.style.width ="200px"
    js84.style.height ="200px"
}













































var hongwei = "KIKI"
