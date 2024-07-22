import React, { useState } from 'react'

const MoviesScreen = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  let movie = {
    name: "Hindustani 2",
    date: new Date(),
    language: "Hindi",
    type: "Action/Drama",
    screens: [
      {
        name: "screen 1",
        location: "Rajhansh Cinemas , croma ,kamrej"
      },
      {
        name: "screen 2",
        location: "Rajhansh Cinemas , croma ,kamrej"
      },
      {
        name: "screen 3",
        location: "Rajhansh Cinemas , croma ,kamrej"
      },
    ]
  }

  let screen = {
    name: "screen 1",
    location: "rajhansh Cinema ,croma ,kamrej",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            //platinum
            type: "platinum",
            rows: [
              {
                rowname: "H",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 500
          },
          {
            //gold
            type: "gold",
            rows: [
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 300
          },
          {
            //silver
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },

            ],
            price: 150
          }
        ]
      },
      {
        time: "1:30 PM",
        seats: [
          {
            //platinum
            type: "platinum",
            rows: [
              {
                rowname: "H",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 500
          },
          {
            //gold
            type: "gold",
            rows: [
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 300
          },
          {
            //silver
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },

            ],
            price: 150
          }
        ]
      },
      {
        time: "4:00 PM",
        seats: [
          {
            //platinum
            type: "platinum",
            rows: [
              {
                rowname: "H",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 500
          },
          {
            //gold
            type: "gold",
            rows: [
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 300
          },
          {
            //silver
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },

            ],
            price: 150
          }
        ]
      },
      {
        time: "8:30 AM",
        seats: [
          {
            //platinum
            type: "platinum",
            rows: [
              {
                rowname: "H",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 500
          },
          {
            //gold
            type: "gold",
            rows: [
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
            ],
            price: 300
          },
          {
            //silver
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8"
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9"
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10"
                      },
                    ]
                  },
                ],
              },

            ],
            price: 150
          }
        ]
      }
    ]
  }

  let generateSeatLayout = () => {
    let index = screen.timeslots.findIndex((val) => val.time === screen.timeslots[activeIndex].time)
    console.log(index, "for show selected index");
    let seatoftime = screen.timeslots[index]?.seats?.map((val, index) => (
      <div className='seat-type text-center mb-3' key={index}>
        <h5 className='mb-4'>{val.type} - RS {val.price}</h5>
        <div className="seat-rows">
          {
            val.rows.map((val, index) => (
              <div className="seat-row d-flex justify-content-center align-items-baseline" key={index}>
                <p className='me-4'>{val.rowname}</p>
                <div className="seat-cols d-flex">
                  {
                    val.cols.map((val, index) => (
                      <div className="seat-col d-flex me-5" key={index}>
                        {
                          val.seats.map((val, index) => (
                            <div key={index}>
                              {
                                val.status === "available" &&
                                <span className='seat-available mx-2'>{index + 1}</span>
                              }
                              {
                                val.status === "not-available" &&
                                <span className='seat-unavailable mx-2'>{index + 1}</span>
                              }
                            </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>

      </div>
    ))
    return seatoftime
  }

  return (
    <div className='movie-screen'>
      <div className="about-movie">
        <div className="movie-head">
          <h2>{movie.name} - {movie.language} </h2>
          <h4>{movie.type}</h4>
        </div>
        <div className="movie-info d-flex flex-column align-items-center">
          <div className="movie-time">
            <p class="d-inline-flex gap-1">
              {screen.timeslots.map((val, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={`btn ${activeIndex === index ? 'active' : ''}`}
                    data-bs-toggle="button"
                    onClick={() => handleButtonClick(index)}
                  >
                    {val.time}
                  </button>
                )
              })}
            </p>
          </div>
          {generateSeatLayout()}
          <div className="ticket-total">

          </div>
        </div>
      </div>

    </div>
  )
}

export default MoviesScreen