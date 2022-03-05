CREATE DATABASE thegbocms;

-- \c thegbocms

CREATE TABLE posts(
    id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    thumbnail VARCHAR(512),
    "date" timestamp not null default current_timestamp
);