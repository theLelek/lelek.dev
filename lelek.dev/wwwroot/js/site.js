function changeTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "white") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "white");
    }
}

const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", changeTheme);