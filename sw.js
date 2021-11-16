self.addEventListener('install',(sw)=>{
  sw.waitUntil(
   caches.open('static').addAll(['./Home.htm','./script.js','./style.css'])
    )
})
  