# hall-booking

Hashid:6f34546246a0227a88230ef11a4a04c1117cfb8d

addRoom:

API: https://task-41-new.herokuapp.com/rooms/add

This POST method will add a new room

{
  "id": 6,
  "name": "room6",
  "seats": "500",
  "amenities": [
    "AC",
    "Projector",
    "Speaker"
  ],
  "price": "500/hr"
}

getrooms:

API:https://task-41-new.herokuapp.com/rooms/

This GET method will show all the rooms

getBookings:

API:https://task-41-new.herokuapp.com/rooms/booking

This GET method will show all the Room bookings

listofrooms:

API :https://task-41-new.herokuapp.com/rooms/listroooms

This GET method will show all rooms with Booked data

listofcustomer:

API:https://task-41-new.herokuapp.com/rooms/listcustomers

This GET method will list all the customers with booked data

addBooking:

API:https://task-41-new.herokuapp.com/rooms/booking/add

This POST method will add new Booking and it will not book the room if its already booked

{
  "name": "vivek",
  "date": "24-01-2022",
  "start": "08:00",
  "end": "16:00",
  "id": 4
}

Home:

API :https://task-41-new.herokuapp.com/

Home page API
