const CACHE='aventura-eio-v3';
const ASSETS=['index.html','app.min.3df038fa81.js','style.min.68aaf99f80.css','manifest.json','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=e.request.url;
if(u.includes('lesson_')&&u.endsWith('.js')){e.respondWith(caches.match(e.request).then(c=>{const f=fetch(e.request).then(r=>{if(r.ok){const c2=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c2))}return r});return c||f}));return}
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>caches.match('index.html')))});