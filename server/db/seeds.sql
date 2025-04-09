-- Active: 1743554373537@@127.0.0.1@5432@project_2_db
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

INSERT INTO categories (id, category, description)
VALUES
    (1, 'Household', 'Household items and kitchenware'),
    (2, 'Toys', 'Handmade dolls and wooden toys'),
    (3, 'Cards', 'Handmade card for holidays and special occasions'),
    (4, 'Beer Mugs', 'Hand engraved beer mugs');
    -- (1, 'Electronics', 'Devices and gadgets'),
    -- (2, 'Clothing', 'Apparel and accessories'),
    -- (4, 'Books', 'Literature and educational materials'),
    -- (6, 'Food', 'Groceries and consumables');
    -- (1, 'Electronics', 'Devices and gadgets'),
    -- (2, 'Clothing', 'Apparel and accessories'),
    -- (3, 'Household', 'Household items and kitchenware'),
    -- (4, 'Books', 'Literature and educational materials'),
    -- (5, 'Toys', 'Childrens toys and games'),
    -- (6, 'Food', 'Groceries and consumables');

INSERT INTO products (id, name, description, category_id, seller_id, price, image_url)
VALUES
    (1, 'Vintage Bottle', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 1, 2, 98.56, 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A600080443_1?fit=fit&wid=2400&hei=1800'),
    (2, 'Storied Vase', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 1, 2, 112.48, 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A600080370_1?fit=fit&wid=2400&hei=1800'), 
    (3, 'Ceramic Mug Set woth Gold Details', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 1, 3, 130.00, 'https://enjoyceramicart.com/cdn/shop/files/daisymug2.webp?v=1731757322'), 
    (4, 'Ceramic Mug Set - Bumble Bees', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 1, 3, 50.00, 'https://cdn.shoplightspeed.com/shops/628201/files/57890992/image.jpg'), 
    (5, 'Coffee cup with hearts', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 1, 2, 18.00, 'https://s.alicdn.com/@sc04/kf/Hde3793d4f0f844d6bfa0ae8a269d3cec9.jpg_720x720q50.jpg'), 
    (6, 'Knit doll - Rabbit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 2, 2, 48.00, 'https://i.etsystatic.com/25272875/r/il/8a2a5e/3311783399/il_1588xN.3311783399_d6dm.jpg'), 
    (7, 'Owl Wizard Crochet Pattern', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 2, 2, 27.99, 'https://i.etsystatic.com/31258461/r/il/d27d06/6102209882/il_1588xN.6102209882_wdhd.jpg'), 
    (8, 'Amigurimi Teddy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 2, 3, 12.48, 'https://i.etsystatic.com/41536180/r/il/c83762/5375513021/il_1588xN.5375513021_5hfx.jpg'), 
    (9, 'Wooden Montessori Duck Toy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 2, 2, 50.00, 'https://i.etsystatic.com/17906550/r/il/9e2471/3056336850/il_1588xN.3056336850_hc6t.jpg'), 
    (10, 'Waddling Duckies', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 2, 3, 45.00, 'https://i.etsystatic.com/33115825/r/il/bf3535/6493888742/il_1588xN.6493888742_338n.jpg'), 
    (11, 'Couple Heart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 3, 2, 15.00, 'https://i.etsystatic.com/6914574/r/il/87e7ac/626479066/il_1588xN.626479066_cmew.jpg'), 
    (12, 'Valentines Heart Quilling', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 3, 3, 25.00, 'https://i.etsystatic.com/6443268/r/il/06751c/1740389534/il_1588xN.1740389534_gpvb.jpg'), 
    (13, 'Quilled Bunny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 3, 2, 10.00, 'https://i.etsystatic.com/31876778/r/il/80a4ab/6684735167/il_1588xN.6684735167_kued.jpg'), 
    (14, 'Spring Whimsical Bunny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 3, 2, 30.59, 'https://i.etsystatic.com/28760026/r/il/a4b124/6590339304/il_1588xN.6590339304_tt28.jpg'), 
    (15, 'Flower letter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 3, 3, 32.45, 'https://i.etsystatic.com/19841887/r/il/5badd1/3750977493/il_1588xN.3750977493_mi73.jpg'), 
    (16, 'Viking Beer Tankard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 4, 3, 42.10, 'https://i.ebayimg.com/images/g/-BYAAOSwBNNkeOI4/s-l1600.webp'), 
    (17, 'Gallant Gunmetal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 4, 2, 48.00, 'https://www.homewetbar.com/cdn/shop/files/gallant-gunmetal-personalized-beer-mug-242569.jpg?v=1743776285&width=1000'), 
    (18, 'Night shift stoneware', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 4, 3, 37.50, 'https://nightshiftstoneware.com/cdn/shop/files/IMG_3086_1024x1024.heic?v=1734638932'), 
    (19, 'Smokestack', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 4, 3, 50.34, 'https://greyfoxpottery.com/wp-content/uploads/2015/04/custom-beer-steins-smokestack-2.jpg'), 
    (20, 'Pottery Mug', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque eget ex pulvinar fringilla. Pellentesque nisi felis, accumsan eget leo a, laoreet dignissim libero.', 4, 3, 78.28, 'https://i.etsystatic.com/16156688/r/il/4ed8bd/5039617674/il_1588xN.5039617674_jvkb.jpg');
    -- (21, 'Paste sauce', 'Foody pasta sauce', 6, 2, 1.99, 'https://www.kitchentreaty.com/wp-content/uploads/2012/05/magic-3-ingredient-pasta-sauce-8.jpg' ), 
    -- (22, 'Anchovies', 'fresh import from Italy', 6, 2, 6.5, 'https://i.etsystatic.com/27476817/r/il/980a19/6147825227/il_794xN.6147825227_5yo4.jpg' ), 
    -- (23, 'Hambone', 'Good for boiling to make a broth', 6, 3, 0.79, 'https://rawdogchews.com/cdn/shop/products/44031-ham-bone.jpg?v=1647442951' ), 
    -- (24, 'panko crumbs', 'Which I got from my couch', 6, 2, 14, 'https://www.thewickednoodle.com/wp-content/uploads/2023/09/panko-breadcrumbs-recipe-720x720.jpg.webp' );

        -- (1, 'GameBoy', 'Electronic game', 1, 2, 32, 'https://m.media-amazon.com/images/I/51K+7ftcmNL._SX522_.jpg' ), 
    -- (2, 'smart watch', 'watch that keeps track of health stats', 1, 3, 112.48, 'https://www.att.com/scmsassets/global/devices/other/google/google-pixel-watch-3-41mm/defaultimage/obsidian-hero-zoom.png' ), 
    -- (3, 'old cell phone', 'slow, but it still works', 1, 3, 12, 'https://m.media-amazon.com/images/I/61p2UI2ZPgL._SL1500_.jpg' ), 
    -- (4, 'battery charger', 'charges AA and AAA batteries', 1, 3, 8, 'https://cdn11.bigcommerce.com/s-1jdv28j2qm/images/stencil/1280x1280/products/3257/6883/1654734712.386.513__46198.1655157767.jpg?c=2' ), 
    -- (5, 't-shirt', 'Clothing t shirt - Finnish for bear', 2, 2, 6, 'https://us.karhu.com/cdn/shop/products/Photo_1_c2c9d1a3-bcb1-49fd-bf9a-79542dddf04d_1070x.jpg?v=1649252687' ), 
    -- (6, 'skirt', 'Awesome skirt', 2, 2, 19, 'https://media.kohlsimg.com/is/image/kohls/6102265_Black?wid=805&hei=805&op_sharpen=1' ), 
    -- (7, 'OCR shoes', 'Shoes for obstacle course running', 2, 2, 79.99, 'https://i.ebayimg.com/images/g/eYEAAOSwQS5nSNOB/s-l1600.webp' ), 
    -- (8, 'funky socks', 'circus animals and colorful dots', 2, 3, 12.48, 'https://m.media-amazon.com/images/I/71GltrnOEYL._AC_SX679_.jpg' ), 
    -- (9, 'spatula', 'Household spatula specifically for pancakes', 3, 2, 9, 'https://images.thdstatic.com/productImages/23021817-047a-44da-b63e-1ab531f616ae/svn/grey-kitchen-utensil-sets-985116398m-64_145.jpg' ), 
    -- (10, 'red curtains', 'Curtains fit for a palace', 3, 3, 11, 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/red-curtain-backdrop-2-pc-~3_2329' ), 
    -- (11, 'sofa', 'free of bread crumbs, may have loose change', 3, 2, 410, 'https://assets.wfcdn.com/im/45089286/resize-h400-w400%5Ecompr-r85/2928/292865933/Chelcey+62.9%27%27+Upholstered+Sofa.jpg' ), 
    -- (12, 'area rug', 'with a turtle design', 3, 3, 88, 'https://rioxmall.com/cdn/shop/files/2_NIgBe.jpg?v=1736778850&width=800' ), 
    -- (13, 'Onyx Storm', 'Books of your favorite clit lit', 4, 2, 27.89, 'https://prodimage.images-bn.com/pimages/9781649377159_p0_v5_s1200x1200.jpg' ), 
    -- (14, 'Gideon Bible', 'someone handed it over', 4, 2, 0.5, 'https://i.ebayimg.com/images/g/ljIAAOSw3otkurP4/s-l1600.webp' ), 
    -- (15, 'Conquest Bread', 'The Conquest of Bread by Peter Kropotkin, first edition', 4, 3, 745.8, 'https://pictures.abebooks.com/isbn/9781528772426-us.jpg' ), 
    -- (16, 'TV Guide', 'From March 7-13, 1992, mint condition', 4, 3, 99, 'https://www.tvguidemagazine.com/archive/suboffer/cache/1990s/1992/9abab358f3f73a6760542724246ab8a90ba3c165.19920307_c1_620.jpg?cached=1593656933' ), 
    -- (17, 'TMNT Don', 'Toy Teenage Mutant Ninja Turtle Donatello', 5, 2, 48.6, 'https://retrotoyquest.com/wp-content/uploads/2022/07/TMNT-Card-Front-1988-Donatello-768x1005.jpg' ), 
    -- (18, 'Rubix cube', 'A rubix cube that may or may not be unsolvable', 5, 3, 7, 'https://www.spinmaster.com/static/432e11e0d6e72707df91fe7379962cdc/apaj3jqyv59uylrx7erk.jpg' ), 
    -- (19, 'GI Joe', 'A Real American Hero', 5, 3, 17.76, 'https://i5.walmartimages.com/asr/57f2f091-fb0b-4196-8ddf-d5539b402edb.2dcd6bdc69b0f2a6f0daeb27ee87ba31.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF' ), 
    -- (20, 'toy gun', 'Shall not be infringed', 5, 3, 2.22, 'https://m.media-amazon.com/images/I/71W-qrnQCjL._AC_SL1500_.jpg' ), 
    -- (21, 'Paste sauce', 'Foody pasta sauce', 6, 2, 1.99, 'https://www.kitchentreaty.com/wp-content/uploads/2012/05/magic-3-ingredient-pasta-sauce-8.jpg' ), 
    -- (22, 'Anchovies', 'fresh import from Italy', 6, 2, 6.5, 'https://i.etsystatic.com/27476817/r/il/980a19/6147825227/il_794xN.6147825227_5yo4.jpg' ), 
    -- (23, 'Hambone', 'Good for boiling to make a broth', 6, 3, 0.79, 'https://rawdogchews.com/cdn/shop/products/44031-ham-bone.jpg?v=1647442951' ), 
    -- (24, 'panko crumbs', 'Which I got from my couch', 6, 2, 14, 'https://www.thewickednoodle.com/wp-content/uploads/2023/09/panko-breadcrumbs-recipe-720x720.jpg.webp' );





