document.addEventListener("DOMContentLoaded", function () {
  const surface = document.getElementById("surface");
  const frequence = document.getElementById("frequence");
  const vitres = document.getElementById("vitres");
  const montantHTSpan = document.getElementById("ht");
  const tvaSpan = document.getElementById("tva");
  const ttcSpan = document.getElementById("ttc");
  const boutonCalculer = document.getElementById("calculer");

  function calcul() {
    const surfaceValue = surface.value;
    const frequenceValue = frequence.value;

    let total = surfaceValue * 1.5 * frequenceValue;
    if (vitres.checked) total *= 1.1;

    montantHTSpan.textContent = total;
    tvaSpan.textContent = total * 0.2;
    ttcSpan.textContent = total * 1.2;
  }
  boutonCalculer.addEventListener("click", calcul);
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".part-2 a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
