const express = require('express');
const fs = require('fs');
const app = express();

app.get('/files/:filename', (req, res)=> {
    const path = req.params.filename;
    console.log(path);
    fs.readFile(path , "utf-8", (err , data) =>{
        res.json({ data})
    });
})

app.listen(3000);

