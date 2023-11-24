const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4500;

// // Middleware

const openTime = (req,res,next) => {
    let dateTimer = new Date().getHours();
    if (dateTimer < 9 || dateTimer > 17) {
            return res.send('Closed');
        }
    next();    
} 
app.use(openTime);

// //Route to different files//

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname + '/files/Home-page.html'));
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname + '/files/Contact.html'));
})
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname + '/files/Services.html'));
})
// app.get('/',(req,res)=> {
//     res.sendFile(path.join(__dirname + '/Services.html'))
// })

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
});