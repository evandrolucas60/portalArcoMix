window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
        if (window.innerWidth >= 1000) {
            header.classList.toggle('sticky', window.scrollY > 0)
        } 
})