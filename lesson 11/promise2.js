let drink = 1;

function shoot(arrow) {
    console.log('You done shoot...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random()  > .5 ? resolve({}) : reject('You miss');
        }, 3000);
    });

    return promise;

}

function win() {
    console.log('You win');
    (drink == 1) ?  buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('buy beer');
}

function giveMoney() {
    console.log('give money')
}

function loose() {
    console.log('You loose');
}

shoot({})
        .then(mark => console.log('You hit!'))
        .then(win)
        .catch(loose);