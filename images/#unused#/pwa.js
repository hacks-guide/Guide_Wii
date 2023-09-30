document.addEventListener('DOMContentLoaded', init, false);
function init() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/service-worker.js')
      .then((reg) => {
        // Service worker registration confirmed
      }, (err) => {
        // Service worker registration error
    });
  }
}