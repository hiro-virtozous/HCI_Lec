const userclick = document.getElementById('user-click');
const subMenu = document.getElementById('acc-menu');

let isSubMenuOpen = false;

userclick.addEventListener('click', () => {
    if (!isSubMenuOpen) {
        subMenu.style.transition = '1s';
        subMenu.style.height = '150px';
    } else {
        subMenu.style.transition = '0.5s';
        subMenu.style.height = '0';
    }
    isSubMenuOpen = !isSubMenuOpen;
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    var arrow = document.querySelector('.arrow');
    
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
        arrow.innerHTML = "&#9652;"; 
    } else {
        dropdownContent.style.display = "none";
        arrow.innerHTML = "&#9662;"; 
    }
}

function changeLocation(location) {
    var locationText = document.getElementById("locationText");
    locationText.textContent = location;
    console.log("Changing location to:", location);
}