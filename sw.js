self.addEventListener('install',(sw)=>{
  sw.waitUntil(
   caches.open('static').then((cache)=>{
     cache.addAll(['./Home.htm','./script.js','./style.css'])
   })
    )
})
  