import express from 'express';  
import bp from 'body-parser';   
import path from 'path';


const app = express();
const port = 1212;
const data = [];

const __dirname = path.resolve();

app.use(bp.json());

// All requset har qanday requsetlarni qabul qiladigon yani Post dan tortib Deletgacha
// app.all('/all' , (req,res, next) => {
//    console.log('All dan keyingilari ishlasin');
//    next();
// });

app.get('/users/alisher', (req,res) => {
    res.sendFile(__dirname + '/alisher.txt');
});

app.get('/users/gofurjon', (req,res) => {
    res.sendFile(__dirname + '/gofurjon.txt');
});

// app.post('/all', (req,res) => {
//     res.send(`<h1Port ishlamoqda</h1>`);
// });


app.listen(port, () => {
    console.log(`Porta ishga tushdi ${port}`);
});