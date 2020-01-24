function first() {
    // Что-то делаем
    setTimeout( function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log('I learn ' + lang);
    callback();
}

function done() {
    console.log('I passed 3 lesson!')
}

learnJS('JavaScript', done);