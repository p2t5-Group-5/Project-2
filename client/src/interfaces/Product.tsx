export interface Product {
    id: number ;
    name: string | undefined;
    description: string | null;
    price: number | null;
    quantity: number | null;
    image_url: string | undefined;
    category_id: number | null;
    Category: {
        id: number | null;
        category: string | null;
    };
    sellerId: number | null;
}