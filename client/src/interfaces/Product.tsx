export interface Product {
    id: number | null;
    name: string | undefined;
    description: string | null;
    price: number | null;
    quantity: number | null;
    image_url: string | undefined;
    category: string | null;
    sellerId: number | null;
}