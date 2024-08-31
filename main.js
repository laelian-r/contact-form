const total_select_container = document.querySelector('#total_select_container');
const input_select_1 = document.querySelector('#input_select_1');
const generalEnquiry = document.querySelector('#label_generalEnquiry');
const input_select_2 = document.querySelector('#input_select_2');
const supportRequest = document.querySelector('#label_supportRequest');
let isChecked_1 = false;
let isChecked_2 = false;

generalEnquiry.addEventListener('click', () => {
    input_select_1.classList.add('radio-active');
    input_select_2.classList.remove('radio-active');
    isChecked_1 = true;
});

supportRequest.addEventListener('click', () => {
    input_select_2.classList.add('radio-active');
    input_select_1.classList.remove('radio-active');
    isChecked_2 = true;
});

function selectErr() {
    removeErrorMessages(total_select_container);
    if (isChecked_1 === false && isChecked_2 === false) {
        const err = document.createElement('p');
        err.textContent = 'Please select a query type';
        err.classList.add('select-err-message', 'text-err');
        total_select_container.appendChild(err);
    }
}

const firstName_container = document.querySelector('#firstName_container');
const firstName = document.querySelector('#firstName');
const lastName_container = document.querySelector('#lastName_container');
const lastName = document.querySelector('#lastName');
const email_container = document.querySelector('#email_container');
const emailAddress = document.querySelector('#emailAddress');
const total_message_container = document.querySelector('#total_message_container');
const messageInput = document.querySelector('#messageInput');
const total_consent_container = document.querySelector('#total_consent_container');
const consent = document.querySelector('#consent');
const label_consent = document.querySelector('#label_consent');
const submit = document.querySelector('#submit');

function firstNameErr() {
    removeErrorMessages(firstName_container);
    if (firstName.value.trim() === '') {
        firstName.classList.add('input-err');
        const err = document.createElement('p');
        err.textContent = 'This field is required';
        err.classList.add('text-err');
        firstName_container.appendChild(err);
    }
}

function lastNameErr() {
    removeErrorMessages(lastName_container);
    if (lastName.value.trim() === '') {
        lastName.classList.add('input-err');
        const err = document.createElement('p');
        err.textContent = 'This field is required';
        err.classList.add('text-err');
        lastName_container.appendChild(err);
    }
}

function emailErr() {
    removeErrorMessages(email_container);
    if (emailAddress.value.trim() === '') {
        emailAddress.classList.add('input-err');
        const err = document.createElement('p');
        err.textContent = 'Please enter a valid email address';
        err.classList.add('text-err');
        email_container.appendChild(err);
    }
}

function messageErr() {
    removeErrorMessages(total_message_container);
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('input-err');
        const err = document.createElement('p');
        err.textContent = 'This field is required';
        err.classList.add('text-err');
        total_message_container.appendChild(err);
    }
}

let isChecked = false;
consent.addEventListener('click', () => {
    isChecked = true;
});

label_consent.addEventListener('click', () => {
    isChecked = true;
});

function consentErr() {
    removeErrorMessages(total_consent_container);
    if (isChecked === false) {
        const err = document.createElement('p');
        err.textContent = 'This field is required';
        err.classList.add('text-err');
        total_consent_container.appendChild(err);
    }
}

function removeErrorMessages(container) {
    const existingErrors = container.querySelectorAll('.text-err');
    existingErrors.forEach(error => error.remove());
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    firstNameErr();
    lastNameErr();
    emailErr();
    selectErr();
    messageErr();
    consentErr();

    valid_form();
});




const article = document.querySelector('article');

function valid_form() {
    if (firstName.value.trim() && lastName.value.trim() && emailAddress.value.trim() && isChecked_1 === true || isChecked_2 === true && messageInput.value.trim() && isChecked === true) {
        article.style.display = 'flex';
        article.innerHTML = `
            <h2>Message Sent!</h2>
            <p>Thanks for completing the form. We’ll be in touch soon!</p>
        `;
    }
}
valid_form();