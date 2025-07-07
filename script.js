function showbar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
  document.querySelector(".main_bar").style.zIndex = "1";

}

function hidebar(){
   const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
   document.getElementById(".main_bar").style.zIndex = "1000";
}

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
  trigger: "#img3",
  start: "bottom bottom",
  end: "+=2000", 
  toggleActions: "play none none none",
  pinSpacing: true,
  scrub: false,
  once : true,
  onEnter: () => {
    document.body.classList.add("noscroll");
    rotateTo(0);
    doNextRotation();
  },
  onLeave: () => {
    document.body.classList.remove("noscroll");
  }
});
