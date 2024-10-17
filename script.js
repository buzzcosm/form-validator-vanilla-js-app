const elements = {
  form: document.getElementById('form'),
  password1: document.getElementById('password1'),
  password2: document.getElementById('password2'),
  messageContainer: document.querySelector('.message-container'),
  message: document.getElementById('message'),
};

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = elements.form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    elements.message.textContent = 'Please fill out all fields.';
    elements.message.style.color = 'red';
    elements.messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if passwords match
  if (elements.password1.value === elements.password2.value) {
    passwordsMatch = true;
    elements.password1.style.borderColor = 'green';
    elements.password2.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    elements.message.textContent = 'Make sure passwords match.';
    elements.message.style.color = 'red';
    elements.messageContainer.style.borderColor = 'red';
    elements.password1.style.borderColor = 'red';
    elements.password2.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    elements.message.textContent = 'Successfully Registered!';
    elements.message.style.color = 'green';
    elements.messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: elements.form.name.value,
    phone: elements.form.phone.value,
    email: elements.form.email.value,
    website: elements.form.website.value,
    password: elements.form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
} 

// Event Listeners
elements.form.onsubmit = processFormData;