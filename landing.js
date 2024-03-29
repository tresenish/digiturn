// INTRO
let intro = document.querySelector('.intro-d')
let logo = document.querySelector('.intro-h')
let logoSpan = document.querySelectorAll('.intro-s')

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      },(idx + 1) * 300)
    });
    
    setTimeout(() => {
      logo.classList.add('active');
      }, 2 * 400);
    setTimeout(()=>{
      logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        },0)
      })
    },1500);
    setTimeout(()=>{
      intro.style.top="-100vh";
    },1700)
  })
})

// SCROLLER
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// NAV-Bar for phone
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdown-button');
    const navMenu = document.getElementById('nav-ul-id');
    dropdownButton.addEventListener('click', function() {
        navMenu.classList.toggle('is-visible');
    });
});

//Rotate POLYGONS
window.addEventListener('scroll', function() {
  const polygons = document.querySelectorAll('.pol.section3x');
  const scrollTop = document.documentElement.scrollTop;
  polygons.forEach((polygon, index) => {

    const speedMultiplier = (index + 1) * 3;
    const rotation = (scrollTop / speedMultiplier) % 720;

    polygon.style.transform = `translate(-0%,-50%) rotate(${rotation}deg)`;
  });
});

// BLUE Headings
const pElement = document.getElementById('pBlue');
const anchorElements = document.querySelectorAll('.blueHeadings a');
function updateText(text) {
  pElement.innerHTML = text;
}
function updateActiveClass(clickedId) {
  anchorElements.forEach(anchor => {
    if (anchor.id === clickedId) {
      anchor.classList.add('active');
    } else {
      anchor.classList.remove('active');
    }
  });
}
anchorElements.forEach(anchor => {
  anchor.addEventListener('mouseover', function() {
    switch(this.id) {
      case 'startupsBlue':
        updateText('Empower startups to rapidly build, iterate, and refine products with a focus on user-centered design, enabling them to achieve product-market fit, gain traction, and access early-stage investments.<br><br>We provide startups with the necessary infrastructure, resources,and expertise to accelerate their growth and secure funding.');
        break;
      case 'investorsBlue':
        updateText('We use low-code and no-code tools for application design & development to help investors to reduce development costs,validate ideas with real-world market feedback, and accelerate the growth of their portfolio companies.');
        break;
      case 'sbmsBlue':
        updateText('We design & develop applications that help SMBs optimize operations, automate tasks, and build client-centred solutions that lead to increased revenue and cost savings. We help SMBs to adapt quickly to changing market demands and scale their operations effectively, positioning them for long-term growth and success.');
        break;
      case 'agenciesBlue':
        updateText('Helping agencies to deliver innovative solutions to clients faster, more efficiently, and at a lower cost. We use the most modern development platforms to provide agencies with the abilities to build applications, automate workflows for their clients\' growth.');
        break;
    }
    updateActiveClass(this.id);
  });
});

// Underline blue
document.querySelectorAll('.blueHeadings a').forEach(link => {
  link.addEventListener('mouseover', function() {
      const underline = document.querySelector('.blueHeadings .underline');
      underline.style.width = this.offsetWidth + 'px';
      underline.style.left = this.offsetLeft + 'px';
  });
});



// MAP




