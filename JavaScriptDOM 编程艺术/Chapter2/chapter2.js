// 2.2.1 statement
// each line is a statement, end with `;`


// 2.2.2 comments
// 1st just for one line

/*
2rd:
    multipyLines

 */

//2.2.3 variable
// allow to use the variable directly, not need the declare it first
// but it is ok to declare it first.
mood = "happy";
age = 33;
age ="hongwei";
console.log(age);

//But it is better to declare it frist.
var mood = "happy";
var age = 33;

console.log(mood);


//variale names need the smaller and capital cases.
// camel cases are used for methods, functions and object attributes

//2.2.4 data types - weakly typed languages 
// you can change the types whenever you want to 
console.log('dont"t ask');
console.log('dont\'t ask'); //if you really need the ' here, then you can use the backslach to escape it ..
console.log('dont\'t ask'); //if you really need the ' here, then you can use the backslach to escape it ..
// 2.2.4.1 string
// 2.2.4.2 number
var age = 3.14159265359;
var ageNagtive = -3.14159265359;
console.log("please fox these errors");
console.warn(ageNagtive);
//2.2.4.3 Boolean 
var sleeping = true;




//2.2.5 数组
// String, number and boolean are all `scalar` , It can only be one value at any time.
// if you need one varible store lots of values, then use the array

var beatles = Array(4)
var beatles = Array()// there is no need to design the length here.
// populate, index. 
// array[1] = element;
beatles[0] = "John";
beatles[1] = "John1";
beatles[2] = "John2";
beatles[3] = "John3";
console.log(beatles[3]);
var beatles2 = Array("1","2","3")
var beatles3 = ["1","2","3"]
var beatles4 = [1,true,12, "hognwei", beatles3]

//关联数组
var lennon = Array();
//下面实际是添加了对象的属性.
lennon["name"] = "John23"
lennon["year"] = 1940
lennon["living"] = false

console.info(lennon["name"])
console.info(lennon[11])
console.info(lennon.year)
lennon.name
lennon.year

//2.2.6 对象
// 对象也是一个名字表示一组值. 对象的每个值都是一个属性.
var lennon1 = Object();
lennon1.name = "John";
lennon1.year = 1941;
lennon1.living = false;
console.info("line85:  "+lennon1.living)

//2rd: create object the second way:
var l = {name:"john",year:1941, living:false};
console.info(l)

var beatles = {}
beatles.vocalist = lennon;
beatles.vocalist.name
beatles.vocalist.year
beatles.vocalist.living

// 2.3 operation
// 2.3.1 arithmetic operation
1+4
1/4
1 + (4*5)
var temp_fahrenheit = 95;
213+"jpmgwe"

var year = 4
year++
year--
var message = "This year is "
message += year;

// 2.4 conditional statement
if (true) {
    console.log("Good Day !!!")
    console.log("Good Day !!!")
}

//2.4.1 比较操作符
""==false // true, think they are the same
""===false // false, more strictly! value and type!

    
//2.4.2 逻辑操作符
var num =100
if (num >=5 && num <= 10){
    alert("The number is in the right range!")
}

if (num >=5 || num <= 10){
    console.log("This is good "+ num)
}

if (!(num <= 10)){
    console.log("This is good "+ num)
}
//2.5 循环语句
// 2.5.1 while 循环
var count = 1;
while(count < 11){
    console.info(count)
    count++
}
// do while 至少执行一次!!!
do {
    console.info(count)
} while (count <11)

// 2.5.2 for loop
for(var cnt =1 ; cnt < 11; cnt ++){
    console.log(cnt)
}


// 2.6 functions
function shout1() {
    for(var cnt =1 ; cnt < 11; cnt ++){
        console.log(cnt)
    }
}
function shout() {
    for(var cnt =1 ; cnt < 11; cnt ++){
        shout1()
    }
}

shout();
function shout3(name, time) {
    console.info(name +"---" +time)
    return 123
}
shout3("HHH","123")    

//user-defined object
// var hh1 = new Person;
// hh1.age 
// hh1.mood
// hh1.work()
// hh1.study()
//变量下划线,函数用驼峰.

//native object
var bet = new Array();
var bet2 = Array();
bet.length;
bet2.length;

Math.abs(1.333)
Date.now()
    
//host object, not from native javascript, but from tools
//eg1: the browser --> Form, Image, Element..
//eg2: web page  --> document, lots of attributes and methods there. 










































































