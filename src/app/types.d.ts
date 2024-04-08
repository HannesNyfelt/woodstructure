export type Product = { 
    id: number
    title: string;
    info: string;
    price: {name?: string; price?: string;}[];
    image: string;
    size: {name?: string; dim?: string;}[];
    color?: { name: string; colorBg: string }[];
}