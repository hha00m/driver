window.addEventListener('load', () => {
    registerSW();
});
let installPromptEvent;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

window.addEventListener('appinstalled', (evt) => {
  console.log('تم تنصيب التطبيق');
});

//@media all and (display-mode: standalone) {
//  body {
//    background-color: yellow;
//  }
//}
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
if (window.navigator.standalone === true) {
  console.log('display-mode is standalone');
}
async function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/driver/sw.js', {
            scope: '/driver/'
        }).then(function (reg) {
            if (reg.installing) {
                console.log('Service worker installing');
            } else if (reg.waiting) {
                console.log('Service worker installed');
            } else if (reg.active) {
                console.log('Service worker active');
            }
        }).catch(function (error) {
            // registration failed
            console.log('Registration failed with  ' + error);
        });
    }
}