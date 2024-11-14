// src/interfaces/Product.ts

export interface Product {
        idProducto: number,
        sku: string,
        nombreProducto: string,
        precio: number,
        descripcion: string,
        imagenUrl: string | null,
        stock: number,
        categoria: number,
}
  