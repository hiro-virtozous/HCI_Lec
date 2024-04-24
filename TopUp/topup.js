// Navbar
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

// Top Up
document.addEventListener("DOMContentLoaded", function () {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
    });
    const nom1 = document.getElementById('nominal1');
    const nom2 = document.getElementById('nominal2');
    const nom3 = document.getElementById('nominal3');
    const nom4 = document.getElementById('nominal4');
    const nom5 = document.getElementById('nominal5');
    const nom6 = document.getElementById('nominal6');

    const nom1_indicator = document.getElementById('nom1_indicator');
    const nom2_indicator = document.getElementById('nom2_indicator');
    const nom3_indicator = document.getElementById('nom3_indicator');
    const nom4_indicator = document.getElementById('nom4_indicator');
    const nom5_indicator = document.getElementById('nom5_indicator');
    const nom6_indicator = document.getElementById('nom6_indicator');

    const met1 = document.getElementById('metode1');
    const met1_indicator = document.getElementById('met1_indicator');

    const nominal_fin = document.getElementById('nominal-final')
    const metode_fin = document.getElementById('metode-pembayaran-final')

    const input_box = document.getElementById('nominal');
    const tulis = document.getElementById('tulisnominal');
    const tulis_indicator = document.getElementById('tulis_indicator');

    const tombol_bayar = document.getElementById('tombolbayar');

    function resetNominal() {
        nom1_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        nom2_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        nom3_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        nom4_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        nom5_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        nom6_indicator.style.backgroundColor = "rgb(126, 126, 126)";
        tulis_indicator.style.backgroundColor = "rgb(126, 126, 126)";
    }

    nom1.addEventListener('click', () => {
        resetNominal();
        nom1_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(50000);
        input_box.value = "";
    });

    nom2.addEventListener('click', () => {
        resetNominal();
        nom2_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(75000);
        input_box.value = "";
    });

    nom3.addEventListener('click', () => {
        resetNominal();
        nom3_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(100000);
        input_box.value = "";
    });

    nom4.addEventListener('click', () => {
        resetNominal();
        nom4_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(150000);
        input_box.value = "";
    });

    nom5.addEventListener('click', () => {
        resetNominal();
        nom5_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(200000);
        input_box.value = "";
    });

    nom6.addEventListener('click', () => {
        resetNominal();
        nom6_indicator.style.backgroundColor = "#1b4248";
        nominal_fin.innerText = "Nominal: " + formatter.format(300000);
        input_box.value = "";
    });

    tulis.addEventListener('click', () => {
        resetNominal();
        tulis_indicator.style.backgroundColor = "#1b4248";
    });

    input_box.addEventListener('keyup', () => {
        nominal_fin.innerText = "Nominal: " + formatter.format(input_box.value);
    });

    met1.addEventListener('click', () => {
        met1_indicator.style.backgroundColor = "#1b4248";
        metode_fin.innerText = "Metode Pembayaran: BCA";
    });

});
