# Welcome to Flight Services

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path of the root directory in which you are cloing the project.
- Create a `.env` file and create the following variables
   -`PORT=3000`
- Inside `src/config` create a new file `config.json` and then add the following piece of json.

```

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



