GitHubCalendar(".calendar", "Sadanand012", {
    responsive: true,
    global_stats: false,
    tooltips: true,
});

const hamburger = document.getElementById("hamburger");
const menulist = document.getElementById("menu-list");

hamburger.addEventListener('click', () => {
    menulist.classList.toggle('show');
});
// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//        event.preventDefault();
//     }
//     if(event.keyCode == 123){
//        event.preventDefault();
//     }
// });