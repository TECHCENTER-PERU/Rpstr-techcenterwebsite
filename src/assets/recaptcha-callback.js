window.onRecaptchaLoadCallback = function () {
  const ngZone = window.ngZoneRef;
  if (ngZone && window.recaptchaRenderCallback) {
    ngZone.run(() => window.recaptchaRenderCallback());
  }
};
