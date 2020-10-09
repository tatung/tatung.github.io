var CACHE_NAME = "saikiransripada-20201009170929";

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        "/css/style.css?202010091709",
        "/"
      ]);
    })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.map(function(name) {
          if (name != CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  return clients.claim();
});

addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
        return response || fetch(e.request).then(function(response) {
        var clonedResponse = response.clone();
        var hosts = [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://maxcdn.bootstrapcdn.com",
          "https://cdnjs.cloudflare.com"
        ];
        hosts.map(function(host) {
          if (e.request.url.indexOf(host) === 0) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(e.request, clonedResponse);
            });
          }
        });
        return response;
      });
    })
  );
});
