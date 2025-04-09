import { Product } from '../interfaces/Product';

export const calculateCartTotal = (cart: Product[], taxRate: number = 0.1) => {
  try {
    // Calculate subtotal by summing price * quantity for each item
    const subtotal = cart.reduce((sum, item) => {
      // Use quantity or default to 1 if not specified
      const quantity = item.quantity || 1;
      // Parse price to make sure it's treated as a number
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price) 
        : item.price || 0;
        
      return sum + (price * quantity);
    }, 0);
    
    // Calculate tax amount
    const taxAmount = subtotal * taxRate;
    
    // Calculate total with tax
    const total = subtotal + taxAmount;
    
    // Return formatted values
    return {
      subtotal: subtotal.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      total: total.toFixed(2)
    };
  } catch (error) {
    console.error("Error calculating cart total:", error);
    return {
      subtotal: "0.00",
      taxAmount: "0.00",
      total: "0.00"
    };
  }
};
