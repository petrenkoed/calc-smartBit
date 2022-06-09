import Swal from '/node_modules/sweetalert2/src/sweetalert2.js'

function serialize(form) {
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);
    return params.toString();
}

document.addEventListener('DOMContentLoaded', function () {

    let form = document.getElementById('calc-form')
    let btnSend = document.getElementById('send')

    form.addEventListener('submit', event => {
        btnSend.setAttribute('disabled', 'disabled')
        btnSend.style.opacity = '0.3'

        let tk = '';
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lc5H1ggAAAAAK998MgK_tIhWcEU5QL4JXEVHvos', {action: 'homepage'}).then(function (token) {
                tk = token;
                document.getElementById('token').value = token

                let data = serialize(document.getElementById('calc-form'))
                axios({
                    method: 'post',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    url: 'includes/captcha.php',
                    data: data
                }).then((response) => {
                    if (response.data.om_score >= 0.5) {
                        axios({
                            method: 'post',
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            url: 'index.php',
                            data: data
                        }).then((res) => {
                            if (res.data.answer === 'OK') {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Вы успешно отправили заявку!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            } else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'Ошибка отправки письма!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                    } else {
                        console.log('bot')
                    }

                }).catch((err) => {
                    console.log(err)
                })

            });
        });

        event.preventDefault()
        event.stopPropagation()
    })


    // tel input mask
    let phoneInputs = document.querySelectorAll('input[data-tel-input]')

    const getInputNumbersValue = (input) => {
        return input.value.replace(/\D/g, "")
    }

    phoneInputs.forEach(input => {

        input.addEventListener('input', event => {
            let input = event.target,
                inputNumbersValue = getInputNumbersValue(input),
                formattedInputValue = "",
                selectionStart = input.selectionStart;

            if (!inputNumbersValue) {
                return input.value = ""
            }


            if (input.value.length != selectionStart) {
                if (event.data && /\D/g.test(event.data)) {
                    input.value = inputNumbersValue
                }
                return
            }

            if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
                // rus
                if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
                let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7"

                formattedInputValue = firstSymbols + " "
                if (inputNumbersValue.length > 1) {
                    formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
                }
                if (inputNumbersValue.length >= 5) {
                    formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
                }
                if (inputNumbersValue.length >= 8) {
                    formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
                }
                if (inputNumbersValue.length >= 10) {
                    formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
                }
            } else {
                // not rus
                formattedInputValue = "+" + inputNumbersValue.substring(0, 16)
            }
            input.value = formattedInputValue
        })

        input.addEventListener('keydown', event => {
            let input = event.target
            if (event.keyCode == 8 && getInputNumbersValue(input).length == 1) {
                input.value = "";
            }
        })

        input.addEventListener('paste', event => {
            let input = event.target
            let pasted = event.clipboardData || window.clipboardData
            let inputNumbersValue = getInputNumbersValue(input)

            if (pasted) {
                let pastedText = pasted.getData("Text")
                if (!/\D/g.test(pastedText)) {
                    input.value = inputNumbersValue
                }
            }
        })

    })


})





