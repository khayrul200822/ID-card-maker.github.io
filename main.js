
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
const resetButton = document.getElementById("resetButton");


//output elements
const nameOutput =document.getElementById("id_name");
const fatherNameOutput =document.getElementById("id_father_name");
const classNameOutput = document.getElementById("id_class_name");
const birthDayOutput = document.getElementById("id_birthdate");
const bloodGroupOutput = document.getElementById("id_bloodGroup");
const addressOutput = document.getElementById("id_address");
const phoneNumberOutput = document.getElementById("id_contact");
const studentIdImage = document.getElementById("student_image");
const studentIdNo = document.getElementById("uniqId");

let imgOutput;
let imageURL;

// file type input function 
idImageInput.addEventListener("input", () => {
    console.log("File input changed");
    if (idImageInput.files.length) {
       
        let selectedImage = idImageInput.files[0];
        // Create a temporary URL for the selected image
        imageURL = URL.createObjectURL(selectedImage);
       
    } else {
        console.log("No file selected");
    }
});
//rendom number for student uniq id
let randomNumber ;

function getRndInteger(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  getRndInteger(100123, 100999)

//function for form handling
const formHandler = (event) => {
   
    event.preventDefault();
    studentIdNo.textContent = randomNumber;
    nameOutput.textContent = nameInput.value;
    fatherNameOutput.textContent = fatherNameInput.value;
    classNameOutput.textContent = classNameInput.value;
    birthDayOutput.textContent = birthDayInput.value;
    bloodGroupOutput.textContent = bloodGroupInput.value;
    addressOutput.textContent = addressInput.value;
    phoneNumberOutput.textContent = phoneNumberInput.value;
  
    // Set the temporary URL as the src attribute
    studentIdImage.src = imageURL;
    imgOutput = imageURL;

}
const clearData = () => {
    studentIdImage.src = "img/student.png"
    studentIdNo.textContent = "";
    nameOutput.textContent = "";
    fatherNameOutput.textContent = "";
    classNameOutput.textContent = "";
    birthDayOutput.textContent = "";
    bloodGroupOutput.textContent = "";
    addressOutput.textContent = "";
    phoneNumberOutput.textContent = "";
    
}
studentFrom.addEventListener("submit", formHandler);
resetButton.addEventListener("click", clearData)


const downloadButton = document.getElementById('downloadButton');
function generatePDF() {
   print()
  }
  downloadButton.addEventListener("click",generatePDF)