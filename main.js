const nameInput = document.getElementById('name')
const cardName = document.getElementById('card_name')
const numberInput = document.getElementById('number')
const cardNumber = document.getElementById('card_number')
const expMonthInput = document.getElementById('month')
const expMonth = document.getElementById('exp_month')
const expYearInput = document.getElementById('year')
const expYear = document.getElementById('exp_year')
const cvcInput = document.getElementById('cvc')
const cvcNumber = document.getElementById('cvc_number')
const form = document.getElementById('form')
const nameError = document.getElementById('name_error')
const numberError = document.getElementById('number_error')
const expError = document.getElementById('exp_error')
const cvcError = document.getElementById('cvc_error')
const container = document.getElementById('container')
const side = document.getElementById('side')

// Credit card number mask
var patternMask = IMask(numberInput, {
    mask: '**** **** **** ****'
});

// Write only text function
function validarTexto(texto) {
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/
    if (texto.search(patron)) {
        return false
    } else {
        return true
    }
}

// Write only numbers function
function validarNumero(numero) {
    if (!/^([0-9 ])*$/.test(numero)) {
        return false
    } else {
        return true
    }
}

// Write card name function
nameInput.addEventListener('keyup', () => {
    cardName.innerHTML = nameInput.value
})

// Write card number function
numberInput.addEventListener('keyup', () => {
    cardNumber.innerHTML = numberInput.value
})

// Write card expiration month function
expMonthInput.addEventListener('keyup', () => {
    expMonth.innerHTML = expMonthInput.value
})

// Write card expiration year function
expYearInput.addEventListener('keyup', () => {
    expYear.innerHTML = expYearInput.value
})

// Write card cvc number function
cvcInput.addEventListener('keyup', () => {
    cvcNumber.innerHTML = cvcInput.value
})

// Listen form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // Field validations (empty, only letters, only numbers)
    if (nameInput.value === '') {
        nameError.innerHTML = "Can't be blank"
        nameInput.classList.add('input_error')
    } else if (validarTexto(nameInput.value) == false) {
        nameError.innerHTML = "Wrong format, only letters"
    } else if (numberInput.value === '') {
        nameError.innerHTML = ''
        nameInput.classList.remove('input_error')
        numberError.innerHTML = "Can't be blank"
        numberInput.classList.add('input_error')
    } else if (validarNumero(numberInput.value) == false) {
        numberError.innerHTML = "Wrong format, only numbers"
    } else if (expMonthInput.value === '') {
        numberError.innerHTML = ""
        numberInput.classList.remove('input_error')
        expError.innerHTML = "Can't be blank"
        expMonthInput.classList.add('input_error')
    } else if (validarNumero(expMonthInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (expYearInput.value === '') {
        expMonthInput.classList.remove('input_error')
        expError.innerHTML = "Can't be blank"
        expYearInput.classList.add('input_error')
    } else if (validarNumero(expYearInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (cvcInput.value === '') {
        expYearInput.classList.remove('input_error')
        cvcError.innerHTML = "Can't be blank"
        cvcInput.classList.add('input_error')
    } else if (validarNumero(cvcInput.value) == false) {
        cvcError.innerHTML = "Wrong format, only numbers"
    } else {
        cvcError.innerHTML = ""
        cvcInput.classList.remove('input_error')
        container.removeChild(form)
        const newNode = document.createElement('div')
        newNode.classList.add('thankyou')
        container.appendChild(newNode)
        newNode.innerHTML = `
            <figure class="thankyou_img">
                <img src="images/icon-complete.svg" alt="icon complete">
            </figure>
            <section class="thankyou_text">
                <h2 class="thankyou_text_title">THANK YOU!</h2>
                <p class="thankyou_text_parag">We've added your card details</p>
            </section>
            <button class="thankyou_button" id="continue_btn">Continue</button>
        `
        const continueBtn = document.getElementById('continue_btn')
        continueBtn.addEventListener('click', () => {
            window.location.href = 'index.html'
        })
    }

})