const CACHE_NAME = 'bitsplay-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './BitsPlay.png',
  './ReWorded.png'
];

// Install the Service Worker and cache the files
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If the network works, update the cache and return the response
        const resClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request)) // If network fails, use cache
  );
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
