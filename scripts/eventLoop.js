//what will be the output

setTimeout(function timeout() {
	console.log('Таймаут');
}, 0);

let p = new Promise(function(resolve, reject) {
	console.log('Создание промиса');
	resolve();
});

p.then(function() {
	console.log('Обработка промиса');
})

console.log('Конец скрипта');

// 'Создание промиса' 'Конец скрипта' 'Обработка промиса' 'Таймаут'

//what will be the output

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1 7 3 5 2 6 4