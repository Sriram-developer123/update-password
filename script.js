let updatePasswordFormEl = document.getElementById("updatePasswordForm")
let newPasswordEl = document.getElementById("newPassword")
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg")
let confirmPasswordEl = document.getElementById("confirmPassword")
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg")

function validNewPassword(event) {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*"
    } else {
        newPasswordErrMsgEl.textContent = ""
    }
}

function validConfirmPassword() {
    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Password must be same"
    } else {
        confirmPasswordErrMsgEl.textContent = ""
    }
}


newPasswordEl.addEventListener("blur", validNewPassword)
confirmPasswordEl.addEventListener("blur", validConfirmPassword)

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault()
    validNewPassword()
    validConfirmPassword()
})