// طلب الإذن من المستخدم
messaging
  .requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    return messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY' }); // استبدل YOUR_PUBLIC_VAPID_KEY بالمفتاح من Firebase Console
  })
  .then((token) => {
    console.log('User FCM Token:', token);
    // احفظ التوكن في قاعدة البيانات لإرسال الإشعارات لاحقًا
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err);
  });

// التعامل مع الإشعارات الواردة أثناء استخدام التطبيق
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // عرض الإشعار
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  new Notification(notificationTitle, notificationOptions);
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}
