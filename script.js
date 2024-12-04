let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}  

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}     

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* Delete from Cart */

       // Get references to the elements
       const cartBtn = document.getElementById("cart-btn");
       const closeBtn = document.getElementById("close-form");
       const cartContainer = document.querySelector(".cart-items-container");
       
       // Open cart when cart icon is clicked
       cartBtn.addEventListener("click", () => {
           cartContainer.classList.add("active");
       });
       
       // Close cart when close button is clicked
       closeBtn.addEventListener("click", () => {
           cartContainer.classList.remove("active");
       });
       
       // Get all 'fa-times' icons inside the cart
       const cartItems = document.querySelectorAll(".cart-item .fa-times");
       
       // Loop through each item and add an event listener for removal
       cartItems.forEach(item => {
           item.addEventListener("click", () => {
               const cartItem = item.closest(".cart-item");
               cartItem.remove(); // Remove the cart item from the DOM
           });
       });

/* Delete from Cart end */



/*var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); */