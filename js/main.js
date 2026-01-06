document.addEventListener("DOMContentLoaded", () => {
  // ===== Load Header =====
  fetch("../includes/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      setActiveMenu();
    });

  // ===== Load Footer =====
  fetch("../includes/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // ===== Active Menu Function =====
  function setActiveMenu() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }
});
