const progress = document.getElementById("progress");
const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = `${pct}%`;
});

menu?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navLinks.style.display = open ? "flex" : "";
  if (open) {
    navLinks.style.position = "absolute";
    navLinks.style.top = "72px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.padding = "22px 5vw";
    navLinks.style.background = "#0b0d10";
    navLinks.style.flexDirection = "column";
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (window.innerWidth <= 900) navLinks.style.display = "";
  });
});
