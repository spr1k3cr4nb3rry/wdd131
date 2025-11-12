export function successTemplate(info) {
    return `
        <h2>Registration Successful!</h2>
        <p>Thank you <strong>${info.name}</strong> for registering.</p>
        <p>
            You have registered <strong>${info.participants}</strong> participant(s) and 
            owe <strong>$${info.totalFee.toFixed(2  )}</strong> in fees.
        </p>
    `;
}

export function participantTemplate(count) {
    const participant1 = document.querySelector(".participant1");
    if (!participant1) return null;

    const newParticipant = participant1.cloneNode(true); // Create a copy of the HTML that makes up the first participant section

    newParticipant.className = `participant${count}`; // Xth participant will be participantX, etc.
    newParticipant.querySelector("p").textContent = `Participant ${count}`; // Change the title to match the participant #

    const inputs = newParticipant.querySelectorAll("input, select"); // Selects all of the ids in the new section
    inputs.forEach(input => {
        if (!input.id) return; // If there is no id, skip it

        const oldId = input.id; // Get the old id
        input.id = oldId.replace(/[0-9]/g, "") + count; // Add the new number

        const label = input.closest(".item")?.querySelector(`label[for="${oldId}"]`); // Find the label that corresponds to the old id
        if (label) label.setAttribute("for", input.id); // Update the labels to match the new ids
        input.value = "";
    });
    return newParticipant;
}