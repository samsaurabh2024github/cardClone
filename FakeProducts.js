let allCards = document.querySelector('.allCards')
let displayImg = document.querySelector('.displayImg')
let description = document.querySelector('.description')

let fetching = async () => {
  let resp = await fetch('https://fakestoreapi.com/products')
  let data = await resp.json()
  showdisplayImg(data[0])
  // console.log(data)
  data.map((obj) => {
    showallCards(obj)
    7
  })
}


let showallCards = (obj) => {
  let newCard = document.createElement('div')
  newCard.innerHTML = `
  <section>
    <div class="title">${obj.title}</div>
    <div>
      <img src=${obj.image} alt="" width='200px'>
    </div>
    <h3 class="price">${obj.price}</h3>
    <div class="ratings">${obj.rating.rate}(${obj.rating.count})</div>
    <div class="category">${obj.category}</div>
    <div class="description">${obj.description}</div>
  </section>
  `
  allCards.append(newCard)

  newCard.addEventListener('click', () => {
    showdisplayImg(obj)
  })

}
let myImg = document.createElement('img')
let showdisplayImg = (obj) => {

  myImg.setAttribute('src', obj.image)
  myImg.setAttribute('width', "300px")
  displayImg.append(myImg)
}
let showdescription = (obj) => { }




fetching()