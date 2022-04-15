const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;
  if (name.length === 0) {
    nameError.innerText = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;
  if (phone.length === 0) {
    phoneError.innerText = "Phone is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerText = "Phone should be 10 digits";
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerText = "Only digits please";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById("contact-email").value;
  if (email.length === 0) {
    emailError.innerText = "Email is required";
    return false;
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerText = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const left = required - message.length;
  if (left > 0) {
    messageError.innerText = left + " more charecters required";
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerText = "Please fix error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
