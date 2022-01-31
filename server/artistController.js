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
  },
  updateArtist:(req, res) => {
    let {id} = req.params
    let {type} = req.body
    let index = artists.findIndex(artists => +artists.id === +id)

    if(artists[index].rating === 5 && type === 'plus'){
      res.status(400).send('Cannot go above 5')
    } else if(artists[index].rating === 0 && type === 'minus'){
      res.status(400).send('Cannot go below 0')
    }else if(type === 'plus'){
      artists[index].rating++
      res.status(200).send(artists)
    }else if(type === 'minus'){
      artists[index].rating--
      res.status(200).send(artists)
    }else {
      res.sendStatus(400)
    }

    res.status(200).send(artists)
  }

}