console.log("Just Checking");
// document.getElementsByClagessName("Spring_summer_head").innerHTML = "Changed" ;
// document.getElementById("Spring_summer_head").innerHTML = "Changed"

// $ (function() {
//     var add = $("button"),
//     $list = $(".my-list");
//     $list.on("click", "delete", function(event) {
    
//   });
//     add.on("click",function(){
//       var text =  $("#new-item").attr('value');
//       var newValue = <li><span>text</span><a href="#" class="delete">[done]</a></li>;
//   $("$list").append(newValue);
//     });
//   });

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