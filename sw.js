const CACHE_NAME = 'anand-info-v1';
const urlsToCache = [
  '/up-edistrict-tool/index.html',
  '/up-edistrict-tool/edistrict-resizer.html',
  '/up-edistrict-tool/aadhaar-cutter.html',
  '/up-edistrict-tool/form-filler.html',
  '/up-edistrict-tool/print-optimizer.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) { return response; }
        return fetch(event.request);
      })
  );
});
