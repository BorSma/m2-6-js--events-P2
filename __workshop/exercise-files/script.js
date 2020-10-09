// add js here
let checkBox = document.querySelector(".checkbox");
let form = document.querySelector("form");
let clrbtn = document.querySelector(".clear");
let pass = document.querySelector(".pass");
let cpass = document.querySelector(".cpass");
let fix = document.querySelector(".fix");
form.addEventListener("submit", SubmitFunc);
clrbtn.addEventListener("click", clear);

function SubmitFunc(){
    let valid=0;
    if (pass.value.length > 9 && pass.value === cpass.value && checkBox.checked === true) {
        valid=1;
        fix.classList.remove("fixLength", "fixMatch", "fixTerms");
        pass.classList.remove("passRed");
        cpass.classList.remove("passRed");
    }
    else if ( pass.value.length <= 9) { 
        fix.innerHTML = `Password length must be at least 10 characters. How about ${randPass()}?`;
        fix.classList.add("fixLength");
        pass.classList.add("passRed");
        pass.focus();
        event.preventDefault(); 
            }
    else if (pass.value !== cpass.value){
        fix.innerHTML = "Passwords must match.";
        fix.classList.add("fixMatch");
        pass.classList.add("passRed");
        cpass.classList.add("passRed");
        cpass.focus();
        event.preventDefault(); 
            }
    else if (checkBox.checked === false){
        fix.classList.remove("fixLength", "fixMatch");
        pass.classList.remove("passRed");
        cpass.classList.remove("passRed");
        fix.innerHTML = "Please agree to the terms and conditions.";
        fix.classList.add("fixTerms");
        checkBox.focus();
        event.preventDefault(); 
            }   
    if (valid ===1) window.alert("Success");
        

}        

function randPass(){
    let array = ["HorsE", "CaT", "mOOse", "ZeBra", "sLoTh", "HOusE", "dOg", "aPPlE", "OrAnge", "BaNaNa", "BReAd", "sCHool", "bUs", "ChOcoLATE", "POle", "MOUSE", "Fluff", "fISh", "baCKpaCK", "BIke", "SHoe", "GLasses"];
    let rand1 = Math.floor(Math.random() * (array.length-1));
    let rand2 = Math.floor(Math.random() * (array.length-1));
    let newarr = array.filter((element,i) => {
        if (rand1 === i || rand2 ===i) return true;
        else return false;
    });
    return newarr.join("O");
}

function clear(){
    let newarr = document.querySelectorAll("input");
    newarr.forEach(element => {
        element.value = "";
    });
}
