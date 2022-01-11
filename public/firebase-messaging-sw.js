importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyBlAV1INeg44XN8tPouP0fRXdPMEm-ngtU",
  authDomain: "push-notification-demo-18e67.firebaseapp.com",
  projectId: "push-notification-demo-18e67",
  storageBucket: "push-notification-demo-18e67.appspot.com",
  messagingSenderId: "1054385593122",
  appId: "1:1054385593122:web:0699ce3bb690e868d5237b"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});