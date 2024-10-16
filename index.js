import express from "express"
import "dotenv/config"

const app = express()

const PORT = process.env.PORT

app.get("/",(req,res)=>{
res.send("hello everyone")
})

app.listen(PORT,()=>console.log(`Running in port:${PORT}`))
