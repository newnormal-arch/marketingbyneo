document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // 2. Active State Link Highlighting
  const currentPath = window.location.pathname;
  let pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // Default to index.html if root path
  if (pageName === "" || pageName === "/") {
    pageName = "index.html";
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkAttribute = link.getAttribute("href");
    // Check exact match or if it's a blog post page, keep Blog active
    if (
      linkAttribute === pageName ||
      (pageName.includes("blog-post") && linkAttribute === "blog.html")
    ) {
      link.classList.add("active");
    }
  });

  // 3. Form Submission Simulation
  const leadForm = document.getElementById("agency-booking-form");
  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(leadForm);
      const name = formData.get("fullName");

      leadForm.innerHTML = `
                <div style="text-align: center; padding: 2rem 0;">
                    <div style="font-size: 3.5rem; color: var(--accent); margin-bottom: 1rem;">✓</div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Strategy Session Requested!</h3>
                    <p style="color: var(--text-muted);">Thank you ${name}. Our growth engineers are analyzing your data and will follow up within 12 hours.</p>
                </div>
            `;
    });
  }
});
