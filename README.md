# Handcrafted Harmony
 
## Description
The Handmade Goods Marketplace is an e-commerce platform that facilitates the buying and selling of handmade items. Sellers can list their creations, set prices, and manage orders, while buyers can browse products, make purchases, and communicate directly with sellers. The platform is designed to support a wide range of handmade goods, from jewelry and clothing to home decor and art.


## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)
- [render](#render)




## About
This website allows for users to create an account where they can purchase and sell products online. On our home page has an area where we feature our seller of the month and a featured item of the month from that store. The user can click on the featured item and it will bring you right to that item details page. You can also select Shop and it will bring you into the store. On the shop page you get a breakdown of all the items available in the shop. The seller page has access to the products being sold in that shop by the seller who is logged in, and you can add products as well. Once you have added items to your cart you can go to the cart page and "checkout" (not a functional financial transaction). This allows users to purchase and sell items on our website. Our project is unique because we only sell handmade items.


## Features
 - **User Authentication**: Account Creation, login as a Buyer or Seller
 - **Product Listing**: Modify or Delete Items sold by logged-in Seller (iten name, description, price, image, category), 
 - **Interactive Cart**: Add and remove items, see item cost and cart total ($)
 - **Featured Seller and Item**: Seller of the month and hot item to highlight


## Technologies Used

- **Frontend**: React.js, HTML, CSS, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: (in development)
- **Deployment**: Render (https://project-2-shop.onrender.com)


## Installation

To run this application locally, follow these steps:

### 1. Clone the repository
```
git clone https://github.com/p2t5-Group-5/Project-2.git
```

### 2. Run Node Package Manager installation utility
```
npm i
```

### 3. Build the program, seed the database, start the program
- Developer Mode:
```
npm run potato
```

- Normal run:
```
npm run tomato
```

This will run by default to PORT 3001. To modify which port is used, please refactor the file located at `./server/src/server.ts`


## Usage
when using our repo the user needs to know that they will have to adjust manually the seeds TypeScript files to seed User, Category, and Product data.


## Contributing
The following are some ideas of ways in which you can contribute to this project:

- **Search & Filters**: Buyers can search for products by category, price, or keyword.
- **Order Management**: Sellers can track and manage their orders.
- **Ratings & Reviews**: Buyers can leave reviews for products they've purchased.
- **Secure Payments**: Integrated payment gateway to securely handle transactions.
- **Live Inventory**: Adjust quantities available for sale for a given item, Cart quantities to buy
- **Profile Management**: Toggle between buyer/seller, update username, password, and email

Other potential contributions can be found under the Issues.


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT license.
https://opensource.org/licenses/MIT


## Credits
Zawadi Brown, Andrew Cerna, Seth Eggenburg, Jonathan Hummer, Antonia Stancheva


## Contact
To contact any of these developers, please reference the About page on the footer of the application.


## render
https://project-2-shop.onrender.com