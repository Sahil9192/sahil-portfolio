// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Load status.json for the AI Control Panel
fetch("status.json")
  .then((res) => res.json())
  .then((data) => {
    const focusEl = document.getElementById("current-focus");
    const updatedEl = document.getElementById("last-updated");

    focusEl.textContent = data.current_focus || "Exploring AI & Data Science";
    updatedEl.textContent = data.last_updated
      ? `Last updated: ${data.last_updated}`
      : "";
  })
  .catch(() => {
    document.getElementById("current-focus").textContent =
      "Exploring AI & Data Science";
  });

// Scroll reveal + skill bar animation
const revealElements = document.querySelectorAll(".reveal");
const skillRows = document.querySelectorAll(".skill-row");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // If it's a skill row, animate bar width
        if (entry.target.classList.contains("skill-row")) {
          const level = entry.target.getAttribute("data-level");
          const fill = entry.target.querySelector(".skill-bar-fill");
          if (fill && level) {
            fill.style.width = level + "%";
          }
        }
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealElements.forEach((el) => observer.observe(el));
skillRows.forEach((row) => observer.observe(row));

// Project modal details
const projectDetails = {
  floodnav: {
    title: "FloodNav — Liquid Neural Networks for Precision Drone Flight",
    body:
      "FloodNav is an advanced drone-based flood response system that uses liquid neural networks and reinforcement learning to autonomously map and monitor disaster zones.",
    points: [
      "Autonomously maps and monitors flood-affected regions and geofences hazardous zones.",
      "Identifies high-priority urban and settlement areas for emergency response.",
      "Generates optimized flight paths for rescue and survey drones to maximize coverage.",
      "Provides a real-time dashboard with flood status, drone telemetry, and actionable insights."
    ]
  },
  sign: {
    title: "Sign Language Detection System",
    body:
      "End-to-end sign language detection pipeline using YOLOv5, FastAPI, and a web frontend, fully containerized with Docker.",
    points: [
      "Trained a custom YOLOv5 model on labelled hand sign datasets for multi-class gesture recognition.",
      "Designed a FastAPI-based RESTful API for serving real-time predictions.",
      "Built a user-friendly web interface using HTML, CSS, and JavaScript.",
      "Used Conda environments and Docker to ensure reproducible training and deployment."
    ]
  },
  emotion: {
    title: "AI Powered Facial Emotion Recognition Web App",
    body:
      "Full-stack facial emotion recognition web app using TensorFlow, OpenCV, and Flask with webcam and image upload support.",
    points: [
      "Trained CNN models on the FER2013 dataset to classify multiple emotion categories.",
      "Implemented real-time webcam-based detection and static image upload classification.",
      "Developed a dark-themed responsive UI with CSS animations and AOS effects.",
      "Strengthened deep learning, computer vision, and web development skills."
    ]
  },
  chicken: {
    title: "Chicken Disease Classification using Fecal Images",
    body:
      "Deep learning–based classification system that detects poultry diseases from fecal images, supporting farmer decision-making.",
    points: [
      "Built CNN models to classify poultry diseases from fecal images.",
      "Designed an automated MLOps pipeline with CI/CD on AWS EC2 and ECR.",
      "Enabled real-time logging, monitoring, and scalable deployment.",
      "Helps farmers take preventive measures and improve farm productivity."
    ]
  },
  medchat: {
    title: "Medical Chatbot with Generative AI",
    body:
      "AI-powered medical chatbot that uses NLP and vector-based search to provide symptom-based guidance and healthcare recommendations.",
    points: [
      "Used Hugging Face embeddings and FAISS for semantic search over medical content.",
      "Integrated LangChain to orchestrate retrieval and response generation.",
      "Built a web interface with Flask, HTML, CSS, and Python backend.",
      "Optimized for quick response times and user-friendly interaction."
    ]
  },
  youtube: {
    title: "YouTube Comment Sentiment Analysis",
    body:
      "Web-based sentiment analysis tool for YouTube comments that helps creators understand audience opinions and engagement.",
    points: [
      "Fetched comments using the YouTube API based on video ID.",
      "Preprocessed text via cleaning, tokenization, and stopword removal.",
      "Applied sentiment analysis using NLP libraries / models (e.g., VADER / TextBlob).",
      "Visualized insights with charts and word clouds in a user-friendly dashboard."
    ]
  },
  cartoon: {
    title: "Cartoonizer Effect using OpenCV",
    body:
      "Web-based advanced image editor that applies a cartoon effect and generates favicons using Flask and OpenCV.",
    points: [
      "Implemented customizable cartoon effect with parameters like line size, blur, and number of colors.",
      "Allowed users to upload images and see processed results directly in the browser.",
      "Built an automatic favicon generator for 16x16 images.",
      "Used Flask, OpenCV, HTML, CSS, JavaScript, and NumPy for full-stack implementation."
    ]
  },
  ebay: {
    title: "eBay Data Analysis & Visualization",
    body:
      "End-to-end project that scrapes eBay product data, cleans and analyzes it, and visualizes patterns in pricing and discounts.",
    points: [
      "Used BeautifulSoup / Selenium to extract product data such as price, discounts, shipping, and seller location.",
      "Performed data cleaning, transformation, and exploratory data analysis.",
      "Created interactive visualizations with Plotly (heatmaps, scatter plots, dashboards).",
      "Demonstrated how raw marketplace data can be turned into actionable insights."
    ]
  }
};


const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalPoints = document.getElementById("modal-points");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

function openModal(key) {
  const data = projectDetails[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalBody.textContent = data.body;
  modalPoints.innerHTML = "";
  data.points.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    modalPoints.appendChild(li);
  });

  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

document.querySelectorAll(".project-detail-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    openModal(key);
  });
});

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
