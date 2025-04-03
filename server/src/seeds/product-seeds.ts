import { Product } from '../models/product.js';

export const seedProducts = async () => {
  await Product.bulkCreate([
    {id: 1, name: 'GameBoy', description: 'Electronic game', category_id: 1, seller_id: 2, price: 32, image_url: 'https://m.media-amazon.com/images/I/51K+7ftcmNL._SX522_.jpg' },
    {id: 2, name: 'smart watch', description: 'watch that keeps track of health stats', category_id: 1, seller_id: 3, price: 112.48, image_url: 'https://www.att.com/scmsassets/global/devices/other/google/google-pixel-watch-3-41mm/defaultimage/obsidian-hero-zoom.png' },
    {id: 3, name: 'old cell phone', description: 'slow, but it still works', category_id: 1, seller_id: 3, price: 12, image_url: 'https://m.media-amazon.com/images/I/61p2UI2ZPgL._SL1500_.jpg' },
    {id: 4, name: 'battery charger', description: 'charges AA and AAA batteries', category_id: 1, seller_id: 3, price: 8, image_url: 'https://cdn11.bigcommerce.com/s-1jdv28j2qm/images/stencil/1280x1280/products/3257/6883/1654734712.386.513__46198.1655157767.jpg?c=2' },
    {id: 5, name: 't-shirt', description: 'Clothing t shirt - Finnish for bear', category_id: 2, seller_id: 2, price: 6, image_url: 'https://us.karhu.com/cdn/shop/products/Photo_1_c2c9d1a3-bcb1-49fd-bf9a-79542dddf04d_1070x.jpg?v=1649252687' },
    {id: 6, name: 'skirt', description: 'Awesome skirt', category_id: 2, seller_id: 2, price: 19, image_url: 'https://media.kohlsimg.com/is/image/kohls/6102265_Black?wid=805&hei=805&op_sharpen=1' },
    {id: 7, name: 'OCR shoes', description: 'Shoes for obstacle course running', category_id: 2, seller_id: 2, price: 79.99, image_url: 'https://i.ebayimg.com/images/g/eYEAAOSwQS5nSNOB/s-l1600.webp' },
    {id: 8, name: 'funky socks', description: 'circus animals and colorful dots', category_id: 2, seller_id: 3, price: 12.48, image_url: 'https://m.media-amazon.com/images/I/71GltrnOEYL._AC_SX679_.jpg' },
    {id: 9, name: 'spatula', description: 'Household spatula specifically for pancakes', category_id: 3, seller_id: 2, price: 9, image_url: 'https://images.thdstatic.com/productImages/23021817-047a-44da-b63e-1ab531f616ae/svn/grey-kitchen-utensil-sets-985116398m-64_145.jpg' },
    {id: 10, name: 'red curtains', description: 'Curtains fit for a palace', category_id: 3, seller_id: 3, price: 11, image_url: 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/red-curtain-backdrop-2-pc-~3_2329' },
    {id: 11, name: 'sofa', description: 'free of bread crumbs, may have loose change', category_id: 3, seller_id: 2, price: 410, image_url: 'https://assets.wfcdn.com/im/45089286/resize-h400-w400%5Ecompr-r85/2928/292865933/Chelcey+62.9%27%27+Upholstered+Sofa.jpg' },
    {id: 12, name: 'area rug', description: 'with a turtle design', category_id: 3, seller_id: 3, price: 88, image_url: 'https://rioxmall.com/cdn/shop/files/2_NIgBe.jpg?v=1736778850&width=800' },
    {id: 13, name: 'Onyx Storm', description: 'Books of your favorite clit lit', category_id: 4, seller_id: 2, price: 27.89, image_url: 'https://prodimage.images-bn.com/pimages/9781649377159_p0_v5_s1200x1200.jpg' },
    {id: 14, name: 'Gideon Bible', description: 'someone handed it over', category_id: 4, seller_id: 2, price: 0.5, image_url: 'https://i.ebayimg.com/images/g/ljIAAOSw3otkurP4/s-l1600.webp' },
    {id: 15, name: 'Conquest Bread', description: 'The Conquest of Bread by Peter Kropotkin, first edition', category_id: 4, seller_id: 3, price: 745.8, image_url: 'https://pictures.abebooks.com/isbn/9781528772426-us.jpg' },
    {id: 16, name: 'TV Guide', description: 'From March 7-13, 1992, mint condition', category_id: 4, seller_id: 3, price: 99, image_url: 'https://www.tvguidemagazine.com/archive/suboffer/cache/1990s/1992/9abab358f3f73a6760542724246ab8a90ba3c165.19920307_c1_620.jpg?cached=1593656933' },
    {id: 17, name: 'TMNT Don', description: 'Toy Teenage Mutant Ninja Turtle Donatello', category_id: 5, seller_id: 2, price: 48.6, image_url: 'https://retrotoyquest.com/wp-content/uploads/2022/07/TMNT-Card-Front-1988-Donatello-768x1005.jpg' },
    {id: 18, name: 'Rubix cube', description: 'A rubix cube that may or may not be unsolvable', category_id: 5, seller_id: 3, price: 7, image_url: 'https://www.spinmaster.com/static/432e11e0d6e72707df91fe7379962cdc/apaj3jqyv59uylrx7erk.jpg' },
    {id: 19, name: 'GI Joe', description: 'A Real American Hero', category_id: 5, seller_id: 3, price: 17.76, image_url: 'https://i5.walmartimages.com/asr/57f2f091-fb0b-4196-8ddf-d5539b402edb.2dcd6bdc69b0f2a6f0daeb27ee87ba31.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF' },
    {id: 20, name: 'toy gun', description: 'Shall not be infringed', category_id: 5, seller_id: 3, price: 2.22, image_url: 'https://m.media-amazon.com/images/I/71W-qrnQCjL._AC_SL1500_.jpg' },
    {id: 21, name: 'Paste sauce', description: 'Foody pasta sauce', category_id: 6, seller_id: 2, price: 1.99, image_url: 'https://www.kitchentreaty.com/wp-content/uploads/2012/05/magic-3-ingredient-pasta-sauce-8.jpg' },
    {id: 22, name: 'Anchovies', description: 'fresh import from Italy', category_id: 6, seller_id: 2, price: 6.5, image_url: 'https://i.etsystatic.com/27476817/r/il/980a19/6147825227/il_794xN.6147825227_5yo4.jpg' },
    {id: 23, name: 'Hambone', description: 'Good for boiling to make a broth', category_id: 6, seller_id: 3, price: 0.79, image_url: 'https://rawdogchews.com/cdn/shop/products/44031-ham-bone.jpg?v=1647442951' },
    {id: 24, name: 'panko crumbs', description: 'Which I got from my couch', category_id: 6, seller_id: 2, price: 14, image_url: 'https://www.thewickednoodle.com/wp-content/uploads/2023/09/panko-breadcrumbs-recipe-720x720.jpg.webp' },
  ], { individualHooks: true });
};