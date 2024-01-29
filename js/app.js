let navbar = $('.navbar')

    $(window).scroll(function(){
        let scrTop  = $(window).scrollTop()
       
        if(scrTop > 300){
            navbar.addClass('fixed')
        } else{
            navbar.removeClass('fixed')
            

        }

    })

let preloader = $('.preloader')

   $(window).on('load',function() {
    preloader.fadeOut(200)

    })

$( function() {
    let hideBtn = $('.hide')

    let img = $('.img')

    hideBtn.click( ()=>{
        img.slideUp(400)
    })

    let showBtn = $('.show')

    showBtn.click(function(){
        img.slideDown(350);
    })

    let toggleBtn = $('.toggle')

    toggleBtn.click( function(){
        img.slideToggle()
    })

})


$( function(){

    let faq = $('#faqWrapper .faq')

    faq.click(function () {

        
         if($(this).hasClass('active')){
            $(this).removeClass("active");
         } else{

             faq.removeClass('active')
             $(this).addClass('active')
         }


    });
})