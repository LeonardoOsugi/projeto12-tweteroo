import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const tweetsAvatares = [];
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
    const {username, tweet} = req.body;
    const usuarioExiste = usuarios.find(iten => iten.username === username);

    if(!username || !tweet){
        res.status(400).send({error: "Todos os campos são obrigatórios"});
        return;
    };

    if(!usuarioExiste){
        res.sendStatus(401);
        return;
    };

    const newTweets = {
        username,
        tweet
    }

    tweets.push(newTweets);

    tweetsAvatares.push({
        username,
        avatar: usuarioExiste.avatar,
        tweet
    });

    console.log(tweetsAvatares);

    res.sendStatus(200);
})

server.get("/tweets", (req, res) =>{
    res.send("blablabla blublu")
})

server.listen(5000, () => {"funfou"});
