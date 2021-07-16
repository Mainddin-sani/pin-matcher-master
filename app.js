function getInputName(input_id) {
    return document.getElementById(input_id);
}

function getValue() {
    return getInputName('calculate_display');
}
function printValue(num) {
    return getInputName('calculate_display').value = num;
}

function pinGenerate() {
    return getInputName('Pin_matcher').value = Math.floor(Math.random() * 10000);
}

let buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        let clickedButtonValue = e.target.innerText;
        let calculate_num = getInputName('calculate_display').value += clickedButtonValue;
     });
    
}

function pinMatch() {
    let get_Calculate_number = clickedButtonValue;
    console.log(get_Calculate_number);
}

pinMatch();