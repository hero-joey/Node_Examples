var color = "red"
var num = 10
var visible = true
console.log(color, num, visible)

if (color == "red")
{
    color = "yello"
    //alert(color)
}

var test = "hi"
console.log(test)
test = 55

var a;
var b = null
console.log(test)
console.log(typeof(test))
console.log(typeof(color))
console.log(typeof(a) )
console.log(a == undefined)
console.log(typeof(b))


var o = new Object()
//对创建对象的函数的引用
console.log(o.constructor())
console.log(o.toString())

var b = Boolean(true)
console.log(b.toString())
console.log(b == true)

var num = new Number(100)
console.log(num)
console.log(num.toFixed(5))
console.log(num.toExponential())

var str = new String("Hello world")
console.log(typeof(str))
console.log(str instanceof String)

function sum(a, b)
{
    return a + b
}

function sayHi()
{
    console.log(arguments.length)
    console.log(arguments[0])
}

//模拟函数重载
function add()
{
    if (arguments.length == 1)
    {
        return arguments[0] + 10;
    }

    if (arguments.length == 2)
    {
        return arguments[0] + arguments[1];
    }
}

console.log(sum(10, 5))
console.log(sum("hello,", "hero"))
sayHi("hello", "hello")
sayHi("hero")
console.log(add(1))
console.log(add(10, 5))

// var sayHello = new Function(caller, message, console.log("hello") + name + message)
// sayHello("hero", "welcome")


//函数是对象，可以由属性和方法
function sayYes()
{
    console.log("Yes")
}

sayYes.arugue = "hero"
sayYes.another = function()
{
    console.log("yes!" + this.arugue)
}

sayYes();
sayYes.another();

var car = new Object()
car.color = "red"
car.brand = "bmw"
car.show = function() 
{
    console.log("wow!" + this.color + " " + this.brand)
}

car.show()

//数组定义
var a = [1, 2, 3]
var b = ["One", 2]
var c = new Array(1, 2, 3, 4, 5)
console.log(a[2], b[1])
console.log(c)

//对象定义
var teacher = {
    name: "hero",
    age:31
}
console.log(teacher)

//异常捕获
try {
    console.log(abc)
} catch (error) {
    console.log("产生了异常")
}
console.log("程序继续运行")

//箭头函数
var func = (city, name) => {
    console.log("Welcome! " + city + " " + name)
}
func("chengdu", "daxiong")

var teacher1 = 
{
    name : "hero",
    age : 32,
    subject : "C++",
    teaching : function() {
        console.log(this.name + " is teaching " + this.subject)
    },

    //this指向的函数在申明时已经确定
    learning : () => {
        console.log(this.name + " is learning " + this.subject)
    }
}

console.log(teacher1.name, teacher1.age, teacher1.subject)
console.log(teacher1["name"], teacher1["age"], teacher1["subject"])
teacher1.teaching()
teacher1["teaching"]()

//不能调用learning, 找不到this
//teacher1.learning()

var teacher2 = {
    name : "lucy",
    age : 25,
    subject : "Python"
}

teacher2.teaching = teacher1.teaching
teacher2.teaching()

teacher2.learning = teacher1.learning

//定义类
class bachlor {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    bachlor() {
        console.log(this.name + " is teaching " + this.subject)
    }
}

var b1 = new bachlor("hero", 31, "python")
var b2 = new bachlor("lucky", 25, "java")
b1.bachlor();
b2.bachlor();

const p = function(){
    let num = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num > 0.5 ? resolve(num) : reject(num);
        }, 1000);
    })
};

p().then(val => {
    console.info(`Status switches to fulfilled, and the value is ${val}`);
}, val => {
    console.info(`Status switches to reject, and the value is ${val}`);
})

var promise = new Promise((resolve, reject) => {
    console.log("耗时任务执行")
    resolve("数据")
})

promise.then((res) => {
    console.log("res")
},
(error) => {
    console.log(error)
})

console.log("Finish")