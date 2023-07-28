

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 10,
// });
     
// const pool = mysql.createConnection(process.env.DATABASE_URL)
// pool.getConnection(function (err, connection) {
//   console.log("Database connected");
// });

// let registration = `CREATE TABLE if not exists registration(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_email varchar(255) not null,
//     user_password varchar(255) not null,
//     PRIMARY KEY (user_id)
// )`;
// let profile = `CREATE TABLE if not exists profile(
//     user_profile_id int auto_increment,
//     user_id int not null,
//     first_name varchar(255) not null,
//     last_name varchar(255) not null,
//     PRIMARY KEY (user_profile_id),
//    FOREIGN KEY (user_id) REFERENCES registration(user_id)
// )`;
// let question = `CREATE TABLE if not exists question(
//     question_id int auto_increment,
//     user_id int not null,
//     title varchar(200) not null,
//     question text(65535) not null,
//     time DateTime not null,        
//     PRIMARY KEY (question_id),
//     FOREIGN KEY (user_id) REFERENCES registration(user_id)
//     )`;
// let answer = `CREATE TABLE if not exists answer(
//     answer_id int auto_increment,
//     user_id int not null,
//     question_id int not null,
//     answer text(65535) not null,
//     time DateTime not null,        
//     PRIMARY KEY (answer_id),
//     FOREIGN KEY (user_id) REFERENCES registration(user_id),
//     FOREIGN KEY (question_id) REFERENCES question(question_id)
//     )`;

// pool.query(registration, (err, results) => {
//   if (err) throw err;
//   console.log("registration table created");
// });
// pool.query(profile, (err, results) => {
//   if (err) throw err;
//   console.log("profile table created");
// });
// pool.query(question, (err, results) => {
//   if (err) throw err;
//   console.log("question table created");
// });
// pool.query(answer, (err, results) => {
//   if (err) throw err;
//   console.log("answer table created");
// });

// module.exports = pool;

// const mysql = require("mysql2");

// Create a connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 10,
// });
const mysql = require("mysql2");

// Alternatively, you can use the connection string if you have it in the environment variable.
 const pool = mysql.createConnection(process.env.DATABASE_URL);

// Define the table creation queries
let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
)`;
// let profile = `CREATE TABLE if not exists profile(
//     user_profile_id int auto_increment,
//     user_id int not null,
//     first_name varchar(255) not null,
//     last_name varchar(255) not null,
//     PRIMARY KEY (user_profile_id),
   
// )`;
let profile = `CREATE TABLE if not exists profile(
  user_profile_id int auto_increment,
  user_id int not null,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  PRIMARY KEY (user_profile_id)
)`;
let question = `CREATE TABLE if not exists question(
  question_id int auto_increment,
  user_id int not null,
  title varchar(200) not null,
  question text not null,
  time DateTime not null,        
  PRIMARY KEY (question_id)
)`;

let answer = `CREATE TABLE if not exists answer(
  answer_id int auto_increment,
  user_id int not null,
  question_id int not null,
  answer text not null,
  time DateTime not null,        
  PRIMARY KEY (answer_id)
)`;

// let question = `CREATE TABLE if not exists question(
//     question_id int auto_increment,
//     user_id int not null,
//     title varchar(200) not null,
//     question text not null,
//     time DateTime not null,        
//     PRIMARY KEY (question_id),
    
// )`;
// let answer = `CREATE TABLE if not exists answer(
//     answer_id int auto_increment,
//     user_id int not null,
//     question_id int not null,
//     answer text not null,
//     time DateTime not null,        
//     PRIMARY KEY (answer_id),
   
// )`;

// Run the queries to create the tables
pool.query(registration, (err, results) => {
  if (err) throw err;
  console.log("registration table created");
});
pool.query(profile, (err, results) => {
  if (err) throw err;
  console.log("profile table created");
});
pool.query(question, (err, results) => {
  if (err) throw err;
  console.log("question table created");
});
pool.query(answer, (err, results) => {
  if (err) throw err;
  console.log("answer table created");
});

module.exports = pool;
