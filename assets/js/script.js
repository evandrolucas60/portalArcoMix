window.addEventListener('scroll', () => {
    let header = document.querySelector('#topnav');
            header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    let header = document.querySelector('#topnav');
    let input = document.querySelector('.checkbox');
    if (input.checked) {
        header.classList.toggle('active');
    } else {
        header.classList.remove('active');
    }
    
}