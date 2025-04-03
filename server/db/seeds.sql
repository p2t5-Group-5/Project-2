-- SQLBook: Code

-- Leave this: it's just my Excel formula to turn the CSV into codes for bulk upload
-- ="{" & A$1 & ": '" & A2 & "', " & B$1 & ": '" & B2 & "', " & C$1 & ": '" & C2 & "' },"

-- This file contains the SQL commands to seed the database with initial data.
INSERT INTO users (id, username, usertype, email, password)
VALUES
    (1,'sysadmin','admin','@dmin123','admin@specialshop.com'),
    (2,'mr_jones','seller','sellMOAR','iluvcountingcrows@aol.com'),
    (3,'seller','seller','password','sellsellsell@gmail.com'),
    (4,'casualshopper','buyer','consumer1','shoptilludrop@buy.com'),
    (5,'buyer','buyer','password','buybuybuy@gmail.com');

INSERT INTO categories (id, name, description)
VALUES
    (1, 'Electronics', 'Devices and gadgets'),
    (2, 'Clothing', 'Apparel and accessories'),
    (3, 'Household', 'Household items and kitchenware'),
    (4, 'Books', 'Literature and educational materials'),
    (5, 'Toys', Childrens toys and games'),
    (6, 'Food', 'Groceries and consumables');





