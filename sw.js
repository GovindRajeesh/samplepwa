self.addEventListener('install',(sw)=>{
  sw.waitUntil(
   caches.open('static').then((cache)=>{
     cache.addAll(['./Home.html','./script.js','./style.css'])
   }).catch(e=>{console.log(e);})
    )
})
  