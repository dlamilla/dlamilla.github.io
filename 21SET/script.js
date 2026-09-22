window.onload = () => {
  // Ocultar animaciones de flores al inicio
  const flowersContent = document.getElementById("flowers-content");
  const startScreen = document.getElementById("start-screen");
  const loveMessage = document.getElementById("love-message");
  const giftBtn = document.getElementById("gift-btn");
  const envelopeSection = document.getElementById("envelope-section");
  const bgMusic = document.getElementById("bg-music");

  // Asegurarse de que las flores estén ocultas y el mensaje también
  if (flowersContent) flowersContent.style.display = "none";
  if (loveMessage) loveMessage.style.opacity = 0;
  if (envelopeSection) envelopeSection.style.display = "none";

  // Al hacer clic en el botón
  if (giftBtn) {
    giftBtn.addEventListener("click", () => {
      // Iniciar la música dentro del clic: los navegadores permiten
      // reproducir audio con sonido cuando parte de una acción del
      // usuario (si no lo hicieras aquí, muchos navegadores la
      // bloquearían). "loop" en el <audio> hace que se repita sola.
      if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(() => {
          // Si no subiste el archivo de música, simplemente no suena;
          // el resto de la página sigue funcionando normal.
        });
      }

      // Animar salida del botón
      startScreen.style.opacity = 0;
      setTimeout(() => {
        startScreen.style.display = "none";
        // Mostrar mensaje romántico
        loveMessage.classList.add("show");
        loveMessage.style.opacity = 1;
        // Después de 3.5s, ocultar mensaje y mostrar flores
        setTimeout(() => {
          loveMessage.classList.remove("show");
          loveMessage.classList.add("hide");
          loveMessage.style.opacity = 0;
          setTimeout(() => {
            loveMessage.style.display = "none";
            if (flowersContent) flowersContent.style.display = "";
            // El sobre aparece junto con las flores
            if (envelopeSection) envelopeSection.style.display = "flex";
          }, 1200);
        }, 6500);
      }, 700);
    });
  }

  // Interacción del sobre: abrir / cerrar la carta
  const envelopeWrap = document.getElementById("envelopeWrap");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  function openLetter() { document.body.classList.add("envelope-open"); }
  function closeLetter() { document.body.classList.remove("envelope-open"); }

  if (envelopeWrap) {
    envelopeWrap.addEventListener("click", openLetter);
    envelopeWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLetter(); }
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeLetter);
  if (overlay) {
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLetter(); });
  }
};
