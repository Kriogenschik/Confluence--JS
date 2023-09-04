//What will be the result of accessing the object's ref property? Why?
function makeUser() {
	return {
		name: "John",
		ref: this,
	};
}

let user = makeUser();

alert( user.ref.name );

//error because "this" must be used like part of method;

//create calc
// read()--get two value
// sum() -- +
// mul() -- *

let calculator = {
  read() {
		this.a = +prompt('First number?', 1);
		this.b = +prompt('Second number?', 2);
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//obj ladder
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() {
		alert( this.step );
		return this;
	}
};

// works as
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// implement methods for allowing this calls
// ladder.up().up().down().showStep().down().showStep();

ladder.up().up().down().showStep().down().showStep();