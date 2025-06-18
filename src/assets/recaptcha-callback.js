window.onRecaptchaLoadCallback = function () {
  console.log('🟢 reCAPTCHA cargado por Google');

  const maxAttempts = 20;
  let attempts = 0;

  const tryRender = () => {
    const ngZone = window.ngZoneRef;
    const renderCallback = window.recaptchaRenderCallback;

    if (ngZone && renderCallback) {
      console.log('✅ Ejecutando render de reCAPTCHA');
      ngZone.run(() => renderCallback());
    } else {
      attempts++;
      if (attempts < maxAttempts) {
        console.log(`⏳ Esperando Angular... intento ${attempts}`);
        setTimeout(tryRender, 200); // Espera 200ms y vuelve a intentar
      } else {
        console.error('❌ No se pudo inicializar reCAPTCHA: Angular no respondió a tiempo.');
      }
    }
  };

  tryRender();
};
