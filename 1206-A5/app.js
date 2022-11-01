const express = require('express')
const app = express();
const PORT = 4000;

app.set("view engine","ejs");

// app.get('/', (req,res) => {
//   res.render('index', {name: "Yifei"})
// })


app.get('/', (req,res) => {
  res.render('index', 
  {name: "Melody Chen",
    email: "mel123@gmail.com",
    date: "",
    contact:""
  })
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})