const express = require('express');

const app = express();
app.use(express.json());

app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send('Data recived!')
});

const notesData = []

app.get('/getData', (req, res) => {
    res.send(notesData)
})

app.post('/note', (req, res) => {
    console.log(req.body);
    notesData.push(req.body)
    res.send(notesData)
});

app.delete('/notes/:id', (req, res) => {
    const i = req.params.id
    delete notesData[i]
    res.send('Deleted!')
});

app.listen(3000, function () {
    console.log('Server is Running');
});
