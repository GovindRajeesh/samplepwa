var listest=document.querySelector('#listest')

var list=[
  {id:1,title:'hi'},
  {id:2,title:'bye'},
  {id:3,title:'udh'}
  ]
  
list.forEach((item,index)=>{
  listest.innerHTML+=`
  <div class="list-item" data-index="${index}" data-id="${item.id}">${item.title}</div>
  `
})

listest.querySelectorAll(".list-item").forEach((el)=>{
  el.addEventListener('click',()=>{
    list=list.filter((r,i)=>r.id!=el.dataset.id)
    console.log(list)
    el.remove()
  })
})

navigator.serviceWorker.register('/sw.js').then(e=>{
  console.log(e)
})