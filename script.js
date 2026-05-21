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

const data = {
  maintenance: {
    title: "Maintenance",
    img: "images/maintenance.png",
    text: "Preventative maintenance and repairs focused on long-term reliability."
  },
  construction: {
    title: "Construction",
    img: "images/construction.png",
    text: "Light construction and structural improvements."
  },
  handyman: {
    title: "Handyman Work",
    img: "images/handyman.png",
    text: "General repairs and troubleshooting."
  },
  management: {
    title: "Management",
    img: "images/management.png",
    text: "Coordinating workflow and overseeing projects."
  },
  repairs: {
    title: "Repairs & Troubleshooting",
    img: "images/repairs.png",
    text: "Diagnosing and fixing issues efficiently."
  },
  installation: {
    title: "Installation Services",
    img: "images/installation.png",
    text: "Fixtures, appliances, and hardware installation."
  }
};
