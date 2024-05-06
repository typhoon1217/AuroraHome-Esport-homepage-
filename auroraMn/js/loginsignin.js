function showLogin() {
  document.getElementById("login-field").style.display = "block";
  document.getElementById("signup-field").style.display = "none";
}

function showSignup() {
  document.getElementById("login-field").style.display = "none";
  document.getElementById("signup-field").style.display = "block";
}

function submitLoginForm() {
  let LEmail = document.getElementById("login-email").value;
  let SPassword = document.getElementById("login-password").value;
  if (!validateLoginForm(LEmail, SPassword)) {
    return;
  }
  document.getElementById("login-form").submit();
}

function submitSignupForm() {
  let sUsername = document.getElementById("signup-username").value;
  let SEmail = document.getElementById("signup-email").value;
  let SPassword = document.getElementById("signup-password").value;
  let confirmPassword = document.getElementById("signup-confirm-password").value;

  if (!validateSignupForm(sUsername, SEmail, SPassword, confirmPassword)) {
    return;
  }
  document.getElementById("signup-form").submit();
}

function loadStyles(url) {
  document.getElementById("styles").href = url;
}

function validateLoginForm(LEmail, LPassword) {
  // Check if email and password are empty
  if (LEmail.trim() === "" || LPassword.trim() === "") {
    document.getElementById("login-error").innerText =
      "Please enter both email and password."; // 이메일과 비밀번호를 모두 입력해주세요.
    return false;
  }
  // Validate email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(LEmail)) {
    document.getElementById("login-error").innerText =
      "Please enter a valid email addess."; // 이메일 주소를 올바르게 입력해주세요.
    return false;
  }

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(LPassword)) {
    document.getElementById("login-error").innerText =
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."; // 비밀번호는 영어, 숫자, 특수문자, 대문자를 모두 포함하고 6자리 이상이어야 합니다.
    return false;
  }
  // Reset error message if validation passes

  document.getElementById("login-error").innerText = "pass";
  document.getElementById("login-form").submit();
  return true;
}

function validateSignupForm(sUsername, SEmail, SPassword, confirmPassword) {
  // Check if any field is empty
  if (
    sUsername.trim() === "" ||
    SEmail.trim() === "" ||
    SPassword.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    document.getElementById("signup-error").innerText =
      "Please fill in all fields."; // 모든 필드를 입력해주세요.
    return false;
  }
  // Validate email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(SEmail)) {
    document.getElementById("signup-error").innerText =
      "Please enter a valid email format."; // 올바른 이메일 형식이 아닙니다.
    return false;
  }
  // Check if password and confirm password match
  if (SPassword !== confirmPassword) {
    document.getElementById("signup-error").innerText =
      "Password and confirm password do not match."; // 비밀번호와 비밀번호 확인이 일치하지 않습니다.
    return false;
  }
  // Validate password (must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long)
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(SPassword)) {
    document.getElementById("signup-error").innerText =
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."; // 비밀번호는 영어, 숫자, 특수문자, 대문자를 모두 포함하고 6자리 이상이어야 합니다.
    return false;
  }
  // Reset error message if validation passes

  document.getElementById("signup-error").innerText = "pass";
  document.getElementById("signup-form").submit();
  return true;
}
