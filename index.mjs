import express from 'express'  
import bp from 'body-parser'   


const app = express();
const port = 1212;


const data = [];

app.use(bp.json());     




app.listen(port, () => {
    console.log(`Porta ishga tushdi ${port}`);
});