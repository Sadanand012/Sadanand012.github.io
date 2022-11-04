// <!-- typed js effect starts -->
// var typed = new Typed(".typing-text", {
//     strings: ["Backend Developer"],
//     loop: true,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500,
// });
// <!-- typed js effect ends -->

window.onload = function(){
    GitHubCalendar(".calendar", "Sadanand012");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Sadanand012", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "Sadanand012", {
       proxy (Sadanand012) {
         return fetch(`https://your-proxy.com/github?user=Sadanand012`)
       }
    }).then(r => r.text())
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
