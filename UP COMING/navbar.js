const userclick = document.getElementById('user-click');
const subMenu = document.getElementById('acc-menu');
const acc = document.getElementById('account');
const login = document.getElementById('Login');
const register = document.getElementById('Regis');
const topup = document.getElementById('Tops');

let isSubMenuOpen = false;

userclick.addEventListener('click', () => {
    if (!isSubMenuOpen) {
        subMenu.style.transition = '1s';
        subMenu.style.height = '150px';
        acc.style.height = '100%';
        login.style.height = '100%';
        register.style.height = '100%';
        topup.style.height = '100%';
    } else {
        subMenu.style.transition = '0.5s';
        subMenu.style.height = '0';
        acc.style.height = '0';
        login.style.height = '25%';
        register.style.height = '25%';
        topup.style.height = '25%';        
    }
    isSubMenuOpen = !isSubMenuOpen;
});