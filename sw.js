const CACHE_NAME = 'sbmta-v4-cache';
const urlsToCache = [
  './',
  './index.html',
  './stations.js',
  'https://cdn.jsdelivr.net/npm/protobufjs@7.2.5/dist/protobuf.min.js',
  'https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
