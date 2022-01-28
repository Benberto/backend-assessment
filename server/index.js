const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

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
           "All will go well with your new project."
  ];

  
  let randomIndex = Math.floor(Math.random() * fortuneCookie.length);
  let randomFortune = fortuneCookie[randomIndex];

  res.status(200).send(randomFortune);
  
});



app.get('/api/students', (req, res) => {
  const students = ['Ben', 'Ryan', 'Lucas', 'Anthony', 'Brandon', 'Jaun', 'Lukas', 'Tatianna', 'Whitney', 'Will']
  res.status(200).send(students)
});

app.get('/api/instructors', (req, res) => {
  const instructors = ['Eric', 'DJ']
  res.status(200).send(instructors)
});


app.listen(4000, () => console.log("Server running on 4000"));
