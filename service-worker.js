self.addEventListener('install', function(event) {
  console.log('Service Worker instalado.');
});

self.addEventListener('fetch', function(event) {
  // Cache não implementado nesse modelo simples
});
