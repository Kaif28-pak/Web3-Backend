import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
// Cors setup (Kon humare server se baat karsakta hai)
// origin : process.env.CORS_ORIGIN ka matlab frontend ka URL (e.g react app) 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//2 Data limit setup (taaki server creash na ho agar koi bada file bhejde )
app.use(express.json({limit:"16kb"}))  //Form data (JSON)
app.use(express.urlencoded({extended:true, limit:"16kb"})) // URL wala data (e.g search?q=hetesh)

app.use(express.static("public")) // Images/ pdf rakhna hai
// Cookie Parser (Server user ki cookie padh sake aur rakh sake)
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send("Mubarak ho app aur DataBase Connect hogaya!!!")
})

app.get('/info',(req,res)=>{
    res.json({
        fullname: "Kaif",
        FName: "Aslam",
        age:22,
        isStudent: true
    })
})
export {app}
