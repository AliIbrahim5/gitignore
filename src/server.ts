import express, { Request, Response } from 'express'


const app = express()
const PORT = 3000;



app.get("/test", (req: Request, res: Response) => {
    res.send("Welcome to Express")
})

app.listen(PORT, () => {
    console.log("listening port 3000");

})