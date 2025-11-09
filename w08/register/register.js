participantCount = 1;

document.getElementById("add").addEventListener("submit", function (event) {
    

});

document.getElementById("submitButton").addEventListener("submit", function (event) {
    
});

function submitForm(event) {
    event.preventDefault();
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
}