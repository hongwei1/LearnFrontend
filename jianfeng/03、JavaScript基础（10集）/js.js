document.write("Come on!! JavaScript!!")
console.log("This is good test!")
// alert("this is the alart!!")

//These comments, if not run, these will not know, they are wrong !!!
// dynamic language, not compling process.
// </script>
// <!--the script run as the order one by one ..-->
// <script>


document.write("Come on2!! JavaScript!!")
document.write("<h1> Good Boy</h1>") // only this document will render this html stuff.
console.log("This is good test2!")
// alert("this is the alart!!2")

var mum;
num =10
console.log(typeof num) //typeof is not the function ,it is the operator 

num =1.3
console.log(typeof num) //typeof is not the function ,it is the operator 

num ="Godd"
console.log(typeof num) //typeof is not the function ,it is the operator 


console.log(num + "123") // 不写也会默认调用 toString.

var num29= Infinity //if the value is bigger than `1e309`, it will use this one.  
var num30= NaN
var num31= 1e309 //is the biggest number  in Js


console.log(typeof num29) //typeof is not the function ,it is the operator 
console.log(typeof num30) //typeof is not the function ,it is the operator 
console.log(typeof num31) //typeof is not the function ,it is the operator 
console.log(isNaN(NaN)) //NaN 属性是代表非数字值的特殊值。 该属性用于指示某个值不是数字。
//all the three are `number` type. NaN 有传染性,  

 console.log(num) //NaN 属性是代表非数字值的特殊值。 该属性用于指示某个值不是数字。

10/3 // not an interger, it is always float: 3.3333333333333335

var num46 = 10;
var a = num46 ++; //a =10 , 是表达式的值,不是 num46的值.
var num48 = 10;
var b = ++num48;  //a =11 , 是表达式的值,不是 num48的值.


// 三目运算
1+3 ? console.log(1) : console.log(1)

//logic opreate
//and or not
//&&  ||  !

// switch :
switch (7) {
    case 7: console.log("61: "+7);  break;// break 跳出循环和 switch 语句.
    case 7: console.log("62: "+7);  
    case 7: console.log("63: "+7);  
    case 7: console.log("64: "+7);  
    default: console.log("65: "+65)
}

function fuc67(){
    console.log(68)
    console.log(a67) //This will not throw the exception, 变量提升到函数开始..
    var a67;
    a70 = 71; // 在函数中没有用到 var 的变量,默认是全局的!!!!
}


var a75 = fuc67; //把函数名 赋值给一个变量.

a75() //就相当于 fuc67 这个函数了. 
console.log(a70) //if fuc67 执行过,则 a70是有值的.


//匿名函数
 var f = function (a,c) {
    return a+c
 }
 f(123,1231)

//匿名函数做参数
function fun(n1,n2, fc) {
    return fc(n1,n2);
}

var num = fun(1,2, function (a,c){
    {return a+b;}
}
)

console.log("97:"+num);

//即时函数- 定义好函数立马执行.

//就来两个括号,一个是匿名函数,一个放入要调用的参数就好了.就你立马执行.
(
    function (a,c) {
        console.log("104:"+a+c); 
    }
)
// (1,2)

var arr = [1,2,3,4,5]

for (var i in arr){
    console.log("arr[%s] = %d",i, arr[i])
}


 arr.forEach(function (e) {
     console.log(e)
 }) 

arr.push(6)// put to the last
arr.unshift(7) //put the first.
var a122 = arr.pop()
var a123 = arr.shift()
var a124 = arr.join("-")
arr.reverse()
var a126 = arr.slice(1,3)
arr.splice(1,3,10,30)




var arr1 = [11,22,33]

var a134 = arr.concat(arr1) // 两个数组拼接.
var a135 = arr.indexOf(11)
var a136 = arr.lastIndexOf(11)

var a138 = arr.sort().reverse();
var a139 = arr.sort(function (x,y) {
    return x<y
})

// console.log(parseInt(Math.random()*(y -x +1))+x)
console.log(parseInt(Math.random()*(100 -0 +1))+0) //0-100















































































































































































