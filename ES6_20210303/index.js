// JavaScript ES6 與 React 前端開發：從入門到進階
// https://www.youtube.com/watch?v=8KMIJg6K-AI&list=PL-g0fdC5RMboo-XNa2DzFvYg_9QWBIos6

// ==========================
// 2-JavaScript ES6：詳解 let、const、var 的差異
// var:
// 程式片段一
/*
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
*/

// let:
/*
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
*/
// ==========================
// 3-JavaScript ES6：箭頭函式 Arrow Function
/*
let f = () => (5);
let result = f();
// 請問 result 變數中的資料是？
console.log(result); // 5
*/

/*
let f = (message) => {
    console.log(message);
};
// 請問呼叫 f 函式之後的效果是？
f("Hello, Arrow Function"); // Hello, Arrow Function
*/
// ==========================
// 9-JavaScript ES6：定義、呼叫方法 Method
/*
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
*/
// ==========================
// 11-JavaScript ES6：定義子類別並操作子類別物件
/*
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
*/

/* 
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
*/

/* 
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
*/

/* 
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
*/

/* 
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
*/

/* 
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
*/
// ==========================
// 12-JavaScript ES6：了解原型鍊 Prototype Chain
/* 
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
*/

/*
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
*/
// ==========================
// 13-JavaScript ES6：定義、呼叫靜態方法 Static
/* 
class Car {
    constructor(color) { this.color = color; }
    run() { console.log("Car " + this.color + " Running"); }
    static showColors() { // 定義一個靜態方法
        console.log("We support three colors: blue, red, green.");
    }
}
// 直接使用類別名稱，呼叫靜態方法
Car.showColors(); // We support three colors: blue, red, green.
Car.run(); // 錯誤的程式，run 非靜態方法，必須由物件實體呼叫
// 產生新物件實體
let carObj = new Car("blue");
carObj.run(); // Car blue Running
carObj.showColors(); // 錯誤的程式，showColors 為靜態方法，必須由類別名稱呼叫
*/
// ==========================
// 15-使用回呼函式處理非同步程式
// 使用回呼函式前
/* 
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
*/

/* 
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
*/
// ==========================
// 16-JavaScript ES6：使用 Promise 處理非同步程式
// 使用 then() 方法接續工作
/* 
function getData() {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
        req.onload = function() {
            resolve(this.responseText);
        };
        req.onerror = function() {
            reject("Error");
        };
        req.send();
    });
}
let promise = getData();
promise.then(function(result) {
    alert(result);
            // ["This is test data.", "React is a good library.", "Give Vanilla JS a try."]
}, function(error) {
    alert(error);
            // Error
});
*/

// 使用 catch() 方法「接續失敗處理」
function getData() {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
        req.onload = function() {
            resolve(this.responseText);
        };
        req.onerror = function() {
            reject("Error");
        };
        req.send();
    });
}
let promise = getData();
promise.then(function(result) {
    alert(result);
            // ["This is test data.", "React is a good library.", "Give Vanilla JS a try."]
}).catch(function(err) {
    alert(err);
            // Error
});
