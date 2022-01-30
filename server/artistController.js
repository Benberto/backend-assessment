const artists = require('./db.json')
let idCounter = 6

module.exports = {
  getAllArtists:(req, res) => {
    res.status(200).send(artists)
  },
  deleteArtist: (req, res) => {
    let {id} = req.params
    let index = artists.findIndex(artistEl => +artistEl.id === +id)
    artists.splice(index,1)
    res.status(200).send(artists)
  },
  createArtist:(req, res) =>{
    const {title, rating, imageURL}= req.body
    let newArtist = {
      id: idCounter,
      title: title,
      rating: rating,
      imageURL:imageURL
    }
    artists.push(newArtist)
    res.status(200).send(artists)
    idCounter++
  }
}