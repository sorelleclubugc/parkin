// Service worker mínimo: permite instalar o Parkin como app.
// Não guarda nada em cache; sempre busca a versão mais nova do site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
