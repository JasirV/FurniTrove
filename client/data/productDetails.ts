type ProductCategory = "Living Room" | "Bedroom" | "Dining Room" | "Office" | "Outdoor" | "Home Decor";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  inStock: boolean;
  imageUrl: string;
}


export const products: Product[] = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "A stylish and comfortable modern sofa for your living room.",
    price: 499.99,
    category: "Living Room",
    inStock: true,
    imageUrl: "https://example.com/images/modern-sofa.jpg"
  },
  {
    id: 2,
    name: "Wooden Bed Frame",
    description: "Elegant wooden bed frame with a sleek design.",
    price: 299.99,
    category: "Bedroom",
    inStock: true,
    imageUrl: "https://example.com/images/wooden-bed-frame.jpg"
  },
  {
    id: 3,
    name: "Dining Table Set",
    description: "Complete dining table set for family dinners.",
    price: 399.99,
    category: "Dining Room",
    inStock: false,
    imageUrl: "https://example.com/images/dining-table-set.jpg"
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    description: "Comfortable and adjustable office chair for long work hours.",
    price: 159.99,
    category: "Office",
    inStock: true,
    imageUrl: "https://example.com/images/ergonomic-office-chair.jpg"
  },
  {
    id: 5,
    name: "Outdoor Patio Set",
    description: "Durable patio set perfect for outdoor gatherings.",
    price: 699.99,
    category: "Outdoor",
    inStock: true,
    imageUrl: "https://example.com/images/outdoor-patio-set.jpg"
  },
  {
    id: 6,
    name: "Decorative Rug",
    description: "Beautiful and cozy rug to add charm to any room.",
    price: 89.99,
    category: "Home Decor",
    inStock: true,
    imageUrl: "https://example.com/images/decorative-rug.jpg"
  },
  {
    id: 7,
    name: "Decorative Rug",
    description: "Beautiful and cozy rug to add charm to any room.",
    price: 89.99,
    category: "Home Decor",
    inStock: true,
    imageUrl: "https://example.com/images/decorative-rug.jpg"
  },
  {
    id: 8,
    name: "Decorative Rug",
    description: "Beautiful and cozy rug to add charm to any room.",
    price: 89.99,
    category: "Home Decor",
    inStock: true,
    imageUrl: "https://example.com/images/decorative-rug.jpg"
  },
];