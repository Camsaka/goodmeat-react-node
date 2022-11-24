const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json)
app.get("/", (req,res) => {
    res.send({
        msg : "Hello les frerots"
    })
})
app.listen(PORT, () =>{
    console.log(`Le serveur tourne sur le port ${PORT}`);
});



