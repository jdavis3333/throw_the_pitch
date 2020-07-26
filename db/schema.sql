DROP DATABASE IF EXISTS baseball_db;

CREATE DATABASE baseball_db;

USE baseball_db;

CREATE TABLE pitches
(
	id int NOT NULL AUTO_INCREMENT,
	pitch_type varchar(255) NOT NULL,
    thrown BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)


-- Heroku: CREATE DATABASE c3sso4uhdycxwe7n;
