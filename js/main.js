// Burger menu
const burgerMenu = document.querySelector(".bars-menu");
let line1 = document.querySelector(".line1__bars-menu");
let line2 = document.querySelector(".line2__bars-menu");
let line3 = document.querySelector(".line3__bars-menu");
let navigation = document.querySelector(".Nav");
let visibleCard;

burgerMenu.addEventListener("click", () => {
  animateBars();
  displayNav();
  disableScroll();
});

function animateBars() {
  line1.classList.toggle("activeline1__bars-menu");
  line2.classList.toggle("activeline2__bars-menu");
  line3.classList.toggle("activeline3__bars-menu");
}

function displayNav() {
  navigation.classList.toggle("nav-active");

  let navActiveLinks = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navActiveLinks.length; i++) {
    navActiveLinks[i].addEventListener("click", () => {
      navigation.classList.remove("nav-active");
      document.body.classList.remove("stop-scrolling");

      line1.classList.remove("activeline1__bars-menu");
      line2.classList.remove("activeline2__bars-menu");
      line3.classList.remove("activeline3__bars-menu");
    });
  }
}

// No scroll While burgerMenu is active

function disableScroll() {
  document.body.classList.toggle("stop-scrolling");
}

// Arrow display when scrolling

let calcScrollValue = () => {
  let arrow = document.getElementById("Arrow");
  let pos = document.documentElement.scrollTop;
  if (pos > 400) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
  arrow.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Road map
const circles = document.querySelectorAll("[data-modal-id]");

circles.forEach(circle => {
  circle.addEventListener("click", ()=> {
    const modalId = circle.dataset.modalId;
    const modal = document.getElementById(modalId);
    let roadMap = document.getElementById("RoadMap");

    modal.classList.toggle("showRoadMapCard");
    roadMap.style.display = "none"
  })
})

// Arrow Back
let arrowBack = document.querySelectorAll(".arrow-back");

for (let i = 0; i < arrowBack.length; i++) {
  arrowBack[i].addEventListener("click", () => {
    let roadMap = document.getElementById("RoadMap");
    
    roadMap.style.display = "block";
  });
}

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400'
})

sr.reveal(`.first-content-text`)
sr.reveal(`.aboutme-text`)
sr.reveal(`.mypicture`)
sr.reveal(`.project-image`)
sr.reveal(`.project-text`)
sr.reveal(`.ca-btn-01`)
sr.reveal(`.ca-btn-02`)
sr.reveal(`.ca-btn-03`)





