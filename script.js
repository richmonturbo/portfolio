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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const button = document.getElementById("submitBtn");

  if (form && button) {
    form.addEventListener("submit", () => {
      button.textContent = "Sending...";
      button.disabled = true;
    });
  }
});
