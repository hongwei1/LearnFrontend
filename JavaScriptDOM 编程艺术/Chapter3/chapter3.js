//3DOM
//3.1 DOM- D(Document) 创建一个网页,加载到 web浏览器,DOM 就有了. Browser change the html to a 
    //    document object. 

//3.2 DOM- O (Object) 
    // user-defined object
    // native object
    // host object  --> webpage document object . 

//3.3 DOM- M (Model)
    //You can treat it as a Map, if you know the Aachen Map, then you can travel the whole
    //Aachen.. So if you have the Model, then you can get the accesses to each item.
    //html --><head 和<body --> <meta, <title,和 <body , <h1, <p, <ul .....
    // all of these will be a note tree.


//3.4 Node. 来自网络,一个网络就是一些节点的集合
    //3.4.1 元素节点: <p>, <body>, <ul> 都是,可以直接通过名字访问
    //3.4.2 文本节点: <p>Don't forget to buy this tuff. </p> 有文本的节点.
            //不是所有 node都有文本的.
    //3.4.3 属性节点:
        //  eg: title 属性,  <p title="a gentle reminder">Don't forget to buy this tuff. </p> 
        //  eg: id 属性,      <ul id="purchases">
        //  eg: class 属性,  <li class="sale">Cheese</li>
    //3.4.4 CSS
        //1 通过节点可以选中,然后改变样式
        //2 inheritance, 子类节点完全集成父类的样式. 
        //3 有时为了区分几个元素与其他元素区分开来,就要用 class和 id 属性.

    //3.4.5 获取元素 3种方式
        //1st. getElementById- document.getElementById("purchases")
        //1st. getElementById
var id33= document.getElementById("purchases");
console.log(typeof id33);
// alert(typeof id33)
        //2rd. document.getElementsByTagName("li")
var tag37 = document.getElementsByTagName("li")
console.log(tag37.length)
console.log(document.getElementsByTagName("*").length)

//组合使用
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*")
console.log(items.length)
        //3rd.  document.getElementsByClassName("special")

var class47 = document.getElementsByClassName("special")
//可以多个 class 一起用的.
document.getElementsByClassName("sale import").length
var sales = shopping.getElementsByClassName("*")

//3.5 获取和设置属性
//3.5.1 getAttribute 不属于 document, 属于 node.
var paras= document.getElementsByTagName("p")
for(var i =0; i < paras.length; i++){
    var title_text = paras[i].getAttribute("title")
    if(title_text) console.info(title_text)
}

//3.5.2 setAttribute


//3.5.1 getAttribute 

















