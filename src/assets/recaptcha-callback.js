window.onRecaptchaLoadCallback = function () {
  console.log('🟢 reCAPTCHA cargado por Google');
  const ngZone = window.ngZoneRef;
  if (ngZone && window.recaptchaRenderCallback) {
    ngZone.run(() => window.recaptchaRenderCallback());
  } else {
    console.warn('⚠️ No se encontró NgZone o recaptchaRenderCallback');
  }
};
