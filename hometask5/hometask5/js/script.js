let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    promptAsk = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.innerHTML = 'Пятый пункт';

menu.appendChild(menuItemLi);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answ = prompt('Какое у вас отношение к технике Apple?');

promptAsk.textContent = answ;
