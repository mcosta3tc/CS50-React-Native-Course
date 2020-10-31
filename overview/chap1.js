//works because of hoisting
console.log(hoistFunction())
//error
//console.log(thisIsNotHoisted())

const a = 1;

const z = "1";

const e = [1];

const r = true;

const t = () => {
    console.log("1")
}

const obj = {
    "a": 1,

    "z": "1",

    "e": [1],

    "r": true,

    "t": () => {
        console.log("1")
    },

    "fe": null,

    obj: {
        key: 'key'
    }
}


const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}


Object.keys(obj).forEach(key => {
    console.log(typeof obj[key]);
})

//A shallow copy refers to the fact that only one level is copied, and that will work fine for an array or object containing only primitive values.
//For objects and arrays containing other objects or arrays, copying these objects requires a deep copy. Otherwise, changes made to the nested references will change the data nested in the original object or array.
function deepCopy(obj) {
    //check if values are objects
    //if so copy that object (deep copy)
    //else return the value

    //get keys of an object
    const keys = Object.keys(obj);


    const newObject = {};

    //check if the value is of an object if so clone that otherwise return that value
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key];
        }
    }

    return newObject;
}

const o3 = deepCopy(o);

o.obj.key = 'new key!'

console.log(o3.obj.key) //log key not new key!


//Prototype inheritance

const arr = [];

arr.push('value');

console.log(arr);

arr.push([2]);

console.log(arr);

//log all the prototype functions arr can use
arr.__proto__


// if you change the prototype it will change ever whats happened
num = 42
console.log(num.toString()) // 42

Number.prototype.toString = function() {return "1000"}

console.log(num) // 42
console.log(num.toString()) // 1000

num2 = 56
console.log(num2) // 56
console.log(num2.toString()) // 1000


//var is declared until the end of the file, but equals to none until the line is set, so if it's called at the beginning undefined =/ undeclared error
//block scopes:
//let until th end {}
//const not to be change later (error)
const obj4 = {}

//works the pointer is still pointing to the same obj, same place in the memory the reference did not change it's just mutated
obj4.a = "e"

//console.log(thisIsAConst) // error undefined, js reads line by line

const thisIsAConst = 50
//isIsAConst++ //error !

let thisIsALet = 50
thisIsALet = 51

//let thisIsALet = 50 // error already exist, cannot declare twice, =/ var that overshadow the old one

var aVar = 51
aVar = 56

console.log(aVar)

var aVar = "updated"

console.log(aVar)

//hoisting
// js take the definition of something and hoists it to the very top of the file and does that first
//vars, functions =/ const and let

function hoistFunction () {
    console.log("I'm at the bottom of the file")
}

//will not work if it's called at the beginning of the file (reference error)
const thisIsNotHoisted = function () {
    console.log('Is it works')
}

//error at the beginning, the variable exist it's undefined it's not a function (type error)
var thisIsNotVarHoisted = function () {
    console.log('Is it works')
}

//Because of how JS works
//1: Read the all file
//puts vars function in memory
//2: execution
//const and let are invoked

//global variable (not var,..)
thisIsGlobal = "hello"


//Global Object like window
//in a a node environment "window" object is replace by "global"