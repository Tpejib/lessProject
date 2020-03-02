// localStorage.setItem('number', 1);

// console.log(localStorage.getItem('number'));

// localStorage.clear();

let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error('В этих данных нет имени!');
    }
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`мы получили ошибку: ${error.name}`);
} finally {
    console.log('А я выполнюсь всегда!');
}

console.log('Working!');