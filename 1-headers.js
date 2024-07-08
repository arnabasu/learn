const express = require ("express")
const app = express() 
const port = 3000;

app.get('/login', (req,res) => {
    res.headers.authorization = "ullu"
    console.log(res.send("Helloworld"));
})


app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})