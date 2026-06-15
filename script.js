function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (!lb || !img) return;
  lb.style.display = "flex";
  img.src = src;
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) lb.style.display = "none";
}

function openModal(type) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  const data = {
  maintenance: {
    title: "Maintenance",
    img: "images/maintenance.png",
    text: "Preventative maintenance and repairs."
  },

  design: {
    title: "Design",
    img: "images/design.png",
    text: "Design concepts, space planning, material choices, and creative solutions that balance appearance, function, and durability."
  },

  handyman: {
    title: "Handyman",
    img: "images/handyman.png",
    text: "On the job know how and experience"
  },
    management: {
      title: "Management",
      img: "images/management.png",
      text: "Workflow coordination and oversight."
    },
    repairs: {
      title: "Repairs",
      img: "images/repairs.png",
      text: "Diagnosing and fixing issues."
    },
    installation: {
      title: "Installation",
      img: "images/installation.png",
      text: "Fixtures and hardware installation."
    }
  };

  const item = data[type];
  if (!item) return;

  title.textContent = item.title;
  img.src = item.img;
  text.textContent = item.text;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

function changeImage(arrow, direction) {
  const card = arrow.closest(".image-card");
  const img = card.querySelector("img");

  const images = card.dataset.images.split(",");

  let index = parseInt(card.dataset.index || 0);

  index += direction;

  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  card.dataset.index = index;
  img.src = images[index];
}

window.addEventListener("DOMContentLoaded", function () {

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = document.getElementById("submitBtn");
    const status = document.getElementById("formStatus");

    button.textContent = "Sending...";
    button.disabled = true;

    try {
      const response = await fetch("https://formspree.io/f/mqeowrkg", {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "✓ Message sent successfully!";
        status.style.color = "#22c55e";

        form.reset();

        setTimeout(() => {
          window.location.href = "thanks.html";
        }, 1500);

      } else {
        throw new Error("Form submission failed");
      }

    } catch (error) {
      status.textContent = "Error sending message. Please try again.";
      status.style.color = "#ef4444";

      button.textContent = "Send Message";
      button.disabled = false;
    }
  });
}
