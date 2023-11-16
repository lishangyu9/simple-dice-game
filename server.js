const express = require('express');
const app = express();
const port = 3000;

let playerScores = new Array(8).fill(0);

app.use(express.static('.')); // Serve static files

app.get('/roll-dice', (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    playerScores = playerScores.map(score => score + dice);
    res.json({ dice: dice, scores: playerScores });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
