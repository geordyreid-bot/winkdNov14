// sw.js

// -------------------------------------------------------------
// Firebase Messaging imports (safe for web PWA)
// -------------------------------------------------------------
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// -------------------------------------------------------------
// Basic PWA Cache Config
// -------------------------------------------------------------
const CACHE_NAME = 'winkdrops-pwa-v3';

const URLS_TO_PRECACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Inline icon fallback for notifications
const ICON_DATA_URL = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10C50 10 15 45.82 15 62.5C15 79.92 30.67 90 50 90C69.33 90 85 79.92 85 62.5C85 45.82 50 10 50 10ZM58 60C58 66 68 66 68 60Z' fill='%23000000'/%3E%3C/svg%3E";

// -------------------------------------------------------------
// INSTALL
// -------------------------------------------------------------
self.addEventListener('install', event => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_PRECACHE);
    })
  );
  self.skipWaiting();
});

// -------------------------------------------------------------
// ACTIVATE
// -------------------------------------------------------------
self.addEventListener('activate', event => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// -------------------------------------------------------------
// FETCH: Cache First + Network
// -------------------------------------------------------------
self.addEventListener('fetch', event => {

  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Allow API calls to pass through without caching
  if (url.hostname.includes('googleapis.com')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match('./index.html')); // Fallback

      return cached || networkFetch;
    })
  );
});

// -------------------------------------------------------------
// Firebase Background Messaging
// -------------------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(payload => {
      const title = payload.notification?.title || "New WinkDrop";
      const options = {
        body: payload.notification?.body || "You have a new message.",
        icon: ICON_DATA_URL,
        badge: ICON_DATA_URL
      };
      self.registration.showNotification(title, options);
    });

  } catch (err) {
    console.error("[SW] Firebase init failed", err);
  }
}

