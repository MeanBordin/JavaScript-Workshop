const previousOperand = document.querySelectorAll('[data-previous-operand]')
const currentOperand = document.querySelectorAll('[data-current-operand]')
const numberButton = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const allClear = document.querySelectorAll('[data-all-clear]')
const deletedata = document.querySelectorAll('[data-delete]')
const equals = document.querySelectorAll('[data-equals]')
// console.log(numberButton)

class calculatorApp {
    constructor (previousOperand, currentOperand) {
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
    }

    appendNumber (number) {

    }

    getNumberDisplay () {

    }

    showDisplay (currentOperand) {
        this.currentOperand = numberButton
        numberButton.forEach((value)=>{
            value.innerText
        })
    }
}

function run () {
    calculatorApp = new calculatorApp(previousOperand, currentOperand)

    calculatorApp.showDisplay()
}

run()
