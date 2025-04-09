/* import { protectRoute } from "../../firebase/init";

protectRoute(); */
var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");
        
    menuButton.addEventListener("click", async () => {
        menuButton.classList.toggle("active");
        menuContent.classList.toggle("show");
    });
