

// Responsive Nav bar add icon
$(".navbar-toggler").click(function () {
  let  result = $(".navbar-collapse").hasClass("show");
  console.log(result)
    if(result){
        $(".menu-icon").removeClass(" fas fa-times").addClass( "fas fa-bars");
    }else {
        $(".menu-icon").removeClass("fas fa-bars").addClass(" fas fa-times");
    }
});
// Responsive Nav bar add icon


let sections = document.querySelectorAll('section');
let navLia = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll',()=>{
    let current ='';
    // console.log(pageYOffset);

    sections.forEach(section=>{
        const  sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }

    })
    //
    navLia.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active');
        }
    })
})




//Back to Top
let myButton = document.getElementById('back-to-top');
window.onscroll = function () {
     dispear();
}

function dispear() {
   if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ){
       // console.log(document.body.scrollTop);
       myButton.style.display = "block";
   }else {
       myButton.style.display ="none";
   }
};

function scrollToTop() {
   document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


new WOW().init();

$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});

