const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const planner = document.getElementById("datePlanner");
const btnGroup = document.querySelector(".btn-group");
const confirmBtn = document.getElementById("confirmBtn");
const finalMsg = document.getElementById("finalMsg");

// "No" button dodge effect
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// "Yes" reveals details
yesBtn.addEventListener("click", () => {
  btnGroup.classList.add("hidden");
  document.getElementById("question").innerText = "Yay! See you soon 🥰";
  planner.classList.remove("hidden");
});

confirmBtn.addEventListener("click", () => {
  finalMsg.classList.remove("hidden");
});
