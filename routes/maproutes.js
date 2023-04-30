const express = require("express");
const app = express();
const MapModel = require("../Schema")
const cors = require("cors")

//corsを許可
app.use(cors());

app.get("/",(req,res)=>{
    try{
        res.send("Hello world");
    }catch(err){
        console.log(err)
    }
})

//CRUD操作

//データの取得
app.get("/api", async (req, res) => {
    //データベースの中のデータを全て返す
    const maps = await MapModel.find({});
    try {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(maps);
    } catch (err) {
        if (!res.headersSent) {
            res.status(500).send(err);
        }
    }
})
//データの送信
app.post("/api/post", async (req, res) => {
    //データベースの中のデータを全て返す
    const map = await MapModel(req.body);
    try {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
        await map.save();
    } catch (err) {
        console.log(err);
        if (!res.headersSent) {
            res.status(500).send(err);
        }
    }
})
//データの削除
app.delete("/api/delete/:id", async (req, res) => {
    //idを取得
    const id = req.params.id;
    await MapModel.findByIdAndDelete(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
})
//データの編集
app.put("/api/edit/:id", async (req, res) => {
    const id = req.params.id;
    const options = { new: true };
    try {
        const map = await MapModel.findByIdAndUpdate(id, req.body, options);
        if (!map) {
            res.status(404).send("Data not found");
            return;
        }
        res.send(map);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
})


module.exports = app;
