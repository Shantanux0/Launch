export const scrollToTarget = (target, onContact) => {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (target === "contact") {
    if (onContact) onContact();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const el = document.getElementById(target);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

