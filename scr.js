document.querySelector(".mode").addEventListener("click",function() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
);
function validate() {
    
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    let success_message = document.getElementById("success_message");

    error_message.style.padding = "10px";
    error_message.innerHTML = ""; // Clear previous error messages
    success_message.innerHTML = ""; // Clear previous success message

    let errors = [];

    if (name.length < 1) {
        errors.push("Please Enter a valid Name");
    }
    if (subject.length < 5) {
        errors.push("Please Enter a Correct Subject");
    }
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please Enter a valid Phone Number");
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        errors.push("Please Enter a valid Email");
    }
    if (message.length <= 5) {
        errors.push("Please Enter Valid Information");
    }

    if (errors.length > 0) {
        error_message.innerHTML = errors.join("<br>");
        return false;
    } else {
        // Create a success message element
        const successElement = document.createElement("p");
        successElement.innerHTML = "Form Submitted Successfully!";
        success_message.appendChild(successElement);

        // Clear form fields if needed
        document.getElementById("error_message").style.display="none";
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        return true;
    }
}

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
