const data = {
Donnerstag: ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
Freitag: ["Preacher Curls", "Hammer Curls", "Cable Curls", "Reverse Curls", "Chest Flys", "Butterfly", "Dips"],
Samstag: ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
Sonntag: ["Deadlifts", "Rudern", "TBar Rudern", "Latziehen", "Reverse Butterfly", "Schulterdrücken", "Lateral Raises", "Front Raises"],


Ernaehrung: [
"Wasser", "Protein Shake", "Zinc", "Creatin", "Magnesium", "Ashwaganda", "kein Zucker", "Meal Prep"
]
};


const daySelector = document.getElementById("day-selector");
const exerciseSection = document.getElementById("exercise-section");
const details = document.getElementById("details");


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.getElementById("closeModal");


closeModal.onclick = () => modal.classList.add("hidden");


const days = Object.keys(data);
let currentDay = days[0];


function renderDays() {
daySelector.innerHTML = "";
days.forEach(day => {
const btn = document.createElement("button");
btn.textContent = day;
if (day === currentDay) btn.classList.add("active");
btn.onclick = () => {
currentDay = day;
renderDays();
renderExercises();
};
daySelector.appendChild(btn);
});
}


function renderExercises() {
exerciseSection.innerHTML = `<h2>${currentDay}</h2>`;


const list = data[currentDay];


list.forEach(item => {
const card = document.createElement("div");
card.className = "exercise-card";
card.textContent = item.name || item;


card.onclick = () => {
if (typeof item === "string") {
details.innerHTML = `<p>${item}</p>`;
return;
}


modalImg.src = item.img;
modalTitle.textContent = item.name;
modalDesc.textContent = item.desc;
modal.classList.remove("hidden");
};
exerciseSection.appendChild(card);
});
}


renderDays();
renderExercises();
