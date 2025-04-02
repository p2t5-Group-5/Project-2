export interface Product {
    id: number | null;
    name: string | undefined;
    description: string | null;
    price: number | null;
    image: string | undefined;
    category: string | null;
    sellerId: number | null;
}