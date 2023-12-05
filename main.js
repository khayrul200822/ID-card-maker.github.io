
//get elements
const nameInput = document.getElementById("fullName");
const fatherNameInput = document.getElementById("fatherName");
const submitButton = document.getElementById("submit_button");
const classNameInput = document.getElementById("className");
const birthDayInput = document.getElementById("birthDay");
const bloodGroupInput = document.getElementById("bloodGroup");
const addressInput = document.getElementById("address");
const phoneNumberInput = document.getElementById("phoneNumber");
const idImageInput = document.getElementById("idProfileImage");
const studentFrom = document.getElementById("studentFrom");

//output elements
const nameOutput =document.getElementById("id_name");
const fatherNameOutput =document.getElementById("id_father_name");
const classNameOutput = document.getElementById("id_class_name");
const birthDayOutput = document.getElementById("id_birthdate");
const bloodGroupOutput = document.getElementById("id_bloodGroup");
const addressOutput = document.getElementById("id_address");
const phoneNumberOutput = document.getElementById("id_contact");
const studentIdImage = document.getElementById("student_image");
let imgOutput;
idImageInput.addEventListener("input", () => {
    console.log("File input changed");
    if (idImageInput.files.length) {
        console.log("File selected:", idImageInput.files[0].name);
        let selectedImage = idImageInput.files[0];
        // Create a temporary URL for the selected image
        const imageURL = URL.createObjectURL(selectedImage);

        // Set the temporary URL as the src attribute
        studentIdImage.src = imageURL;

       
    } else {
        console.log("No file selected");
    }
});
console.log()
const formHandler = (event) => {
    event.preventDefault();
    nameOutput.textContent = nameInput.value;
    fatherNameOutput.textContent = fatherNameInput.value;
    classNameOutput.textContent = classNameInput.value;
    birthDayOutput.textContent = birthDayInput.value;
    bloodGroupOutput.textContent = bloodGroupInput.value;
    addressOutput.textContent = addressInput.value;
    phoneNumberOutput.textContent = phoneNumberInput.value;
    // Save the image URL for later use
    imgOutput = imageURL;


}
studentFrom.addEventListener("submit", formHandler)

