const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const firstnameerror = document.getElementById("firstnameerror");
const email = document.getElementById("email");
const emailerror = document.getElementById("emailerror");
const radio = document.getElementById("radio");
const radio2 = document.getElementById("radio2");
const queryerror = document.getElementById("queryerror");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const consenterror = document.getElementById("consenterror");
const radioborder = document.getElementById("radioborder");
const radioborder2 = document.getElementById("radioborder2");
const h3mess = document.getElementById("h3mess");
const lastnameerror = document.getElementById("lastnameerror");
const form = document.getElementById("form");
function check() {
  if (firstname.value == "") {
    firstnameerror.innerHTML = "Please Enter Firstname";
    
  } else {
    firstnameerror.innerHTML = null;
  }

  if (lastname.value == "") {
    lastnameerror.innerHTML = "Please Enter Lastname";
    
  } else {
    lastnameerror.innerHTML = null;
  }
  if (email.value == "") {
    emailerror.innerHTML = "Please enter a valid email address";
    
  } else {
    emailerror.innerHTML = null;
  }
  if (!radio.checked && !radio2.checked) {
    queryerror.innerHTML = "Please a select query";
    
  } else {
    queryerror.innerHTML = null;
  }
  if (radio.checked){
    !radio2.checked
  } else{
    radio2.hecked;
  } if (message.value == "") {
    messageerror.innerHTML = "Please state your reason for query";
    
  } else {
    messageerror.innerHTML = null;
  }
  if (!checkbox.checked) {
    consenterror.innerHTML = "Please agree to contact terms";
    
  } else {
    consenterror.innerHTML = null;

    success();
    post();
  }
}

function success() {
  document.getElementById("h3mess").style.visibility = "visible";
  setTimeout(() => {
    form.reset();
  }, 3000);
  setTimeout(() => {
    document.getElementById("h3mess").style.visibility = "hidden";
  }, 6000);
}

//radio2.addEventListener("click", checkbackground)
function checkbackground() {
  if (radio2.checked) {
    radioborder2.style.backgroundColor = "rgb(224, 241, 231)";
  } else {
    radioborder2.style.backgroundColor = null;
  }
  if (radio.checked) {
    radioborder.style.backgroundColor = "rgb(224, 241, 231)";
  } else {
    radioborder.style.backgroundColor = null;
  }
}

function post() {
  const form = document.getElementById("form");
  const formData = new FormData(form);
  var data = Object.fromEntries(formData);
  console.log(JSON.stringify(data));
  //window.location.href = "post.html";
  let Firstname = firstname.value;
  let Lastname = lastname.value;

  localStorage.setItem("first-Name", Firstname);
  localStorage.setItem("last-Name", Lastname);
  console.log(localStorage);
}
