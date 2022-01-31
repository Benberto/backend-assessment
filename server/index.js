const express = require("express");
const cors = require("cors");
const {getAllArtists, deleteArtist, createArtist, updateArtist} = require('./artistController')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


const artists = require('./db.json')

app.get('/api/artists', getAllArtists)
app.post('/api/artists', createArtist)
app.delete('/api/artists/:id', deleteArtist)
app.put('/api/artists/:id', updateArtist)

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortuneCookie = ["A hunch is creativity trying to tell you something.",
					 "A faithful friend is a strong defense.",
					 "A lifetime of happiness lies ahead of you.",
           "Adventure can be real happiness.",
           "All will go well with your new project.","Now is the time to try something new.","Love is a warm fire to keep the soul warm.","Have a beautiful day.","He who knows he has enough is rich.","You never know who you touch.","You will be blessed with longevity.","You will be successful in your work."
  ];

  
  let randomIndex = Math.floor(Math.random() * fortuneCookie.length);
  let randomFortune = fortuneCookie[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
