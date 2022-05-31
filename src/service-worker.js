self.__precacheManifest = [].concat(self.__precacheManifest || []);
// eslint-disable-next-line
if (workbox) {
  // eslint-disable-next-line
  workbox.setConfig({
    debug: false,
   });
   // eslint-disable-next-line
   workbox.core.setCacheNameDetails({ prefix: 'betbeetle' })
   // eslint-disable-next-line
   workbox.routing.registerRoute(
   /\.(?:png|gif|jpg|jpeg|svg)$/,
   // eslint-disable-next-line
   new workbox.strategies.StaleWhileRevalidate({
     cacheName: 'images',
     plugins: [
       // eslint-disable-next-line
     new workbox.expiration.Plugin({
       maxEntries: 60,
       maxAgeSeconds: 120 * 24 * 60 * 60, // 120 Days
     }),
     ],
   }),
   );
   // eslint-disable-next-line
   workbox.routing.registerNavigationRoute('/index.html')
   // eslint-disable-next-line
   workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
} 
else {
  console.log(`Workbox didn't load`);
}

self.addEventListener("message", (e)=>{
  if (e.data.action=='skipWaiting') self.skipWaiting()
});