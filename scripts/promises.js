//What will the code below output and why?

let promise = new Promise(function(resolve, reject) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// 1, because working only first 'resolve' in Promise

//create equivalent setTimeout
//delay should return promise which get done state after seted time

function delay(ms) {
	return new Promise (resolve => setTimeout(resolve, ms))
};

delay(3000).then(() => alert('done after 3 sec'));