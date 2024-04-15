var Btn_box = document.getElementById('Menu_btn_box');
Btn_box.innerHTML = '<i class="fa-solid fa-bars"></i>';
var Btn_counter = 1;
var Low_res_counter = 1;
var Low_res_menu = document.getElementById('Low_res_menu');
var Header = document.querySelector('header');
var Low_res_btn = document.getElementById('Low_res_btn');
var Menu = document.getElementById('Menu');
var Like_box = document.getElementById('Like');
var Cart_box = document.getElementById('Cart');
anime({
    targets:'.Menu_box > ul >li',
    opacity:[0,1],
    translateY:[50,0],
    delay:anime.stagger(100)
})
anime({
    targets:'.User_info_container svg,i',
    scale:[0,1],
    duration:2000
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        Header.style.position = 'fixed'
        Header.style.top = '-200px'
        Header.style.animation = 'Header .5s ease-in-out forwards';
        Like_box.style.visibility = 'hidden'
        Cart_box.style.visibility = 'hidden'
        Low_res_menu.style.top = '80px'
    }
    else { Low_res_menu.style.top = '150px'
        Header.style.animation = ''
        Header.style.top = '0'
        Header.style.position = 'absolute'
        Like_box.style.visibility = 'visible'
        Cart_box.style.visibility = 'visible'
    }

})
Btn_box.addEventListener('click', () => {
    Btn_counter++;
    if (Btn_counter % 2 == 0) {
        Btn_box.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        Menu.style.height = '160px';
        Menu.style.padding = '20px 30px'
    }
    else {
        Btn_box.innerHTML = '<i class="fa-solid fa-bars"></i>';
        Menu.style.height = '0';
        Menu.style.padding = '0'
        Menu.style.padding = '0 30px'
        Low_res_btn.style.transform = 'rotate(0)'
        Low_res_menu.classList.remove('Low_res_active')
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        Low_res_menu.classList.remove('Low_res_active')
        Btn_counter = 1;
        if (Btn_counter % 2 == 0) {
            Btn_box.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            Menu.style.height = '160px';
            Menu.style.padding = '20px 30px'

        }

        else {
            Btn_box.innerHTML = '<i class="fa-solid fa-bars"></i>';
            Menu.style.height = '0';
            Menu.style.padding = '0 30px'
            Low_res_btn.style.transform = 'rotate(0)'

        }
        Menu.style.height = '100%';

    }
    else {
        Menu.style.height = '0';
        Btn_box.innerHTML = '<i class="fa-solid fa-bars"></i>';
        Menu.style.padding = '0 30px'
    }
})


Low_res_btn.addEventListener('click', () => {
    Low_res_counter++;
    if (Low_res_counter % 2 == 0) {
        Low_res_btn.style.transform = 'rotate(90deg)';

        Menu.style.height = '300px'
        Low_res_menu.classList.add('Low_res_active')
    }
    else {
        Low_res_btn.style.transform = 'rotate(0deg)';
        Low_res_menu.classList.remove('Low_res_active')
        Menu.style.height = '160px'
    }
})