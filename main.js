const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()



document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
} )

items.addEventListener('click', e =>{
    addCarrito(e)
})

const fetchData = async ()=>{
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        pintarCArd(data)
    }catch(error){
        console.log(error)
    }
}

const pintarCArd = data =>{
    data.forEach(producto =>{
      templateCard.querySelector('h5').textContent = producto.title
      templateCard.querySelector('p').textContent = producto.precio
      templateCard.querySelector('img').setAttribute('src', producto.imagen)
      templateCard.querySelector('.btn-primary').dataset.id = producto.id

      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
    })    
    items.appendChild(fragment)
   
}

const addCarrito = e =>{
    //console.log(e.target)
    console.log(e.target.classList.contains('btn-primary'))
    //if(e.target.classList.contains('btn-primary')){

    }
}