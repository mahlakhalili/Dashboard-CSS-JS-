let burger_menu = document.querySelector('.burger_menu');
let sidebar     = document.querySelector('aside');
let bgColor     = document.querySelector('.bg_cover')

burger_menu.addEventListener('click',e=>{
    sidebar.classList.add('.d_block')
    bgColor.classList.add('.d_block')
})