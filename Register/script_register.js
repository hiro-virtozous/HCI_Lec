const prov = document.getElementById('namaProvinsi');
function showCity(){
    if(prov.value === "0"){
        var city = document.getElementById("kosong")
        city.style.display = "block";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "dki"){
        var city = document.getElementById("dki_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "jawa_barat"){
        var city = document.getElementById("jawa_barat_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("banten_id").style.display = "none";
    } else if(prov.value === "banten"){
        var city = document.getElementById("banten_id")
        city.style.display = "block";
        document.getElementById("kosong").style.display = "none";
        document.getElementById("dki_id").style.display = "none";
        document.getElementById("jawa_barat_id").style.display = "none";
    } 
}


const form = document.getElementById('form');
const errorElement = document.getElementById('error');

function isContainCapital(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= 'A' && c <= 'Z'){
        contain = true
    }
    })

    return contain
}

function isContainNumeric(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= '0' && c <= '9'){
        contain = true
    }
    })

    return contain
}

function isContainLowerCase(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= 'a' && c <= 'z'){
        contain = true
    }
    })

    return contain
}

const handleFormEvent = (event) => { 
    event.preventDefault();
    const passwordElement = document.getElementById('password');
    const confirmPasswordElement = document.getElementById('confirm-password');
    const emailElement = document.getElementById('email');
    console.log(passwordElement)
    console.log(confirmPasswordElement) 
    
    const keongIndex = emailElement.value.indexOf('@')
    const dotIndex = emailElement.value.indexOf('.')
    if(keongIndex == -1){
        errorElement.innerHTML = "Email must contain @"
        return
    }
    if(dotIndex == -1){
        errorElement.innerHTML = "Email must contain ."
        return
    }

    if(dotIndex < keongIndex){
        errorElement.innerHTML = ". must be after @"
        return
    }

    if(confirmPasswordElement.value != passwordElement.value){
        errorElement.innerHTML = "*Passwords are not the same";
        return;
    }
    if(!isContainCapital(passwordElement.value) || !isContainLowerCase(passwordElement.value) || !isContainNumeric(passwordElement.value)){
        errorElement.innerHTML = "Password must contain atleast one lowercase uppercase and number"
        return
    }
    console.log("berhasil");
    errorElement.innerHTML = '';
}

prov.addEventListener("change", showCity);
showCity();
form.addEventListener('submit', handleFormEvent);

