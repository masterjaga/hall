
import { rooms } from "./routes/endpoints.js";

import dotenv from "dotenv";
import express from "express";

dotenv.config();

export const app = express();

const port=process.env.PORT;

export const room=[
  {
    "id": 1,
    "name": "room1",
    "seats": "200",
    "amenities": ["Speaker", "Stage", "Wifi"],
    "price": "100/hr"
  },
  {
    "id": 2,
    "name": "room2",
    "seats": "100",
    "amenities": ["AC", "Wifi", "RestRoom"],
    "price": "150/hr"
  },
  {
    "id": 3,
    "name": "room3",
    "seats": "50",
    "amenities": ["Projector", "AC", "Wifi"],
    "price": "500/hr"
  },
  {
    "id": 4,
    "name": "room4",
    "seats": "150",
    "amenities": ["AC", "Projector", "Speaker"],
    "price": "100/hr"
  }
];

 export const booking=[
  {
    "name": "vivek",
    "date": "23-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 1
  },
  {
    "name": "balaji",
    "date": "22-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 1
  },
  {
    "name": "gopal",
    "date": "23-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 2
  },
  {
    "name": "vignesh",
    "date": "22-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 2
  },
  {
    "name": "revathi",
    "date": "22-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 3
  },
  {
    "name": "revathi",
    "date": "22-01-2022",
    "start": "08:00",
    "end": "16:00",
    "status": "booked",
    "id": 4
  }
]
;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!👎👎😎😎😎😎😎👍👍👍')
});

app.use("/rooms",rooms);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


