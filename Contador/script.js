$(document).ready(function() {
  var clock;
  var redirectUrl = "../HB17/index.html"; // URL de redirección
  var targetDate = moment.tz("2026-08-25 00:00:00", "America/Lima");

  // Calcular tiempo restante
  function getRemainingTime() {
    return targetDate.valueOf() / 1000 - Date.now() / 1000;
  }

  var diff = getRemainingTime();

  // Si la fecha ya pasó
  if (diff <= 0) {
    window.location.href = redirectUrl;
    return;
  }

  // Iniciar FlipClock
  clock = $(".clock").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    autostart: true
  });

  // Comprobar cada segundo
  var checkTimer = setInterval(function() {

    var remaining = getRemainingTime();

    console.log("Tiempo restante:", remaining);

    if (remaining <= 0) {
      clearInterval(checkTimer);

      clock.setTime(0);

      console.log("¡Tiempo terminado! Redirigiendo...");

      window.location.href = redirectUrl;
    }

  }, 1000);

});