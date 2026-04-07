let visitorName = prompt("Hi! What's your name?");
if (!visitorName || visitorName.trim() === "") {
  visitorName = "Guest";
}

const profileSection = document.getElementById("profile");
const greeting = document.createElement("p");
greeting.textContent = `WELCOME, ${visitorName}! 👋`;
greeting.classList.add("greeting");
profileSection.insertBefore(greeting, profileSection.firstChild);



const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



const addSkillBtn = document.getElementById("addSkillBtn");
const newSkillInput = document.getElementById("newSkill");
const skillsList = document.getElementById("skillsList");

addSkillBtn.addEventListener("click", () => {
  const skill = newSkillInput.value.trim();

  if (skill !== "") {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
    newSkillInput.value = "";
  } else {
    alert("Please enter a skill.");
  }
});



const addBtn = document.getElementById("addBtn");
const addProjectInput = document.getElementById("addProject");
const projectList = document.getElementById("projectList");

addBtn.addEventListener("click", () => {
  const projectName = addProjectInput.value.trim();

  if (projectName !== "") {
    const li = document.createElement("li");
    li.textContent = projectName;
    projectList.appendChild(li);
    addProjectInput.value = "";
  } else {
    alert("Please enter a project.");
  }
});



const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    msg.style.color = "green";
    msg.textContent = `Thanks, ${name}! Your message has been sent.`;
    form.reset();
  } else {
    msg.style.color = "red";
    msg.textContent = "Please fill in all fields.";
  }
});