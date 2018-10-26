
    
 $('.counter').hide()


// carousel

$(document).ready(function(){
   
    var interval = window.setInterval(rotateSlides, 3000)
    
    function rotateSlides(){
        $("#carousel ul").animate({marginLeft:-480},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
      }
    })

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

        // Email Validation 

        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        
        
      $("#subscribeButton").click(function(){
        let email  = $('#emailTextField').val();
        var emailVail = emailReg.test(email);
        if(emailVail) { 
           alert("You have subscribed sucessfully.")
           $('#emailTextField').val('')
        } else {
            // Swal('Oops...', 'Something went wrong!', 'error')
            alert("Please check your email")
        }
    });
    
    $( document ).ready(function() {    
        var counter = 0
       
        $('.cartButton').click(function() {
            $('.counter').show();
           counter += 1
           $('.counter').text(counter)
        });
    });
    
 
$(document).on('click', 'a', function(e) {
    // target element id
    var id = $(this).attr('href');
    console.log(id);
    // target element
   
    
        $('html, body').animate({
                    scrollTop: $(id).offset().top - 70
                }, 1000); 
    

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

   
});
    $( document ).ready(function() {    
    var prev = 0;
    var $window = $(window);
    var nav = $('#_header');

    $window.on('scroll', function(){
    // console.log("scrolling")
   
    var scrollTop = $window.scrollTop();
  
    // console.log(scrollTop)
    if  (scrollTop > prev) {
      if (scrollTop > 110) {
        nav.hide();
      }
     
    //   console.log("true")
    //   console.log(nav)
  }else {
    nav.show();
    // console.log("false")  
  }
  prev = scrollTop;
//   console.log(prev)
});
 });