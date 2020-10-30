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

    "fe": null
}

Object.keys(obj).forEach(key => {
    console.log(typeof obj[key]);
})


