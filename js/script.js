
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
    response = await fetch("./json file/skills.json")
    :
    response = await fetch("./json file/projects.json")
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
  showSkills(data);
});
