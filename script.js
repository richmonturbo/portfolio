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
    construction: {
      title: "Construction",
      img: "images/construction.png",
      text: "Light construction and improvements."
    },
    handyman: {
      title: "Handyman",
      img: "images/handyman.png",
      text: "General repairs and troubleshooting."
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

function nextImage(card) {
  const img = card.querySelector("img");
  const set = card.querySelector(".image-set");

  const images = set.dataset.images.split(",");
  let current = img.src.split("/").pop();

  let index = images.findIndex(i => current.includes(i.split("/").pop()));

  index = (index + 1) % images.length;

  img.src = images[index];
}
