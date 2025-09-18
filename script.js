// Example: global vs local scope
let globalCount = 0;

function incrementCounter(step) {
  // local variable
  let result = globalCount + step;
  globalCount = result; 
  return result; // return value
}

// Function to toggle animation on the box
function toggleAnimation(elementId) {
  const box = document.getElementById(elementId);
  box.classList.toggle("animate");
}

// Event listener
document.getElementById("animateBtn").addEventListener("click", () => {
  let newCount = incrementCounter(1);
  console.log("Button clicked:", newCount, "times");
  toggleAnimation("box");
});
