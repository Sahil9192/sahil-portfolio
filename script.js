// Set footer year
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
