const express = require("express");
const cors = require('cors');
const app = express();

const port = 3000;


app.use(cors());

app.get('/cards/:difficulty/:theme', (request, response) => {
    console.log('difficulty', request.params.difficulty);
    console.log('theme', request.params.theme);
    response.send(JSON.stringify(cardsData));
});



app.listen(port, () => {
    console.log('memory game running');
});

const cardsData = {

        "cards": [
            {
                "isDiscovered": false,
                "icon": "😧",
                "id": 15
            },
            {
                "isDiscovered": false,
                "icon": "🤡",
                "id": 12
            },
            {
                "isDiscovered": false,
                "icon": "🥵",
                "id": 13
            },
            {
                "isDiscovered": false,
                "icon": "👂",
                "id": 30
            },
            {
                "isDiscovered": false,
                "icon": "😰",
                "id": 2
            },
            {
                "isDiscovered": false,
                "icon": "🤑",
                "id": 18
            },
            {
                "isDiscovered": false,
                "icon": "😖",
                "id": 1
            },
            {
                "isDiscovered": false,
                "icon": "😖",
                "id": 1
            },
            {
                "isDiscovered": false,
                "icon": "🤡",
                "id": 12
            },
            {
                "isDiscovered": false,
                "icon": "🛶",
                "id": 3
            },
            {
                "isDiscovered": false,
                "icon": "😧",
                "id": 15
            },
            {
                "isDiscovered": false,
                "icon": "🤑",
                "id": 18
            },
            {
                "isDiscovered": false,
                "icon": "😰",
                "id": 2
            },
            {
                "isDiscovered": false,
                "icon": "🥵",
                "id": 13
            },
            {
                "isDiscovered": false,
                "icon": "🛶",
                "id": 3
            },
            {
                "isDiscovered": false,
                "icon": "👂",
                "id": 30
            }
        ]
    }
