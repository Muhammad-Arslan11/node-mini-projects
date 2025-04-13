
const mongoose = require('mongoose');


const mongo_url = "mongodb+srv://new_user01:dIo2bGincFOPonbI@auth-app.enok1gc.mongodb.net/auth-app?retryWrites=true&w=majority&appName=auth-app";

mongoose.connect(mongo_url)
.then(()=>{
    console.log("database connected");
}).catch((err) => {
    console.log("mongo error:", err);
  });