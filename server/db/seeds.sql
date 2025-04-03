-- SQLBook: Code

-- Leave this: it's just my Excel formula to turn the CSV into codes for bulk upload and INSERT commands
-- seeds.ts  ="{" & A$1 & ": " & A2 & ", " & B$1 & ": '" & B2 & "', " & C$1 & ": '" & C2 & "', " & D$1 & ": " & D2 & ", " & E$1 & ": " & E2 & ", " & F$1 & ": " & F2 & ", " & G$1 & ": '" & G2 & "'" & " },"
-- INSERT ="(" & A2 & ", " & "'" & B2 & "', '" & C2 & "', " & "" & D2 & ", " & "" & E2 & ", " & "" & F2 & ", " & "'" & G2 & "' " & "), "

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
<<<<<<< HEAD
    (5, 'Toys', Childrens toys and games'),
=======
    (5, 'Toys', 'Childrens toys and games'),
>>>>>>> 6d86fb2d78c7b043cf4faa090cfc5986075298c4
    (6, 'Food', 'Groceries and consumables');

INSERT INTO products (id, name, description, category_id, seller_id, createdAt, updatedAt)
VALUES
    (1, 'GameBoy', 'Electronic game', 1, 2, 32, 'https://m.media-amazon.com/images/I/51K+7ftcmNL._SX522_.jpg' ), 
    (2, 'smart watch', 'watch that keeps track of health stats', 1, 3, 112.48, 'https://www.att.com/scmsassets/global/devices/other/google/google-pixel-watch-3-41mm/defaultimage/obsidian-hero-zoom.png' ), 
    (3, 'old cell phone', 'slow, but it still works', 1, 3, 12, 'https://m.media-amazon.com/images/I/61p2UI2ZPgL._SL1500_.jpg' ), 
    (4, 'battery charger', 'charges AA and AAA batteries', 1, 3, 8, 'https://cdn11.bigcommerce.com/s-1jdv28j2qm/images/stencil/1280x1280/products/3257/6883/1654734712.386.513__46198.1655157767.jpg?c=2' ), 
    (5, 't-shirt', 'Clothing t shirt - Finnish for bear', 2, 2, 6, 'https://us.karhu.com/cdn/shop/products/Photo_1_c2c9d1a3-bcb1-49fd-bf9a-79542dddf04d_1070x.jpg?v=1649252687' ), 
    (6, 'skirt', 'Awesome skirt', 2, 2, 19, 'https://media.kohlsimg.com/is/image/kohls/6102265_Black?wid=805&hei=805&op_sharpen=1' ), 
    (7, 'OCR shoes', 'Shoes for obstacle course running', 2, 2, 79.99, 'https://i.ebayimg.com/images/g/eYEAAOSwQS5nSNOB/s-l1600.webp' ), 
    (8, 'funky socks', 'circus animals and colorful dots', 2, 3, 12.48, 'https://m.media-amazon.com/images/I/71GltrnOEYL._AC_SX679_.jpg' ), 
    (9, 'spatula', 'Household spatula specifically for pancakes', 3, 2, 9, 'https://images.thdstatic.com/productImages/23021817-047a-44da-b63e-1ab531f616ae/svn/grey-kitchen-utensil-sets-985116398m-64_145.jpg' ), 
    (10, 'red curtains', 'Curtains fit for a palace', 3, 3, 11, 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/red-curtain-backdrop-2-pc-~3_2329' ), 
    (11, 'sofa', 'free of bread crumbs, may have loose change', 3, 2, 410, 'https://assets.wfcdn.com/im/45089286/resize-h400-w400%5Ecompr-r85/2928/292865933/Chelcey+62.9%27%27+Upholstered+Sofa.jpg' ), 
    (12, 'area rug', 'with a turtle design', 3, 3, 88, 'https://rioxmall.com/cdn/shop/files/2_NIgBe.jpg?v=1736778850&width=800' ), 
    (13, 'Onyx Storm', 'Books of your favorite clit lit', 4, 2, 27.89, 'https://prodimage.images-bn.com/pimages/9781649377159_p0_v5_s1200x1200.jpg' ), 
    (14, 'Gideon Bible', 'someone handed it over', 4, 2, 0.5, 'https://i.ebayimg.com/images/g/ljIAAOSw3otkurP4/s-l1600.webp' ), 
    (15, 'Conquest Bread', 'The Conquest of Bread by Peter Kropotkin, first edition', 4, 3, 745.8, 'https://pictures.abebooks.com/isbn/9781528772426-us.jpg' ), 
    (16, 'TV Guide', 'From March 7-13, 1992, mint condition', 4, 3, 99, 'https://www.tvguidemagazine.com/archive/suboffer/cache/1990s/1992/9abab358f3f73a6760542724246ab8a90ba3c165.19920307_c1_620.jpg?cached=1593656933' ), 
    (17, 'TMNT Don', 'Toy Teenage Mutant Ninja Turtle Donatello', 5, 2, 48.6, 'https://retrotoyquest.com/wp-content/uploads/2022/07/TMNT-Card-Front-1988-Donatello-768x1005.jpg' ), 
    (18, 'Rubix cube', 'A rubix cube that may or may not be unsolvable', 5, 3, 7, 'https://www.spinmaster.com/static/432e11e0d6e72707df91fe7379962cdc/apaj3jqyv59uylrx7erk.jpg' ), 
    (19, 'GI Joe', 'A Real American Hero', 5, 3, 17.76, 'https://i5.walmartimages.com/asr/57f2f091-fb0b-4196-8ddf-d5539b402edb.2dcd6bdc69b0f2a6f0daeb27ee87ba31.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF' ), 
    (20, 'toy gun', 'Shall not be infringed', 5, 3, 2.22, 'https://m.media-amazon.com/images/I/71W-qrnQCjL._AC_SL1500_.jpg' ), 
    (21, 'Paste sauce', 'Foody pasta sauce', 6, 2, 1.99, 'https://www.kitchentreaty.com/wp-content/uploads/2012/05/magic-3-ingredient-pasta-sauce-8.jpg' ), 
    (22, 'Anchovies', 'fresh import from Italy', 6, 2, 6.5, 'https://i.etsystatic.com/27476817/r/il/980a19/6147825227/il_794xN.6147825227_5yo4.jpg' ), 
    (23, 'Hambone', 'Good for boiling to make a broth', 6, 3, 0.79, 'https://rawdogchews.com/cdn/shop/products/44031-ham-bone.jpg?v=1647442951' ), 
    (24, 'panko crumbs', 'Which I got from my couch', 6, 2, 14, 'https://www.thewickednoodle.com/wp-content/uploads/2023/09/panko-breadcrumbs-recipe-720x720.jpg.webp' );





