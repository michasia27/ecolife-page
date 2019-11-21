$('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    
    autoplay:true,
    autoplayTimeout:3000,
         responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});