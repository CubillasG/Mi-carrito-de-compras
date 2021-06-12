const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content



document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
} )

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
        console.log(data)
}