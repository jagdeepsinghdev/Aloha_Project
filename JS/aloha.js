// nav bar variable
var nav = $("#_header");



//    hide counter div on cart
$(".counter").hide();



// carousel

$(document).ready(function() {
  

  let interval = window.setInterval(rotateSlides, 3000);

  function rotateSlides() {
    $("#carousel ul").animate({ marginLeft: -480 }, 1000, function() {
      $(this)
        .find("li:last")
        .after($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    });
  }

  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true
  });
});

// Email Validation

let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

$("#subscribeButton").click(function() {
  let email = $("#emailTextField").val();
  let emailVail = emailReg.test(email);

  if (email === "") {
    // alert("Please enter your email.");
    Swal("Please enter your email.");
  } else if (emailVail) {
    swal({
      type: "success",
      title: "You have subscribed sucessfully",
      showConfirmButton: false,
      timer: 1500
    });

    $("#emailTextField").val("");
  } else {
    Swal("Oops...", "Please check your email", "error");
    // alert("")
  }
});

//------------------------------- Add to Cart Function

var counter = 0;

$(".cartButton").click(function() {
  $(".counter").show();
  counter += 1;
  $(".counter").text(counter);
  swal({
    type: "success",
    title: "Item added to cart sucessfully",
    showConfirmButton: false,
    timer: 1500
  });
});

// --------------------------------Smooth Scrolling

$(document).on("click", "a", function(e) {
  // target element id
  var id = $(this).attr("href");
  console.log(id);
  // target element
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 70
    },
    1000
  );
  
  e.preventDefault();
});

//   --------------------------------Manage_header_along_with_scrolling_
// var prev = 0;
// var $window = $(window);


// $window.on("scroll", function() {
//   // console.log("scrolling")

//   var scrollTop = $window.scrollTop();

//   // console.log(scrollTop)
//   if (scrollTop > prev) {
//     if (scrollTop > 250) {
//       nav.hide();
//     }

//     //   console.log("true")
   
//   } else {
//     nav.show();
//     // console.log("false")
//   }
//   prev = scrollTop;
//   //   console.log(prev)
// });
