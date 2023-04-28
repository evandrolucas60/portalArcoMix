const bntCD = document.querySelector('#cdBtn');
const bntLoja = document.querySelector('#lojaBtn');


bntCD.addEventListener('click', function () {
    const CDPage = document.querySelector('#CDPage');
    CDPage.classList.toggle('pt-page-current');
    CDPage.classList.toggle('pt-page-ontop');
    CDPage.classList.toggle('pt-page-scaleUp');
})

bntLoja.addEventListener('click', function () {
    const CDPage = document.querySelector('#LojaPage');
    CDPage.classList.toggle('pt-page-current');
    CDPage.classList.toggle('pt-page-ontop');
    CDPage.classList.toggle('pt-page-scaleUpDown');
})