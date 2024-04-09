var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:{delay:2000},
    
    pagination: {
    el: ".swiper-pagination",},

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
});

// const slider2=$('.section-2-slider>div');
// let num=0;


    var stickySwiper = new Swiper(".patch_swiper", {
      slidesPerView: 'auto',
      preventClicks: true,
      preventClicksPropagation: false,
      observer: true,
      observeParents: true,
      loop: true,
      effect : 'fade', 
      watchOverflow : true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (Swiper, current, total) {

          return current + "/" + total;
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          //slidesPerView: 1,
          observer: false,
          observeParents: false,
        },
      },
    });
    var stickySwiper = new Swiper(".event_swiper", {
      slidesPerView: 'auto',
      preventClicks: true,
      preventClicksPropagation: false,
      observer: true,
      observeParents: true,
      loop: true,
      effect : 'fade', 
      watchOverflow : true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (Swiper, current, total) {

          return current + "/" + total;
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          //slidesPerView: 1,
          observer: false,
          observeParents: false,
        },
      },
    });

const notice=$('.section-1-top>p>a');
console.log(notice);
notice.on({
  'mouseenter':function(){
   
    $(this).addClass('on');
  },
  'click':function(e){
    e.preventDefault();
    $(this).addClass('on');
  },
  'mouseleave':function(){
    $(this).removeClass('on');
  },
})
//ajax
const pics = $('.pic');
const lightbox = $('#lightbox');
const lightboxImage = $('#lightboxImage');

pics.on('click', function () {
	const bigLocation = $(this).attr('data-src');
  console.log(bigLocation);
	lightboxImage.load(bigLocation);
  console.log(lightboxImage);
	$('main').addClass('all_scrollFixed');
	lightbox.css('display', 'block');
});

lightbox.on('click', function () {
	lightbox.css('display', 'none');
	$('main').removeClass('all_scrollFixed');
});