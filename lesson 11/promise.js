let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('You done shoot...');

    setTimeout(function() {
        Math.random()  > .5 ? headshot({}) : fail('You miss');
    }, 3000);
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

shoot({}, 
        function(mark) {
            console.log('You hit!');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        }
);