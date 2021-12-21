//#region who is this?
const myOut = function () {
    return this;
};
const p1 = {
    hobbies: [1, 2, 3],
    my: function () { return this; }, //object
    my2: function () {
        this.hobbies.forEach(v => {
            console.log(this); //object
        });
    },
    my3: function () {
        this.hobbies.forEach(function (v) {
            console.log(this); //
        });
    }
}
const p2 = {
    my: () => this //window
}
const p3 = {
    my: () => { return this; } //window
}
const p4 = {
    my: myOut // object
}
let obj1 = {
    x: 'asd',
    y: 123
}

console.log('func return', p1.my());
console.log('foreach arrow', p1.my2());
console.log('foreach func', p1.my3());
console.log('arrow no block', p2.my());
console.log('arrow block', p3.my());
console.log('seperate func', p4.my());

//#endregion

//#region object copy
let obj2 = obj1; //pointer copy
let obj3 = { ...obj1 }; //value copy
obj1.x = 'bla';

console.log(obj1);
console.log(obj2);
console.log(obj3);
//#endregion

//#region rest: theresr of the argument
function myFunc(a, b, ...manyMoreArgs) {
    // manyMorearguments get all the rest of the arguments
    // must be at the end of the arguments
    console.log(a, b, manyMoreArgs);
}
myFunc(1,2,3,4,5);

// deconstructing assigment
let a, b, rest;
[a, b] = [10, 20];
console.log(a, b); //10 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); // 10 20 array[30, 40, 50]

({a,b} = {a:'aa', b:'bb'});
console.log(a, b); //aa bb
({a,b} = { b:'bb',a:'aa'});
console.log(a, b); //aa bb
({a,b,...rest} = { b:'bb',a:'aa',c:'cc', d:'dd'});
console.log(a, b, rest); //aa bb Object{'cc', 'dd'}
a = 'aaa';
b = 'bbb';
const {a:aa,b:bb,rest:torest} = {a,b,rest};
a = 'aa';
b = 'bb';
rest.c = 'ccc' //show shallow copy -> the cpoy goes only one 
console.log(aa,bb, torest);
console.log(a,b,rest);

// with default value
const {a:da = 10,b:db = 20,rest:drest = [30,40]} = {a,b};
console.log(da,db,drest);

//#endregion


