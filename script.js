document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav ul li a");

  // Function to show the selected section and hide others
  function showSection(section) {
    sections.forEach((sec) => sec.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");

    links.forEach((link) => link.classList.remove("active"));
    document.querySelector(`[href="#${section}"]`).classList.add("active");
  }

  // Event listeners for menu links
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetSection = this.getAttribute("href").substring(1);
      showSection(targetSection);
    });
  });

  // Show home section by default
  showSection("home");
});
