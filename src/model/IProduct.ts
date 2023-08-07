export type IProduct = {
    name:string,
    description:string,
    price:string,
    discount:string,
    color?:string[],
    link:string,
    ["old-price"]?:string,
    ["image-thumb"]:string,
};