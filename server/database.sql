CREATE DATABASE pgRegister;

CREATE TABLE register(
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    cpf BIGINT NOT NULL,
    birth_date DATE NOT NULL,
    creation_date TIMESTAMP(6),
    update_date TIMESTAMP(6)
);