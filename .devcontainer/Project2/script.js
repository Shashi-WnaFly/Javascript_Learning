const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let weight = parseInt(document.querySelector('#weight').value);
    let height = parseInt(document.querySelector('#height').value);
    let res = document.querySelector('#res');
    let message = document.querySelector('#message');
    let bmi;

    if (height < 0 || height === "" || isNaN(height)) {
        // res.appendChild(document.createTextNode("Please enter Valid height"));   note:- every click create a text node
        res.innerHTML = "Please enter valid height";
    }
    else if (weight < 0 || weight === "" || isNaN(weight)) {
        // res.appendChild(document.createTextNode("Please enter Valid height"));   note:- every click create a text node
        res.innerHTML = "Please enter valid weight";
    }
    else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        res.innerHTML = `<span>${bmi}</span>`
    }

    if (bmi < 18.6) {
        message.innerHTML = "You Are Under Weight";
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        message.innerHTML = "You Are Normal Weight";
    }
    else if (bmi > 24.9) {
        message.innerHTML = "You Are Over Weight"
    }
})
