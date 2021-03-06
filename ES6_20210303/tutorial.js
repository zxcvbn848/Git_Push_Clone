// JavaScript ES6 與 React 前端開發：從入門到進階
// https://www.youtube.com/watch?v=8KMIJg6K-AI&list=PL-g0fdC5RMboo-XNa2DzFvYg_9QWBIos6

// 1-JavaScript ES6：宣告 let 變數、const 常數
// JavaScript 以往只能用 var 宣告變數
// JavaScript ES6: let, const
let 變數名稱;
    let x; // 宣告變數 x
    let y = 3; // 宣告變數 y 的同時，指定資料

const 常數名稱 = 常數資料;
const PI = 3.1415926; // 宣告常數 PI，一定要指定資料
// ==========================
// 2-JavaScript ES6：詳解 let、const、var 的差異
// 使用 var 宣告變數：變數的 scope 以「函式區塊」分界
// =======
// in index.js:
// 程式片段一
for (var i = 0; i < 3; i++ ) {
    console.log(i);
}
console.log(i); // 印出 3
// 程式片段二
function test() {
    for (var i = 0; i < 3; i++ ) {
        console.log(i);
    }
}
console.log(i); // 錯誤：找不到變數 i
// =======
// 使用 let 宣告變數：變數的 scope 以「程式區塊( 大括號 {} )」分界
// =======
// in index.js:
// 程式片段一
for (let i = 0; i < 3; i++ ) {
    console.log(i);
}
console.log(i); // 錯誤：找不到變數 i
// 程式片段二
function test() {
    for (let i = 0; i < 3; i++ ) {
        console.log(i);
    }
}
console.log(i); // 還是錯誤：找不到變數 i
// =======
// 使用 const 宣告常數：常數的資料「不能變動」

// var, let, const 差異
var v = 3;
v = "Hello World"; // 變數中的資料可變動

let l; // 宣告變數，可以暫時不給資料
l = 0; // 變數中的資料可變動

const x; // 錯誤：常數宣告時，一定要給資料

const c = 100; // 正確，宣告變數，同時給定資料
c = 50; // 錯誤：不能更動變數中的資料
// ==========================
// 3-JavaScript ES6：箭頭函式 Arrow Function
// JavaScript 傳統使用 function 建立函式
// 現在可使用 => 建立函式

1.(參數列表) => (回傳值)
// 傳統的函式宣告
let add = function(n1, n2) {
    return n1 + n2;
};
// 箭頭函式的寫法一
let add = (n1, n2) => (n1 + n2);

2.(參數列表) => {函式內部程式}
// 傳統的函式宣告
let add = function(n1, n2) {
    return n1 + n2;
};
// 箭頭函式的寫法二
let add = (n1, n2) => {
    return n1 + n2;
};

// 更多的延伸範例：
// =======
// in index.js:
let f = () => (5);
let result = f();
// 請問 result 變數中的資料是？
console.log(result); // 5

let f = (message) => {
    console.log(message);
};
// 請問呼叫 f 函式之後的效果是？
f("Hello, Arrow Function"); // Hello, Arrow Function
// =======

// 匿名函式：無名稱的函式，通常搭配其他功能的函式一起使用
// 在排程中使用「傳統的方式」撰寫「匿名函式」
setTimeout(function() {
    console.log("過了一秒鐘");
}, 1000);
// 在排程中使用「箭頭函式」撰寫「匿名函式」
setTimeout(() => {
    console.log("過了一秒鐘");
}, 1000);
// ==========================
// 4-JavaScript ES6：參數的預設值 Default Parameter
// 傳統方式
function show(message) {
    if (typeof message === "undefined") { // 未給定 message 資料
        message = "預設值";       
    }
    alert(message);
}
show("Hello"); // 顯示：Hello
show(); // 顯示：預設值

// ES6
(name1 = 預設值, name2 = 預設值)
// 若未給定 message 資料，直接採用 = 後方指定的資料
function show(message = "預設值") {
    alert(message);
}
show("Hello"); // 顯示：Hello
show(); // 顯示：預設值

// 也可以使用箭頭函式
let show = (message = "預設值") => {
    alert(message);
};
show("Hello"); // 顯示：Hello
show(); // 顯示：預設值

// 以下各種範例參考
// Example 1:
function multiply(n1, n2 = 1) {
    return n1 * n2;
}
multiply(3, 4); // 回傳 12
multiply(5); // 回傳 5
// Example 1, Arrow function:
let multiply = (n1, n2 = 1) => (n1 * n2);
multiply(3, 4); // 回傳 12
multiply(5); // 回傳 5

// Example 2: 後面的參數可使用前面的參數名稱
function combine(first = "Jedi", last = "Wang", name = first + " " + last) {
    alert(name);
}
combine("Helen", "Li"); // 顯示：Helen Li
combine("Helen"); // 顯示：Helen Wang
combine(); // 顯示：Jedi Wang
// =======
// in index.js:
// ==========================
// 5-JavaScript ES6：類別與物件的基本觀念
// 類別 class：設計圖
// 物件 object：根據設計圖製造出來的實體

// 一個馬克杯「設計圖」，可以用來產生無數個馬克杯「實體」
// 一個「類別」設計，可以用來產生無數個「物件實體」

// 基本類別設計會用到的關鍵字：class, constructor
// 產生物件時體會用到的關鍵字：new
// =======
// in index.js:
// ==========================
// 6-JavaScript ES6：定義類別並產生物件
// 定義類別
class 類別名稱{};
// 建立物件
new 類別名稱{);

// 定義一個類別
class Car{}
// 利用已經定義好的類別，產生新物件
// new Car() 產生新物件，並放進變數 car1 中
let car1 = new Car();
// new Car() 產生新物件，並放進變數 car2 中
let car2 = new Car();
// =======
// in index.js:
// ==========================
// 7-JavaScript ES6：定義建構式 Constructor
//  在類別中定義建構式
constructor(參數列表) {
    建構式的內部程式
}

// 定義一個類別
class Car{
    // 在類別中，定義建構式
    constructor() {
        console.log("建構式被呼叫");
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car(); // new Car() 呼叫建構式，產生新物件
let car2 = new Car(); // new Car() 呼叫建構式，產生新物件

// 建構式：呼叫新物件時，被呼叫的函式
// 若是沒特別寫，內建空白建構式
constructor() {};
// =======
// in index.js:
// ==========================
// 8-JavaScript ES6：定義、存取屬性 Attribute
// 屬性：用來描述物件的個別差異
// 在建構式中建立屬性
constructor(參數列表) {
    this.屬性名稱 = 初始資料;
}

// 定義一個類別
class Car{
    constructor() {
        this.color = "red"; // 建立新屬性 color，指定資料 "red"
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car(); // 新物件擁有 color 屬性，資料為 "red"
let car2 = new Car(); // 新物件擁有 color 屬性，資料為 "red"

// 定義一個類別
class Car{
    constructor(color) {
        // 建立新屬性 color，資料透過參數，彈性的、在建物件時提供
        this.color = color; 
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car("blue"); // 新物件擁有 color 屬性，資料為 "blue"
let car2 = new Car("green"); // 新物件擁有 color 屬性，資料為 "green"

// 存取物件屬性
物件.屬性名稱
物件.屬性名稱 = 新的資料

// 定義一個類別
class Car{
    constructor(color) {
        this.color = color; 
    }
}
// 利用已經定義好的類別，產生新物件
let car1 = new Car("blue"); // 新物件擁有 color 屬性，資料為 "blue"
console.log(car1.color); // 取得屬性資料，印出 "blue"
car1.color = "red"; // 更新屬性資料
console.log(car1.color); // 取得新的屬性資料，印出 "red"
// =======
// in index.js:
// ==========================
// 9-JavaScript ES6：定義、呼叫方法 Method
// 方法：用來描述物件可以做的事 / 與物件綁定的函式
// 在類別中建立方法
方法的名稱(參數列表) {
    內部的程式碼
}

// 定義一個類別
class Car{
    constructor(color) { // 定義建構式
        this.color = color; 
    }
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1 = new Car("blue");

// 呼叫物件方法
物件.方法名稱(參數資料)

// 定義一個類別
class Car{
    constructor(color) {this.color = color;} // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1 = new Car("blue");
car1.run(); // 呼叫 run 方法，執行 run 內部的程式，印出 "Running"

// 在物件方法中使用 this 代表「綁定物件」
// 定義一個類別
class Car{
    constructor(color) {this.color = color;} // 定義建構式
    // 定義一個 run 方法，透過物件呼叫，並執行內部程式碼
    run() {
        console.log("Car " + this.color + " Running");
    }
}
// 產生新物件，物件擁有 color 屬性，與 run 方法
let car1 = new Car("blue");
car1.run(); // 印出 "Car blue Running"

// 物件屬性、方法的綜合操作
// =======
// in index.js:
class Car{
    constructor(color) {
        this.color = color;
        this.speed = 0; // 車子的初始速度固定為 0
    }
    run(speed) {
        this.speed = speed; // 更新車子的速度
        console.log("Car " + this.color + " Running at " + this.speed + " KM/HR");
    }
    stop() {
        this.speed = 0; // 更新車子的速度
        console.log("Car " + this.color + " Stopped");
    }
}
// 產生新物件，物件擁有 color, speed 屬性，與 run, stop 方法
let car1 = new Car("blue");
car1.run(50); // 印出 "Car blue Running at 50 KM/HR"
car1.stop(); // 印出 "Car blue Stopped"
// ==========================
// 10-JavaScript ES6：類別繼承的基本觀念
// 電動車：首先是一台「汽車」，並使用「電能」
// 兒子：繼承「父親」的基因，加入「自我的經驗」
// 子類別：與「父類別」相同，加入「額外的東西」

// 類別繼承會用到的關鍵字
extends, super
// =======
// in index.js:
// ==========================
// 11-JavaScript ES6：定義子類別並操作子類別物件
// 定義子類別
class 子類別名稱 extends 父類別名稱 {}
// 建立子類別物件
new 子類別名稱() 
// 定義子類別建構式
constructor() {
// 一定要先呼叫父類別建構式
    super();
// 子類別建構式中的其他程式
}

// =======
// in index.js:
// 定義一個類別
class Car {
    constructor() {
        console.log("執行父類別建構式，建立基本的 Car 物件");
    }
}
// 定義子類別
class ElectricCar extends Car {
    constructor() {
        super(); // 呼叫父類別建構式
        console.log("繼續執行子類別建構式，衍伸出 ElectricCar 物件");
    }
}
// 產生子類別物件
let car = new ElectricCar();
                        // 執行父類別建構式，建立基本的 Car 物件
                        // 繼續執行子類別建構式，衍伸出 ElectricCar 物件

// 加入 color 屬性
// 定義一個類別
class Car {
    constructor(color) {
        this.color = color; // 定義 color 屬性在父類別中
    }
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); 
    }
}
// 產生子類別物件
let car = new ElectricCar("green");
console.log("車子顏色： " + car.color); // 子類癟物件同樣擁有父類別中定義的「屬性」
                                        // 車子顏色： green

// 加入 run 方法
// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { // 定義 run 方法在父類別中
        console.log("Car " + this.color + " is Running");
    }    
    
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color); 
    }
}
// 產生子類別物件
let car = new ElectricCar("green");
car.run(); // 子類癟物件同樣擁有父類別中定義的「方法」
            // Car green is Running


// 加入 battery 屬性，紀錄電量
// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { console.log("Car " + this.color + " is Running"); }    
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) {
        super(color);
        this.battery = 100; // 衍伸更多子類別、電動車專屬的定義
    }
}
// 產生子類別物件
let car = new ElectricCar("green");
console.log("目前的電量：" + car.battery); // 使用子類別中定義的「屬性」
                                        // 目前的電量：100

// 在子類別中加入 run 方法，「取代」父類別的 run 方法
// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { console.log("Car " + this.color + " is Running"); }    
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) { super(color); this.battery = 100; }
    run(distance) { // 在子類別中定義 run 方法，覆蓋/取代父類別中的「同名方法」
        this.battery -= distance;
        console.log("Car " + this.color + " Runs " + distance + " KM");
    }
}
// 產生子類別物件
let car = new ElectricCar("green");
car.run(10); // 使用子類別中定義的「方法」
console.log("目前的電量：" + car.battery); // 使用子類別中定義的「屬性」
                                        // Car green Runs 10 KM
                                        // 目前的電量：90

// 在子類別中加入專屬的 charge 方法
// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() { console.log("Car " + this.color + " is Running"); }    
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) { super(color); this.battery = 100; }
    run(distance) { // 在子類別中定義 run 方法，覆蓋/取代父類別中的「同名方法」
        this.battery -= distance;
        console.log("Car " + this.color + " Runs " + distance + " KM");
    }
    charge() { // 在子類別中定義專屬的 charge 方法
        this.battery = 100;
    }
}
// 產生子類別物件
let car = new ElectricCar("green");
car.run(10); // 使用子類別中定義的「方法」
car.charge(); // 使用子類別中定義的「方法」
console.log("目前的電量：" + car.battery); // 使用子類別中定義的「屬性」
                                        // Car green Runs 10 KM
                                        // 目前的電量：100
// ==========================
// 12-JavaScript ES6：了解原型鍊 Prototype Chain
// 取得原型物件
Object.getPrototypeOf(物件)

        原型鍊 Prototype Chain
null ⇐ Object (Object 的原型物件)
                ⇑
        Car (車子的原型物件)       ⇐ 車子物件      
// =======
// in index.js:
// 定義一個類別
class Car {
    constructor(color) { this.color = color; }
    run() {}
}
// 產生類別物件
let car = new Car("green");
// 取得並將原型物件顯示出來
let carProto = Object.getPrototypeOf(car); // Car 原型物件
console.log(carProto);
                    // constructor: class Car
                    // run: ƒ run()
                    // __proto__: Object
let objProto = Object.getPrototypeOf(carProto); // Object 原型物件
console.log(objProto);
                    // constructor: ƒ Object()
let lastOne = Object.getPrototypeOf(objProto); // 原型鍊的終點：null
console.log(lastOne); 
                    // null
// =======
// 「繼承關係」中的原型鍊 
        原型鍊 Prototype Chain
null ⇐ Object (Object 的原型物件)
                ⇑
        Car (車子的原型物件)    
                ⇑        
        ElectricCar (電動車的原型物件) ⇐ 車子物件

// 定義一個類別        
class Car {
    constructor(color) { this.color = color; }
    run() {}
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) { super(color); this.battery = 100; }
}
// 產生子類別物件
let car = new ElectricCar("green");
car.run(); // 這個如何運作？
// Ans:
        原型鍊 Prototype Chain
null ⇐ Object (Object 的原型物件)
                ⇑
        Car (車子的原型物件) -- run()
                ⇑        
        ElectricCar (電動車的原型物件) ⇐ 車子物件

// 定義一個類別        
class Car {
    constructor(color) { this.color = color; }
    run() {}
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) { super(color); this.battery = 100; }
    run(distance) {}
    charge() {}
}
// 產生子類別物件
let car = new ElectricCar("green");
car.run(10); // 這個如何運作？
// Ans:
        原型鍊 Prototype Chain
null ⇐ Object (Object 的原型物件)
                ⇑
        Car (車子的原型物件) -- run() // 不會執行
                ⇑        
        ElectricCar (電動車的原型物件) -- run() & charge() ⇐ 車子物件

// 在「物件實體」上，「直接」定義屬性或方法
// =======
// in index.js:
// 定義一個類別        
class Car {
    constructor(color) { this.color = color; }
    run() {}
}
// 定義子類別
class ElectricCar extends Car {
    constructor(color) { super(color); this.battery = 100; }
    run(distance) {}
    charge() {}
}
// 產生子類別物件
let car = new ElectricCar("green");
// 在物件實體上，直接建立方法或屬性
car.name = "Zack's Car";
car.test = function() {
    console.log("建立物件後，在物件實體上新增方法");
    console.log(this.name); // 印出 Zack's Car
};
car.test();
            // 建立物件後，在物件實體上新增方法
            // Zack's Car
// =======
// Ans:
        原型鍊 Prototype Chain
null ⇐ Object (Object 的原型物件)
                ⇑
        Car (車子的原型物件) -- run() // 不會執行
                ⇑        
        ElectricCar (電動車的原型物件) -- run() & charge() ⇐ 車子物件 -- name & test()
// ==========================
// 13-JavaScript ES6：定義、呼叫靜態方法 Static
// 靜態方法：與「類別」綁定的方法

// 在類別中，定義靜態方法
static 方法的名稱(參數列表) {
    內部的程式碼
}
// 呼叫靜態方法
類別名稱.方法名稱(參數列表)

// =======
// in index.js:
class Car {
    constructor(color) { this.color = color; }
    run() { console.log("Car " + this.color + " Running"); }
    static showColors() { // 定義一個靜態方法
        console.log("We support three colors: blue, red, green.");
    }
}
// 直接使用類別名稱，呼叫靜態方法
Car.showColors(); 
            // We support three colors: blue, red, green.
Car.run(); // 錯誤的程式，run 非靜態方法，必須由物件實體呼叫
// 產生新物件實體
let carObj = new Car("blue");
carObj.run(); // 使用物件實體，呼叫物件的方法 run();
            // Car blue Running
carObj.showColors(); // 錯誤的程式，showColors 為靜態方法，必須由類別名稱呼叫
// ==========================
// 14-JavaScript ES6：什麼是非同步程式
// 非同步：程式中【包含子程式】時產生

// 例如：時間排程
// 時間排程是一個【非同步的程式】
// 主程式設定排程後，交由【背景子程式】負責監控時間
window.setTimeout(function() { // 此為回呼函式
    // 兩秒後，【背景子程式】喚醒【主程式】，執行此函式
    alert("兩秒後執行");
}, 2000);
// 主程式設定排程後，立刻往下執行
alert("立刻被呼叫");
// 主程式結束，暫時沒事做

// 例如：Ajax 連線
// Ajax 預設是一個【非同步的程式】
let req = new XMLHttpRequest();
req.open("get", "data.txt");
req.onload = function() {
    // 連線完成後，【背景子程式】觸發【主程式】的 load 事件處理函式
    alert(this.responseText); // 取得伺服器回應
};
// 主程式送出連線後，交由【背景子程式】負責處理連線細節
req.send();
// 主程式送出連線後，立刻往下執行
alert("立刻被呼叫");
// 主程式結束，暫時沒事做
// =======
// in index.js:
// ==========================
// 15-使用回呼函式處理非同步程式
// 使用「回呼函式 」串接非同步流程

function getData(callback) {
    // 2.準備做 Ajax 連線
    let req = new XMLHttpRequest();
    req.open();
    req.onload = function() {
        // 5.等待一段時間後，子程式完成連線，觸發主程式的 load 事件，取得資料
        // 6.呼叫 callback，即透過參數傳入的 showData 函式
        callback(this.responseText);
    };
    req.send(); // 3.送出連線，建立【子程式】進行非同步處理
    // 4.主程式立刻結束函式，回傳 undefined
}

function showData(result) {
    alert(result); // 7.可以從 result 取得連線後得到的資料

}
getData(showData); // 1.呼叫取資料用的函式，並經 showData 函式透過參數傳入
// =======
// in index.js:
// 使用回呼函式前
function getData() {
    let req = new XMLHttpRequest();
    req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
    req.onload = function() {
        alert(this.responseText);
            // ["This is test data.", "React is a good library.", "Give Vanilla JS a try."]
    };
    req.send();
}
let result = getData();
alert(result); 
            // undefined

// 使用回呼函式後
function getData(callback) {
    let req = new XMLHttpRequest();
    req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
    req.onload = function() {
        callback(this.responseText);
    };
    req.send();
}
getData(function(result) {
    alert(result); 
});
            // ["This is test data.", "React is a good library.", "Give Vanilla JS a try."]

// ==========================
// 16-JavaScript ES6：使用 Promise 處理非同步程式
// 使用 Promise 物件串接非同步流程
new Promise(執行函式(成功程序, 失敗程序));
// 使用 then() 方法接續工作
then(
    函式() { 成功時的動作 },
    函式() { 失敗時的動作 }
)
// 使用 catch() 方法「接續失敗處理」
catch(
    函式() { 失敗時的動作 }
)

// 成功時
function getData() {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest(); req.open("get", "data.txt");
        req.onload = function() {
            resolve(this.responseText);
        };
        req.send();
    });
}
// 這是主流程
let dataPromise = getData(); // 嘗試從網路取得資料，回傳 Promise 物件
dataPromise.then(function(result) {
    console.log(result); // 這裡可以從參數 result，正確取得連線後得到的資料
});

// 失敗時
function getData() {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest(); req.open("get", "data.txt");
        req.onload = function() { resolve(this.responseText); };
        req.onerror = function() {
            reject("Error"); // 失敗時，做出失敗宣告
        }
        req.send();
    });
}
// 這是主流程，嘗試從網路取得資料，回傳 Promise 物件，並接續工作
getData().then(function(result) { console.log(result); },
    function(error) {
        // 這裡可以從參數 error，取得失敗報告
        console.log(error);
    }
);
// =======
// in index.js:
