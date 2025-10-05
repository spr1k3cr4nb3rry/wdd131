const themeSelector = document.getElementById("theme-selector");
const body = document.body;
const logo = document.getElementById("logo");

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else if (selectedTheme === "light") {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);
