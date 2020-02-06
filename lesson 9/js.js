let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.offsetWidth,
    height = box.offsetHeight;

btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';
});