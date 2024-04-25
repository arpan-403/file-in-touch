require('dotenv').config()
const express=require("express");
const app=express();
// var cors = require('cors')

// app.use(cors())
const PORT=process.env.PORT || 5000
const login=require("./Routes/login");
const isAuthenticate=require("./Routes/isAuthenticate");
const register=require("./Routes/register");
const uploads=require("./Routes/uploads");
const uploadedByMe=require("./Routes/uploadedByMe");
const share=require("./Routes/share");
const shareWithMe=require("./Routes/shareWithMe");
const shareByMe=require("./Routes/shareByMe");
// app.use("/uploads",express.static("uploads"));
app.use(login);
app.use(isAuthenticate);
app.use(register);
app.use(uploads);
app.use(uploadedByMe);
app.use(share);
app.use(shareWithMe);
app.use(shareByMe);
// app.get("/",(req,res)=>{
//     res.send("in server");
// })
app.listen(PORT,()=>console.log("server is connected...."));