const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

const app = express();


app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public')
    },filename:(req, file, cb) => {
        cb(null, Date.now()  + '-' + file.originalname)
    }
});
const upload = multer({storage}).single('file');

app.get('/folder',()=>{
    fs.rmdirSync('public', { recursive: true });
    fs.mkdirSync('public');
})

app.post('/apload',(req,res)=>{
    upload(req,res,(err)=>{
        if (err) {
            return res.status(404).json(err);
        }
        return res.status(200).send(req.file.filename);
    })
})

app.listen(8000,()=>{
    console.log('app is running on port 8000');
})