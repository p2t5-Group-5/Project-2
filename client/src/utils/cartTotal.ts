// import { Product } from "../interfaces/Product";
// import { Products } from "../data/Products"; // Adjust the import path to where Products is defined
// // calulate the total price of the cart
// export function calculateTotalsTaxes() {
//     // Calculate the item total
    
//     let itemTotal = Products.reduce((sum: number, product: Product) => sum + (product.price ?? 0) * product.quantity, 0);
    
//     // Calculate tax (10%)
//     let tax = itemTotal * 0.10;

//     // calculate tip (15%)
//     let tip = itemTotal * 0.15;

//     // Calculate total
//     let total = itemTotal + tax + tip;
    
//     // Update the order object
//     const order = {
//         itemTotal: 0,
//         tax: 0,
//         tip: 0,
//         total: 0
//     };
//     order.itemTotal = itemTotal;
//     order.tax = tax;
//     order.tip = tip;
//     order.total = total;
    
//     // Save the updated order to localStorage
//     localStorage.setItem('order', JSON.stringify(order));
    
//     // Update the UI
//     const orderTotalPriceElement = document.querySelector('.orderTotalPrice');
//     if (orderTotalPriceElement) {
//         orderTotalPriceElement.textContent = `$${total.toFixed(2)}`;
//     }
//     const orderTaxElement = document.querySelector('.orderTax');
//     if (orderTaxElement) {
//         orderTaxElement.textContent = `$${tax.toFixed(2)}`;
//     }
//     const orderTipElement = document.querySelector('.orderTip');
//     if (orderTipElement) {
//         orderTipElement.textContent = `$${tip.toFixed(2)}`;
//     }
// }
// // and return the total price
