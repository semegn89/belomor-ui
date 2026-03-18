export type StockStatus = "in_stock" | "low" | "on_order" | "out";
export type DeliveryETA = "1-3" | "3-7" | "on_request";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  sku: string;
  oem: string[];
  price: number;
  priceB2B?: number;
  stockStatus: StockStatus;
  deliveryETA: DeliveryETA;
  image?: string;
  categoryId: string;
  compatibility?: { make: string; model: string; year: string }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount?: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Filtre", slug: "filtre", productCount: 120 },
  { id: "2", name: "Frâne", slug: "frane", productCount: 85 },
  { id: "3", name: "Amortizare", slug: "amortizare", productCount: 64 },
  { id: "4", name: "Motor", slug: "motor", productCount: 200 },
  { id: "5", name: "Electric", slug: "electric", productCount: 90 },
  { id: "6", name: "Transmisie", slug: "transmisie", productCount: 45 },
];

export const brands: Brand[] = [
  { id: "1", name: "Bosch", slug: "bosch" },
  { id: "2", name: "Mann-Filter", slug: "mann-filter" },
  { id: "3", name: "SKF", slug: "skf" },
  { id: "4", name: "Valeo", slug: "valeo" },
  { id: "5", name: "Brembo", slug: "brembo" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "filtru-ulei-bosch-0986af3021",
    name: "Filtru ulei motor Bosch",
    brand: "Bosch",
    sku: "BEL-0986AF3021",
    oem: ["0 986 423 001", "0986423001"],
    price: 89.99,
    priceB2B: 72.0,
    stockStatus: "in_stock",
    deliveryETA: "1-3",
    categoryId: "1",
    compatibility: [
      { make: "BMW", model: "3 Series E90", year: "2005-2012" },
      { make: "Volkswagen", model: "Golf V", year: "2003-2008" },
    ],
  },
  {
    id: "2",
    slug: "filtru-aer-mann-c35154",
    name: "Filtru aer habitaclu Mann",
    brand: "Mann-Filter",
    sku: "BEL-C35154",
    oem: ["C 35 154", "C35154"],
    price: 45.5,
    stockStatus: "low",
    deliveryETA: "1-3",
    categoryId: "1",
    compatibility: [{ make: "Audi", model: "A4 B7", year: "2004-2008" }],
  },
  {
    id: "3",
    slug: "placute-frane-fata-brembo-p83078",
    name: "Plăcuțe frână față Brembo",
    brand: "Brembo",
    sku: "BEL-P83078",
    oem: ["P 83 078"],
    price: 189.0,
    priceB2B: 151.2,
    stockStatus: "on_order",
    deliveryETA: "3-7",
    categoryId: "2",
    compatibility: [{ make: "BMW", model: "5 Series F10", year: "2010-2016" }],
  },
  {
    id: "4",
    slug: "filtru-combustibil-bosch-0450904012",
    name: "Filtru combustibil Bosch",
    brand: "Bosch",
    sku: "BEL-0450904012",
    oem: ["0 450 904 012"],
    price: 125.0,
    stockStatus: "in_stock",
    deliveryETA: "1-3",
    categoryId: "1",
  },
  {
    id: "5",
    slug: "amortizor-spate-sachs-314768",
    name: "Amortizor spate Sachs",
    brand: "Sachs",
    sku: "BEL-314768",
    oem: ["314 768"],
    price: 280.0,
    stockStatus: "out",
    deliveryETA: "on_request",
    categoryId: "3",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProducts(filters?: { category?: string; q?: string }): Product[] {
  let list = [...products];
  if (filters?.category) {
    const cat = categories.find((c) => c.slug === filters.category);
    if (cat) list = list.filter((p) => p.categoryId === cat.id);
  }
  if (filters?.q) {
    const q = filters.q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.oem.some((o) => o.toLowerCase().includes(q))
    );
  }
  return list;
}
