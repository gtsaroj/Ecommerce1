const cross = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (cross) {
        cross.addEventListener('click', () => {
                nav.classList.add('apple');
        })

}

if (close) {
        close.addEventListener('click', () => {
                nav.classList.remove('apple');
        })

}


