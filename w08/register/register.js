import { successTemplate, participantTemplate } from "./templates.js";

document.addEventListener("DOMContentLoaded", function () { // When the page loads
    let count = 1; // reset the count

    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");

    function totalFees() {
        let feeElements = document.querySelectorAll("input[name='fee']");
        let total = 0;
        console.log(feeElements);
        feeElements = [...feeElements];
        feeElements.forEach((fee) => {
            total += parseFloat(fee.value) || 0;
        });
        return total;
    }

    function submitForm(event) {
        let totalFee = totalFees();
        const adultName = document.getElementById("adult_name").value;
        const participantSections = document.querySelectorAll("section[class^='participant']");
        const participants = participantSections.length;

        const info = {
            name: adultName.toUpperCase(),
            participants: participants,
            totalFee: totalFee
        };

        // Hide the form and show the summary
        form.style.display = "none";
        summary.style.display = "block";
        summary.innerHTML = successTemplate(info); 

        event.preventDefault();
    }

    addButton.addEventListener("click", function () {
        count++;
        const newParticipant = participantTemplate(count);
        participantsFieldset.insertBefore(newParticipant, addButton); // Add the new section before the add button
    });

    form.addEventListener("submit", function (event) {
        submitForm(event);
    });
});