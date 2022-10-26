// <!-- typed js effect starts -->
// var typed = new Typed(".typing-text", {
//     strings: ["Backend Developer"],
//     loop: true,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500,
// });
// <!-- typed js effect ends -->

// GitHubCalendar(".calendar", "Sadanand012");

//     // or enable responsive functionality:
//     GitHubCalendar(".calendar", "Sadanand012", { responsive: true });

//     // Use a proxy
//     GitHubCalendar(".calendar", "Sadanand012", {
//        proxy (Sadanand012) {
//          return fetch(`https://your-proxy.com/github?user=${Sadanand012}`)
//        }
//     }).then(r => r.text())

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