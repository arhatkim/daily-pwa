const CACHE_NAME = 'daily-pwa-cache-v1';
const urlsToCache = [
  '/daily-pwa/',
  '/daily-pwa/index.html',
  '/daily-pwa/manifest.json',
  '/daily-pwa/icon-192.png',
  '/daily-pwa/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
