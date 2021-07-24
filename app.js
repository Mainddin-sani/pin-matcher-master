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

let buttons_container = getInputName('buttons-container');
buttons_container.addEventListener('click', function (e) {
    let digit = e.target.innerText
    if (isNaN(digit)) {
        // backspace event handler 
        // clear event handler
    } else {
        getInputName('calculate_display').value = getInputName('calculate_display').value + digit;
    }
})

function verifyButton() {
    let pin = getInputName('Pin_matcher').value;
    let calculate_pin = getInputName('calculate_display').value;
    if (pin == calculate_pin) {
        let verify_massage = getInputName('PinMatched');
        verify_massage.style.display = 'block';
    } else {
        let verify_massage = getInputName('dontMatch');
        verify_massage.style.display = 'block';
    }
    
}
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function (e) {
//         let clickedButtonValue = e.target.innerText;
//         let calculate_num = getInputName('calculate_display').value += clickedButtonValue;
//      });
// }


