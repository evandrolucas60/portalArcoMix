const bntCD = document.querySelector('#cdBtn');


bntCD.addEventListener('click', function () {
    const CDPage = document.querySelector('#CDPage');
    CDPage.classList.toggle('pt-page-current');
    CDPage.classList.toggle('pt-page-ontop');
    CDPage.classList.toggle('pt-page-scaleUp');
})