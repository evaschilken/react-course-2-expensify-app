const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('this is my resolved data');
        reject('404');
    },1500);
});

console.log("before");

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('catched an error here!', error)
});


console.log("after");