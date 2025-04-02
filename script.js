const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');

mouseButton.addEventListener('mouseenter', () => {
    mouseMessage.textContent = "Mouse is over the button";
});

mouseButton.addEventListener('mouseleave', () => {
    mouseMessage.textContent = "Mouse left the button";
});

const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

keyInput.addEventListener('keyup', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = "Form submitted successfully";
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = "Input is focused";
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = "Input lost focus";
});

const buttonContainer = document.getElementById('buttonContainer');
const delegateMessage = document.getElementById('delegateMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegateMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});
