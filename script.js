requestAnimationFrame(() => document.documentElement.dataset.ready = "true");

document.querySelectorAll(".credential-list a").forEach((link) => {
  link.addEventListener("pointerenter", () => link.closest(".credential-list").style.setProperty("--active-row", link.offsetTop + "px"));
});
