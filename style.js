const toggleBtn = document.getElementById("toggle-btn");
const navDiv = document.getElementById("responsive-navbar");
const closeBtn = document.getElementById("close-btn");

const toggleNow = () => {
  navDiv.classList.toggle("hidden");
};

toggleBtn.addEventListener("click", toggleNow);

closeBtn.addEventListener("click", toggleNow);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset(); // Clear the input fields
        alert("Message sent successfully!"); // Show success alert
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
});
