// js code


const header = document.querySelector('header')

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 60)
})

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}; 



// gsap code


var anim = gsap.timeline()
 
 anim.from(".logo",{
  y:-100,
  delay: .63,
  duration: .55, // seconds
  ease: "elastic",
  

})


 anim.from(".navbar",{
  y:-100,
  // delay: 1,
  duration: .33, // seconds
  ease: "power2.inOut",
  
})


 anim.from(".h-right",{
  y:-100,
  // delay: 1,
  duration: .29, // seconds
  ease: "power2.inOut",
  
})

// home section

 anim.from(".home-text   ",{
  x:-720,
  // delay: 1,
  duration: 1, // seconds
  ease: "",
  
})

//  anim.from(".home-text h1",{
//   x:-500,
//   // delay: 1,
//   duration: .29, // seconds
//   ease: "power2.inOut",
  
//  })
//  anim.from(".home-text p",{
//   x:-710,
//   duration: .29, // seconds
//   ease: "power2.inOut",
  
// })




// anim.from(".feature-section ",{
//      x:-1190,
//      duration: 3, // seconds
//      ease: "power2.inOut",
    
//   })