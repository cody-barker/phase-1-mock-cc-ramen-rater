const ramenMenuDiv = document.querySelector('#ramen-menu')
const detailName = document.querySelector('.name')
const detailRestaurant = document.querySelector('.restaurant')
const detailImage = document.querySelector('.detail-image')
const ratingText = document.querySelector('#rating-display')
const commentText = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const nameInput = document.querySelector('#new-name')
const restaurantInput = document.querySelector('#new-restaurant')
const imageInput = document.querySelector('#new-image')
const ratingInput = document.querySelector('#new-rating')
const commentInput = document.querySelector('#new-comment')

document.addEventListener('DOMContentLoaded', renderImages)

function renderImages() {
    fetch ('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then(ramenList => {
        ramenList.forEach(ramen => createImage(ramen))
    }) 
}

function createImage(ramen) {
    const imgTag = document.createElement('img')
    imgTag.src = ramen.image
    ramenMenuDiv.append(imgTag)
    const name = ramen.name
    const restaurant = ramen.restaurant
    const image = ramen.image
    const rating = ramen.rating
    const comment = ramen.comment
    imgTag.addEventListener('click', () => {
        detailName.innerText = name
        detailRestaurant.innerText = restaurant
        detailImage.src = image
        ratingText.innerText = rating
        commentText.innerText = comment
    })
}

form.addEventListener('submit', addRamen)

function addRamen (e) {
    e.preventDefault()
    const newRamen = {
      name: nameInput.value,
      restaurant: restaurantInput.value,
      image: imageInput.value,
      rating: ratingInput.value,
      comment: commentInput.value,
    }
    createImage(newRamen)
}    
