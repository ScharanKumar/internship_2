let nameEl = document.getElementById("name")
let genderEl = document.getElementById("gender")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let dName = document.getElementById("dName")
let dGender = document.getElementById("dGender")
let dEmail = document.getElementById("dEmail")
let dMobile = document.getElementById("dMobile")

function showName() {
    dName.textContent = nameEl.value;
}

function showGender() {
    dGender.textContent = genderEl.value;
}

function showEmail() {
    dEmail.textContent = mobileEl.value;
}

function showMobile() {
    dMobile.textContent = mobileEl.value;
}

function resetForm() {
    nameEl.value = "";
    genderEl.value = "";
    emailEl.value = "";
    mobileEl.value = "";
}

function resetDisplay() {
    dName.textContent = "";
    dGender.textContent = "";
    dEmail.textContent = "";
    dMobile.textContent = "";
}