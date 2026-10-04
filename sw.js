const C="conta-em-dia-v3";const F=["./","./index.html","./manifest.json","./icon-180.png","./icon-512.png","./sw.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));