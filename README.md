# Welcome to Flight Services

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path of the root directory in which you are cloing the project.
- Create a `.env` file and create the following variables
  - `PORT=3000`
- Inside `src/config` create a new file `config.json` and then add the following piece of json.

```JSON
 {
  "development": {
    "username": "your_db_login_name",
    "password": "YourPassword",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1", 
    "dialect": "mysql"
  },
  }
```

- Once you have done all the above specified steps go to `src` folder from your `Terminal` and
  execute `npx sequelize db:create`.

## Database Design

- Airplane Table.
- flight.
- Airport.
- city.

- A flights belong to an airplane but a airplane can be used in many flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but flights belong to one airport.

## Flights table

- id - unique id for identifying flights.

## Tables

### City-> id,name,created at,updated at

### Airport->id,name,address,city id,created at,updated at

  Relationship->City has many airports and many airports has a single city (one->many)
