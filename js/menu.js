const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');
let numero = 1;

    btn.addEventListener('click', () => {
        menu.classList.toggle('active')
        if(numero == 1){
            $("body").addClass("no_scroll");
            numero = 2;
        }
        else if(numero==2){
            $("body").removeClass("no_scroll");
            numero = 1;
        }
    })
