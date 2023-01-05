import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const tweets = [];
const usuarios = [];

server.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;

    if(!username || !avatar){
        res.status(400).send({error: "Todos os campos são obrigatórios"});
        return;
    }

    const logado = {
        username,
        avatar
    };

    usuarios.push(logado);

    res.status(200).send("OK");
});

server.post("/tweets", (req, res) => {
    
})

// server.get("/tweets", (req, res) =>{
//     res.send("blablabla blublu")
// })

server.listen(5000, () => {"funfou"});
