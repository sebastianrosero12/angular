create database tienda;

use tienda;

create table productos(
  idArticulo smallint NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) BINARY  NOT NULL  ,
  precio DOUBLE  NOT NULL  ,
  referencia VARCHAR(50),
  descuento DOUBLE  NOT NULL  ,
  imagen VARCHAR(150)  NOT NULL  ,
  stock INT UNSIGNED  NOT NULL  ,
  descripcion TEXT  NULL 
);
describe tienda;