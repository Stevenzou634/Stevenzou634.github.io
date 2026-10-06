// Dark mode toggle: switches data-theme on <html> and remembers the choice.

const button = document.querySelector(".theme-toggle");

button.addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = next;

  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // Storage may be unavailable (e.g. private browsing)
  }
});
