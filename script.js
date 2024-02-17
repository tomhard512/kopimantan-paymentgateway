// event pada saat link diklik
$('.page-scroll').on('click', function(e) {

    // console.log('ok')

    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // console.log($('body').scrollTop());
    // console.log(elemenTujuan.offset().top);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
    // $('html, body').scrollTop(elemenTujuan.offset().top);


    e.preventDefault();
});

// toogle class active untuk hamburger menu
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

// toggle class active untuk seacrh form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();  
};

// toogle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
// const cartItem = document.querySelector('.cart-item');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    // cartItem.focus();
    e.preventDefault();  
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector ('#hamburger-menu');
const sb = document.querySelector ('#search-button');
const sc = document.querySelector ('#shopping-cart-button')

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// modal box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
//     btn.onclick = (e) => {
//         itemDetailModal.style.display = 'flex';
//         e.preventDefault();
//     };
// });

itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};

// klik modal close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik diluar modal
const modal = document.querySelector('#item-detail-modal');
const card = document.querySelector('#item-detail-card');
const model = document.querySelector('#item-detail-model')
window.onclick = (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    } else if(e.target === card) {
        card.style.display = 'none';
    } else if(e.target === model) {
        model.style.display = 'none';
};

// window.onclick = (e) => {
//     if(e.target === itemDetailModal) {
//         itemDetailModal.style.display = 'none';
//     }
// };

// card box
const itemDetailCard = document.querySelector('#item-detail-card');
const itemCardButton = document.querySelector('.item-card-button');

// itemDetailButtons.forEach((btn) => {
//     btn.onclick = (e) => {
//         itemDetailCard.style.display = 'flex';
//         e.preventDefault();
//     };
// });

itemCardButton.onclick = (e) => {
    itemDetailCard.style.display = 'flex';
    e.preventDefault();
};

// klik card close modal
document.querySelector('.card .close-icon').onclick = (e) => {
    itemDetailCard.style.display = 'none';
    e.preventDefault();
};

// klik diluar card
// const card = document.querySelector('#item-detail-card');
// window.onclick = (e) => {
//     if(e.target === card) {
//         card.style.display = 'none';
//     }
// };

// window.onclick = (e) => {
//     if(e.target === itemDetailCard) {
//         itemDetailCard.style.display = 'none';
//     }
// };

// model box
const itemDetailModel = document.querySelector('#item-detail-model');
const itemModelButton = document.querySelector('.item-model-button');

// itemDetailButtons.forEach((btn) => {
//     btn.onclick = (e) => {
//         itemDetailCard.style.display = 'flex';
//         e.preventDefault();
//     };
// });

itemModelButton.onclick = (e) => {
    itemDetailModel.style.display = 'flex';
    e.preventDefault();
};

// klik card close modal
document.querySelector('.model .close-icon').onclick = (e) => {
    itemDetailModel.style.display = 'none';
    e.preventDefault();
};

// klik diluar card
// const card = document.querySelector('#item-detail-card');
// window.onclick = (e) => {
//     if(e.target === card) {
//         card.style.display = 'none';
//     }
// };

// window.onclick = (e) => {
//     if(e.target === itemDetailCard) {
//         itemDetailCard.style.display = 'none';
//     }
// };
};

// (function() {

// })

