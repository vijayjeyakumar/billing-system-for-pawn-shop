const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const DB_PATH = './tpnBankersDatabase.db' 
// Create database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }


});

module.exports = sqliteDb;