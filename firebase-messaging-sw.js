importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBsEI9jWF8G-2iV5g6n74-hEBuHFmA4JIA",
  authDomain: "track-95e8f.firebaseapp.com",
  projectId: "track-95e8f",
  storageBucket: "track-95e8f.firebasestorage.app",
  messagingSenderId: "121278257802",
  appId: "1:121278257802:web:d16b4f40de0ec79bf9eb73",
  measurementId: "G-Y5X7J598NF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// التعامل مع الإشعارات الواردة
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
