const CACHE_NAME = 'bitsplay-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './BitsPlay.png',
  './ReWorded.png'
];

// Install the Service Worker and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Serve cached files when offline or on weak networks
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached version if found, otherwise fetch from the network
        return response || fetch(event.request);
      })
  );
});