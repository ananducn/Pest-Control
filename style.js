const toggleBtn = document.getElementById("toggle-btn");
const navDiv = document.getElementById("responsive-navbar");
const closeBtn = document.getElementById("close-btn");

const toggleNow = () => {
  navDiv.classList.toggle("hidden");
};

toggleBtn.addEventListener("click", toggleNow);

closeBtn.addEventListener("click", toggleNow);
