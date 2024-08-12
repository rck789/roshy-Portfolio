document.addEventListener("DOMContentLoaded", function () {
  // Dark theme toggle logic
  const toggleButton = document.getElementById("theme-toggle");

  // Load saved theme preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    toggleButton.textContent =
      currentTheme === "dark-theme" ? "Light Mode" : "Dark Mode";
  }

  toggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      localStorage.removeItem("theme");
      toggleButton.textContent = "Dark Mode";
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
      toggleButton.textContent = "Light Mode";
    }
  });
});
