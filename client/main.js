
const artistContainer = document.querySelector('#artists-container')
const form = document.querySelector('form')

const artistURL = `http://localhost:4000/api/artists`

const artistsCallback = ({ data: artists }) => displayArtists(artists)
const errCallback = err => console.log(err.response.data)

const getAllArtists = () => axios.get(artistURL).then(artistsCallback).catch(errCallback)
const deleteArtist = id => axios.delete(`${artistURL}/${id}`).then(artistsCallback).catch(errCallback)
const createArtist = body => axios.post(artistURL, body).then(artistsCallback).catch(errCallback)
const updateArtist = (id, type) => axios.put(`${artistURL}/${id}`, {type}).then(artistsCallback).catch(errCallback)

function submitHandler(evt) {
  evt.preventDefault()

  let title = document.querySelector('#title')
  let rating = document.querySelector('input[name="ratings"]:checked')
  let imageURL = document.querySelector('#img')

  let bodyObj = {
    title: title.value,
    rating: rating.value,
    imageURL: imageURL.value
  }
  
  createArtist(bodyObj)

  title.value = ''
  rating.checked = false
  imageURL.value = ''

}

function createArtistCard(artist){
  const artistCard = document.createElement('div')
  artistCard.classList.add('artist-card')

  artistCard.innerHTML = `<img alt='Artist cover' src=${artist.imageURL}
  class="artist-cover"/>
  <p class="artist-title">${artist.title}</p>
  <div class="btn-containers">
      <button class="plus" onclick="updateArtist(${artist.id}, 'plus')">+</button>
      <p class="artist-rating">${artist.rating} Stars</p>
      <button class="plus" onclick="updateArtist(${artist.id}, 'minus')">-</button>
  </div>
  <button onclick="deleteArtist(${artist.id})">Delete</button>`

  artistContainer.appendChild(artistCard)
}



  function displayArtists(arr) {
    artistContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
      createArtistCard(arr[i])
    }
  }

  form.addEventListener('submit', submitHandler)

  getAllArtists()

// form.addEventListener('submit', submitHandler)


bodyEl = document.querySelector('ul')
document.getElementById("fortuneCookie").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

