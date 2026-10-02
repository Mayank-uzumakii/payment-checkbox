const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const checkresult = document.getElementById("checkresult");
const radiobuttonresult = document.getElementById("radiobuttonresult");

mysubmit.onclick = function() {
    if (mycheckbox.checked) {
        checkresult.textContent = "Checkbox is checked";
    } else {
        checkresult.textContent = "Checkbox is not checked";
    }

    if (visabtn.checked) {
        radiobuttonresult.textContent = "Visa is selected for payment";
    }
    else if (mastercardbtn.checked) {
        radiobuttonresult.textContent = "Mastercard is selected for payment";
    }
    else if (paypalbtn.checked) {
        radiobuttonresult.textContent = "Paypal is selected for payment";
    }
    else {
        radiobuttonresult.textContent = "No payment method selected";
    }
}