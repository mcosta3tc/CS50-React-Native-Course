const a = 1;

const z = "1";

const e = [1];

const r = true;

const t = () => {
    console.log("1")
}

const obj = {
   "a" : 1,

    "z" : "1",

    "e" : [1],

    "r": true,

    "t" : () => {
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

        if(typeof obj[keys[i]] === 'object') {
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