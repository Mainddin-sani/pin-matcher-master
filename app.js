function getInputName(input_id) {
    return document.getElementById(input_id);
}

function generateValue() {
    let random = Math.floor(Math.random() * 10000);
    if (random.toString().length === 4) {
        return random;
    } else {
        console.log(generateValue());
        return generateValue();
    }
}

function pinGenerate() {
     // display set value
     let valueSet = getInputName('Pin_matcher').value = generateValue();
     console.log(valueSet);
}

function correctMassage(correct, incorrect) {
    let Pin_Matched = getInputName('PinMatched');
    Pin_Matched.style.display = correct;
    let dont_Match = getInputName('dontMatch');
    dont_Match.style.display = incorrect;
}

let buttons_container = getInputName('buttons-container');
buttons_container.addEventListener('click', function (e) {
    let digit = e.target.innerText
    if (isNaN(digit)) {
        // backspace event handler 
        if (digit == '<') {
            let pin_history = getInputName('calculate_display').value;
            getInputName('calculate_display').value = pin_history.substr(0, pin_history.length - 1);
        }
        // clear event handler
        if (digit == 'C') {
            getInputName('calculate_display').value = '';
        }
    } else {
        getInputName('calculate_display').value = getInputName('calculate_display').value + digit;
    }
})

function verifyButton() {
    let pin = getInputName('Pin_matcher').value;
    let calculate_pin = getInputName('calculate_display').value;
    if (pin == calculate_pin) {
        correctMassage('block', 'none');
    } else {
        correctMassage('none', 'block');
    }
    
}





