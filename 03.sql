CREATE DATABASE QuestGroupBWTdb           
COLLATE Cyrillic_General_CI_AS

USE QuestGroupBWTdb

CREATE TABLE Products
(
    id int NOT NULL IDENTITY,
    name nvarchar(20),
    price decimal(19,4),
);

CREATE TABLE Tags
(
    id int NOT NULL IDENTITY,
    name nvarchar(20)
);

INSERT INTO Products
    (name, price)
VALUES
    ('Milk', '24'),
    ('Tea', '44'),
    ('Bacon', '130'),
    ('Ham', '145'),
    ('Sausage', '120'),
    ('Salmon', '160'),
    ('Sardines', '155'),
    ('Avocado', '45'),
    ('Broccoli', '32'),
    ('Carrot', '18'),
    ('Potato', '16')

INSERT INTO Tags
    (name)
VALUES
    ('meat'),
    ('fish'),
    ('vegetables'),
    ('fruit'),
    ('berries'),
    ('nuts'),
    ('groats'),
    ('sweets'),
    ('juice')


USE QuestGroupBWTdb

SELECT *
FROM Products