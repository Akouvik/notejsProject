var square = x => x * x;
console.log(square(6));

var user = {
    name: 'akouvi',
    sayHi: () => {
        console.log(arguments);
        console.log(`hi. Im ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi. Im ${this.name}`);
    }
};

user.sayHi(1, 2, 3);