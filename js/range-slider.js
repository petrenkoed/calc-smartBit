let price = []
let priceInput = document.getElementById('price')
let priceOutput = document.getElementById('all-price')

let promotion = document.getElementById("promotion");
let promotionOutput = document.getElementById("promotion-output");
let promotionPrice = document.getElementById('promotion-price')

promotion.addEventListener('input', event => {
    promotionOutput.innerHTML = event.target.value

    if (event.target.value == 0) {
        price[0] = 0
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value
    }
    if (event.target.value > 0) {
        price[0] = 5000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 10) {
        price[0] = 10000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value == 30) {
        price[0] = 15000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }

    promotionPrice.innerText = price[0];
})

let audit = document.getElementById("audit");
let auditOutput = document.getElementById("audit-output");
let auditPrice = document.getElementById('audit-price')


audit.addEventListener('input', event => {
    auditOutput.innerHTML = event.target.value

    if (event.target.value == 0) {
        price[1] = 0
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 0) {
        price[1] = 2000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 5) {
        price[1] = 4000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 10) {
        price[1] = 6000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 15) {
        price[1] = 8000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 20) {
        price[1] = 10000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 25) {
        price[1] = 12000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value == 30) {
        price[1] = 14000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }

    auditPrice.innerText = price[1];

})

let reviews = document.getElementById("reviews");
let reviewsOutput = document.getElementById("reviews-output");
let reviewsPrice = document.getElementById('reviews-price')


reviews.addEventListener('input', event => {
    reviewsOutput.innerHTML = event.target.value

    price[2] = event.target.value * 500;
    priceInput.value = price.reduce((a, b) => b + a)
    priceOutput.innerText = priceInput.value
    reviewsPrice.innerText = price[2]

})

let maintenance = document.getElementById("maintenance");
let maintenanceOutput = document.getElementById("maintenance-output");
let maintenancePrice = document.getElementById('maintenance-price')


maintenance.addEventListener('input', event => {
    maintenanceOutput.innerHTML = event.target.value

    price[3] = event.target.value * 20000;
    priceInput.value = price.reduce((a, b) => b + a)
    priceOutput.innerText = priceInput.value

    maintenancePrice.innerText = price[3]

    let supportContainer = support.parentElement
    let warningMessage = document.createElement('p')

    if (event.target.value > 0) {
        if (document.getElementById('warning-support')) {
            return false
        } else {
            support.setAttribute('style', '--value:0; --min:0; --max:10;')
            support.value = 0
            supportOutput.innerText = '0'
            supportPrice.innerText = '0'
            price[4] = 0
            priceInput.value = price.reduce((a, b) => b + a)
            priceOutput.innerText = priceInput.value

            warningMessage.id = 'warning-support'
            warningMessage.className = 'text-danger'
            warningMessage.innerText = 'Вы выбрали комплексное сопровождение, консультирование входит в этот пакет'
            supportContainer.appendChild(warningMessage)
        }
    } else {
        support.removeAttribute('disabled')
        supportContainer.lastElementChild.remove()
    }



})

let support = document.getElementById("support");
let supportOutput = document.getElementById("support-output");
let supportPrice = document.getElementById('support-price')


support.addEventListener('input', event => {
    supportOutput.innerHTML = event.target.value

    if (maintenance.value > 1) {
        support.value = 0
        supportOutput.innerText = 0
        return
    }

    if (event.target.value == 0) {
        price[4] = 0
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 0) {
        price[4] = 3000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 2) {
        price[4] = 6000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 4) {
        price[4] = 9000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 6) {
        price[4] = 12000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 8) {
        price[4] = 14000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }

    supportPrice.innerText = price[4]
})

let advertising = document.getElementById("advertising");
let advertisingOutput = document.getElementById("advertising-output");
let advertisingPrice = document.getElementById('advertising-price')

advertising.addEventListener('input', event => {
    advertisingOutput.innerHTML = event.target.value

    price[5] = event.target.value * 2000;
    priceInput.value = price.reduce((a, b) => b + a)
    priceOutput.innerText = priceInput.value


    advertisingPrice.innerText = price[5]

})

let design = document.getElementById("design");
let designOutput = document.getElementById("design-output");
let designPrice = document.getElementById('design-price')

design.addEventListener('input', event => {
    designOutput.innerHTML = event.target.value

    if (event.target.value == 0) {
        price[6] = 0
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 1) {
        price[6] = 500
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 5) {
        price[6] = 1000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 10) {
        price[6] = 1500
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 15) {
        price[6] = 2000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 20) {
        price[6] = 2500
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 25) {
        price[6] = 3000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 30) {
        price[6] = 3500
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 35) {
        price[6] = 4000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 40) {
        price[6] = 4500
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }
    if (event.target.value > 45) {
        price[6] = 5000
        priceInput.value = price.reduce((a, b) => b + a)
        priceOutput.innerText = priceInput.value

    }

    designPrice.innerText = price[6]
})

let richContent = document.getElementById("richContent");
let richContentOutput = document.getElementById("richContent-output");
let richContentPrice = document.getElementById('richContent-price')

richContent.addEventListener('input', event => {
    richContentOutput.innerHTML = richContent.value

    price[7] = event.target.value * 1000;
    priceInput.value = price.reduce((a, b) => b + a)
    priceOutput.innerText = priceInput.value


    richContentPrice.innerText = price[7]
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
