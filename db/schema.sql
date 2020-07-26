DROP DATABASE IF EXISTS baseball_db;

CREATE DATABASE baseball_db;

USE baseball_db;

CREATE TABLE pitches
(
	id int NOT NULL AUTO_INCREMENT,
	pitch_type varchar(255) NOT NULL,
    thrown BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

