DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS signups;
DROP TABLE IF EXISTS userSignups;

CREATE TABLE users(
  id serial PRIMARY KEY,
  username VARCHAR (255),
  password VARCHAR (255),
  firstName VARCHAR (255),
  lastName VARCHAR (255),
  email VARCHAR (255),
  phone VARCHAR (255),
  type INT
);

CREATE TABLE signups(
  id serial PRIMARY KEY,
  date DATE,
  time TIME,
  numberOfSignups  INT,
  title VARCHAR(255),
  description TEXT,
  Location  VARCHAR(255),
  active BOOLEAN);

CREATE TABLE userSignups(
  id serial PRIMARY KEY,
  userId integer,
  signupId integer,
  comment VARCHAR(255));

insert into users (username, password, firstName, lastName, email, phone, type)
  values('prknutson', 'foobar', 'Pete', 'Knutson', 'prknutson@yahoo.com', '651-983-3472', 1);
 
 insert into signups (date, time, numberOfSignups, title, description, location, active)
  values('5/10/2019', '7:00AM', 12, '7AM Tee Time on May 10th', 'signup and golf', 'CommonGround GC', true);
