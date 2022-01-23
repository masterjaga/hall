import express from "express";
import { room,booking } from "../index.js";

export const router=express.Router();

router.get('/', (req, res) => {
    res.send(room);
  });

  router.post('/add', (req, res) => {
    const newRoom = req.body;
    console.log(req.body,"room");
    room.push(newRoom);
    res.status(200).send({ message: "Room Added" });
  });

  router.get('/listroooms', (req, res) => {
    const listRooms = [];
      for (var i in room ) {
    var obj = {"name": room[i].name,"booking_details":[]};
    for (var j in booking) {
        var obj1 = {"name": booking[j].name ,"date": booking[j].date ,"start":booking[j].start ,"end":booking[j].end ,"status":booking[j].status};
        if (room[i].id == booking[j].id) {
            obj.booking_details.push(obj1);
        }
    }
    listRooms.push(obj);
    }
    res.send(listRooms);
  });

router.get('/booking', (req, res) => {
    res.send(booking);
  });

  router.post('/booking/add', (req, res) => {
    const newBook = req.body;
    console.log(req.body,"book");
    for (var i in booking){
    if(newBook.id==booking[i].id && newBook.date==booking[i].date && newBook.start>=booking[i].start && newBook.start<=booking[i].end)
    {
      res.status(400).send({ message: "Room booked already for the mentioned time" });
       return;
    }
  }
newBook.status="booked";
   booking.push(newBook);
    res.status(200).send({ message: "Booking Added" });
  });

  router.get('/listcustomers', (req, res) => {
    const listCustomer = [];
    for (var i in booking ) {
        var obj = {"name": booking[i].name ,"date": booking[i].date ,"start":booking[i].start ,"end":booking[i].end,"rooms_booked":[]};
  for (var j in room) {
      var obj1 = {"room_name": room[j].name};
      if (booking[i].id == room[j].id) {
          obj.rooms_booked.push(obj1);
      }
  }
  listCustomer.push(obj);
  }  
    res.send(listCustomer);
  });


export const rooms=router;