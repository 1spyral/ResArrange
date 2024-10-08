const express = require("express");
const { arrange } = require("./gpt");

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Peanuts");
});


app.post("/arrange", async (req, res) => {
    const {keywords, description, format} = req.body;
    const data = await arrange(keywords, description, format);
    console.log(data);
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});