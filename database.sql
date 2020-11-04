DROP TABLE IF EXISTS Venta;
DROP TABLE IF EXISTS Producto;
DROP TABLE IF EXISTS Cliente;

CREATE TABLE Cliente(
    id_cliente                     INT,
    identificacion                 VARCHAR(20)     NOT NULL,
    nombre                         VARCHAR(30)     NOT NULL,
    apellido                     VARCHAR(30)     NOT NULL,
    sexo                         VARCHAR(30)     NOT NULL,
    telefono                     VARCHAR(20)     NOT NULL,
    fecha_nacimiento             DATE             NOT NULL,
	created_at					 DATE, 
	updated_at					 DATE,
    CONSTRAINT pk_cliente PRIMARY KEY (id_cliente)
);

CREATE TABLE Producto(
    id                     INT,
    nombre                 VARCHAR(50)     NOT NULL,
    descripcion         VARCHAR    (200)     NOT NULL,
    precio_unitario     INT             NOT NULL,
	created_at					 DATE, 
	updated_at					 DATE,
    CONSTRAINT pk_producto PRIMARY KEY (id)
);

CREATE TABLE Venta(
    id_venta         INT,
    id_cliente         INT     NOT NULL,
    id_producto     INT     NOT NULL,
    total             INT     NOT NULL,
	created_at					 DATE, 
	updated_at					 DATE,
    CONSTRAINT pk_venta PRIMARY KEY (id_venta),
    CONSTRAINT fk_venta1 FOREIGN KEY (id_cliente)
        REFERENCES Cliente(id_cliente) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_venta2 FOREIGN KEY (id_producto)
        REFERENCES Producto(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

/*select * from venta;*/