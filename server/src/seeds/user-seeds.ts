import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    {id: 1, username: 'sysadmin', usertype: 'admin', password: '@dmin123', email: 'admin@specialshop.com'},
    {id: 2, username: 'mr_jones', usertype: 'seller', password: 'sellMOAR', email: 'iluvcountingcrows@aol.com'},
    {id: 3, username: 'seller', usertype: 'seller', password: 'password', email: 'sellsellsell@gmail.com'},
    {id: 4, username: 'casualshopper', usertype: 'buyer', password: 'consumer1', email: 'shoptilludrop@buy.com'},
    {id: 5, username: 'buyer', usertype: 'buyer', password: 'password', email: 'buybuybuy@gmail.com'},
  ], { individualHooks: true });
};



