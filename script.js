// phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    const phoneNumber = document.getElementById('phone-number');
    phoneInput = phoneNumber.value;
    phoneNumber.value = parseInt(phoneInput) + 1;

    const phoneTotal = document.getElementById('phone-total');
    phoneTotalText = phoneTotal.innerText;
    totalPrice = phoneNumber.value * 1219;
    phoneTotal.innerText = totalPrice;
    sub()
    taxJust()
    total()


})
// phone minus 
document.getElementById('phone-minus').addEventListener('click', function () {
    const phoneNumber = document.getElementById('phone-number');
    phoneInput = phoneNumber.value;
    // console.log(phoneInput);
    if (phoneInput > 0) {
        phoneNumber.value = parseInt(phoneInput) - 1;
        const phoneTotal = document.getElementById('phone-total');
        phoneTotalText = phoneTotal.innerText;
        totalPrice = phoneNumber.value * 1219;
        totalPriceDiv = totalPrice - 1219;
        phoneTotal.innerText = totalPriceDiv;
        phoneTotal.innerText = totalPriceDiv + 1219;
        sub()
        taxJust()
        total()
    }
})

// case plus


document.getElementById('case-plus').addEventListener('click', function () {
    const phoneNumber = document.getElementById('case-number');
    phoneInput = phoneNumber.value;
    phoneNumber.value = parseInt(phoneInput) + 1;

    const phoneTotal = document.getElementById('case-total');
    phoneTotalText = phoneTotal.innerText;
    totalPrice = phoneNumber.value * 59;
    phoneTotal.innerText = totalPrice;
    sub()
    taxJust()
    total()

})

// case minus 

document.getElementById('case-minus').addEventListener('click', function () {
    const phoneNumber = document.getElementById('case-number');
    phoneInput = phoneNumber.value;
    if (phoneInput > 0) {
        phoneNumber.value = parseInt(phoneInput) - 1;
        const phoneTotal = document.getElementById('case-total');
        phoneTotalText = phoneTotal.innerText;
        totalPrice = phoneNumber.value * 59;
        totalPriceDiv = totalPrice - 59;
        phoneTotal.innerText = totalPriceDiv;
        phoneTotal.innerText = totalPriceDiv + 59;
        sub()
        taxJust()
        total()
    }
})

// subtotal
function sub() {
    const phoneTotal = document.getElementsByClassName('phone-class');
    result = 0;
    for (let phoneName of phoneTotal) {
        result = result + parseInt(phoneName.innerText);
    }
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = result;
    return result;

}

// tax 
function taxJust() {
    const tax = document.getElementById('tax');
    totalTax = result * .2;
    tax.innerText = totalTax.toFixed(2);
    sub()
}
function total() {

    const totalAllTax = document.getElementById('total');
    totalAllTax.innerText = result + parseFloat(tax.innerText);

    sub()
}