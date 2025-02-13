$(document).ready(function() {
    $(".skitter-large").skitter({
dots:false,
    navigation: true
    });
  });


  $(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation : true
    });
   
  });


  



  
// let play = document.getElementById("ladki");
// let girl = document.getElementById("ladki");
// play.onclick = function() {
  
// let vdo = document.querySelector("#vdo");
// girl.style.display="none";
// play.style.display="none";
// vdo.style.display="block";
  
// }



  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navigation:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


const  bus = document.querySelector(".business");
bus.onmouseover = function() {
  let btn = document.querySelector("#btn");
  btn.style.display="block";

  bus.onmouseout = function() {
    btn.style.display = "none";
  }
}


const  chain = document.querySelector(".chain");
chain.onmouseover = function() {
  let chain_btn = document.querySelector("#chain_btn");
  chain_btn.style.display="block";

  chain.onmouseout = function() {
    chain_btn.style.display = "none";
  }
}


const  coin = document.querySelector(".coin");
coin.onmouseover = function() {
  let coin_btn = document.querySelector("#coin_btn");
  coin_btn.style.display="block";

  coin.onmouseout = function() {
    coin_btn.style.display = "none";
  }
}


const  keyboard = document.querySelector(".keyboard");
keyboard.onmouseover = function() {
  let keyboard_btn = document.querySelector("#keyboard_btn");
  keyboard_btn.style.display="block";

  keyboard.onmouseout = function() {
    keyboard_btn.style.display = "none";
  }
}



const  paper = document.querySelector(".paper");
paper.onmouseover = function() {
  let paper_btn = document.querySelector("#paper_btn");
  paper_btn.style.display="block";

  paper.onmouseout = function() {
    paper_btn.style.display = "none";
  }
}



const  tractor = document.querySelector(".tractor");
tractor.onmouseover = function() {
  let tractor_btn = document.querySelector("#tractor_btn");
  tractor_btn.style.display="block";

  tractor.onmouseout = function() {
    tractor_btn.style.display = "none";
  }
}



const  tablet = document.querySelector(".tablet");
tablet.onmouseover = function() {
  let tablet_btn = document.querySelector("#tablet_btn");
  tablet_btn.style.display="block";

  tablet.onmouseout = function() {
    tablet_btn.style.display = "none";
  }
}




