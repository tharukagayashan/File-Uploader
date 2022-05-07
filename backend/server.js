const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

const PORT = 8000; // set port address

app.use(cors()); //use cors
app.use(fileUpload()); //use Express file uploader

app.post('/upload',(req,res)=>{
    const file = req.files.file; //Set File
    const fileName = file.name; //Set File name
    const uploadPath = `./public/uploads/${fileName}`; //Set Upload Path

    file.mv(uploadPath,((err)=>{ //Move the file to upload derectory.
        if(err){
            console.log(err)
        }
        res.json("File Uploaded successfully"); //Successful response
    }))
})

app.listen(PORT,()=>{
    console.log(`App is up and running on PORT ${PORT}`);
});