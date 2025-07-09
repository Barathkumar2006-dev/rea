// nav bar scripting 


const toggle = document.querySelector('.toggle')

const menu_bar = document.querySelector('.nav_menu')

toggle.addEventListener('click',()=>{
  toggle.classList.toggle('active')
  menu_bar.classList.toggle('active')
})

//sroll animation 

gsap.registerPlugin(ScrollTrigger);

// Define the layout positions
const positions = [
  { top: "0%", left: "0%", width: "60%", height: "60%", z: 3 },
  { top: "-15%", left: "65%", width: "35%", height: "40%", z: 2 },
  { top: "40%", left: "65%", width: "35%", height: "40%", z: 1 }
];

// Define the rotation order
const orderSets = [
  [0, 1, 2], // Initial
  [2, 0, 1], // After 1st
  [1, 2, 0]  // After 2nd
];

const imageIds = ["#img1", "#img2", "#img3"];

let currentStage = 0;
let rotationsDone = 0;
const totalRotations = 3;
let isAnimating = false;

// Function to rotate images to a specific stage
function rotateTo(stageIndex) {
  const order = orderSets[stageIndex];
  for (let i = 0; i < 3; i++) {
    const el = document.querySelector(imageIds[order[i]]);
    gsap.to(el, {
      top: positions[i].top,
      left: positions[i].left,
      width: positions[i].width,
      height: positions[i].height,
      zIndex: positions[i].z,
      duration: 0.8,
      ease: "power2.inOut"
    });
  }
}

// Function to perform the next rotation
function doNextRotation() {
  if (isAnimating || rotationsDone >= totalRotations) return;
  isAnimating = true;

  currentStage = (currentStage + 1) % 3;
  rotateTo(currentStage);
  rotationsDone++;

  setTimeout(() => {
    isAnimating = false;
    if (rotationsDone < totalRotations) {
      doNextRotation();
    } else {
      document.body.classList.remove("noscroll");
    }
  }, 800);
}

ScrollTrigger.create({
  trigger: "#carouselSection",
  start: "top 27%",
  end: "+=2000",
  pin: true,
  toggleActions: "play none none reverse",
  pinSpacing: true, // add space below when pinning
  scrub: false,
  once: false,

  onEnter: () => {
    document.body.classList.add("noscroll");
    currentStage = 0;
    rotationsDone = 0;
    rotateTo(0);
    doNextRotation();
  },

  onLeave: () => {
    document.body.classList.remove("noscroll");
  },

  onLeaveBack: () => {
    document.body.classList.remove("noscroll");
  }
});



