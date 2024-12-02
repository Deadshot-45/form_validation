let form = document.getElementById("form");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let confirm_password = document.getElementById("confirm_password");
let submit_btn = document.getElementById("submit_btn")
let count = 0;

function form_fn(e) {
  e.preventDefault();

  let submit_btn = document.getElementById("submit_btn")
  let username = document.getElementById("f_name").value;
  let mob = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;

  if (
    username == "" ||
    mob == "" ||
    email == "" ||
    password == "" ||
    confirm_password == ""
  ) {
    alert("please fill the deatils");
  }else 
  if (!validate_email || !validate_mobile) {
    alert("enter correct details");
    return;
  } else if (password !== confirm_password) {
    alert("password should match");
    return;
  } else {
    alert("registration successfully");
    

    submit_btn.addEventListener("click", ()=>{
      console.log(username, mob, email, password, confirm_password);
    localStorage.setItem("username", email);
    localStorage.setItem("password", password);
    })

    window.open(`./login.html`);
  window.location.reload();
  }
}


form.addEventListener("submit", form_fn);

let clear_btn = document.getElementById("clear_btn");
clear_btn.addEventListener("click", () => window.location.reset());

function validate_email() {
  let email = document.getElementById("email");
  let error_01 = document.getElementById("error-01");

  if (email.value.length < 8 && email.value.length != 0) {
    error_01.innerHTML = "please enter minimum 8 character";
    email.style.border = "2px solid red";
    return false;
  } else if (email.value.length >= 8) {
    error_01.innerHTML = "";
    email.style.border = "2px solid green";
    return true;
  } else {
    error_01.innerHTML = "";
    email.style.border = "";
  }
  return true;
}

email.addEventListener("keyup", validate_email);

function validate_mobile() {
  let mobile = document.getElementById("mobile");
  let error_02 = document.getElementById("error-02");
  

  if(isNaN(mobile.value)) {
    error_02.innerHTML = "please enter number";
    mobile.style.border = "2px solid red";
    return false;
  }else if(mobile.value === "") {
    error_02.innerHTML = "";
    mobile.style.border = "";
  }
    else if(mobile.value.length != 10 && mobile.value.length != 0) {
      error_02.innerHTML = "please enter 10 digit mobile number";
      mobile.style.border = "2px solid red";
      return false;
    }else if (mobile.value.length == 10 && !isNaN(mobile.value) && mobile.value.length != 0) {
      error_02.innerHTML = "";
      mobile.style.border = "2px solid green";
      return true;
    }
    return true;
}

mobile.addEventListener("keyup", validate_mobile);

function validate_password() {
  let password = document.getElementById("password");
  let confirm_password = document.getElementById("confirm_password");
  let error_03 = document.getElementById("error-03");

  if (
    password.value !== confirm_password.value &&
    confirm_password.value != ""
  ) {
    error_03.innerHTML = "password not match, write correct password";
    password.style.border = "2px solid red";
    confirm_password.style.border = "2px solid red";
    return false;
  } else if (confirm_password.value != "") {
    error_03.innerHTML = "";
    password.style.border = "2px solid green";
    confirm_password.style.border = "2px solid green";
  } else if(confirm_password.value === "") {
    error_03.innerHTML = "";
    password.style.border = "";
    confirm_password.style.border = "";
  }
  return true;
}

confirm_password.addEventListener("keyup", validate_password);
