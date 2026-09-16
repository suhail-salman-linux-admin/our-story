// Step Navigation
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const toStep3 = document.getElementById("toStep3");
const toFinish = document.getElementById("toFinish");

// 1. Dodging "No" button
function dodgeNoButton() {
  const x = Math.floor(Math.random() * 180) - 90;
  const y = Math.floor(Math.random() * 100) - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", dodgeNoButton);
noBtn.addEventListener("touchstart", dodgeNoButton);

// 2. Proposal Accepted -> Move to Step 2
yesBtn.addEventListener("click", () => {
  step1.classList.remove("active");
  step2.classList.add("active");
});

// 3. Date & Time Selection -> Move to Step 3
toStep3.addEventListener("click", () => {
  const dateVal = document.getElementById("dateInput").value;
  const timeVal = document.getElementById("timeInput").value;

  if (!dateVal || !timeVal) {
    alert("Please select both a date and a time! ❤️");
    return;
  }

  step2.classList.remove("active");
  step3.classList.add("active");
});

// 4. Menu Selection -> Move to Step 4 (Summary)
toFinish.addEventListener("click", () => {
  const selectedFoods = Array.from(
    document.querySelectorAll('input[name="food"]:checked')
  ).map((el) => el.value);

  const dateVal = document.getElementById("dateInput").value;
  const timeVal = document.getElementById("timeInput").value;
  const menuVal = selectedFoods.length > 0 ? selectedFoods.join(", ") : "Whatever you order! 😋";

  document.getElementById("summaryDate").innerText = dateVal;
  document.getElementById("summaryTime").innerText = timeVal;
  document.getElementById("summaryMenu").innerText = menuVal;

  step3.classList.remove("active");
  step4.classList.add("active");

  // WhatsApp Share Button Setup
  const sendWhatsApp = document.getElementById("sendWhatsApp");
  sendWhatsApp.addEventListener("click", () => {
    const text = `Hey! I said YES to our date ❤️%0A📅 Date: ${dateVal}%0A⏰ Time: ${timeVal}%0A🍽️ Food: ${menuVal}`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  });
});
