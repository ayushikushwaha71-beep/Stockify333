export interface Product {
  id: string
  name: string
  category: string
  price: number
  quantity: number
  status: 'Active' | 'Low Stock'
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rice',
    category: 'Grains',
    price: 50,
    quantity: 100,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Wheat',
    category: 'Grains',
    price: 40,
    quantity: 5,
    status: 'Low Stock'
  },
  {
    id: '3',
    name: 'Sugar',
    category: 'Sweeteners',
    price: 30,
    quantity: 200,
    status: 'Active'
  },
  {
    id: '4',
    name: 'Coffee',
    category: 'Beverages',
    price: 100,
    quantity: 20,
    status: 'Active'
  },
  {
    id: '5',
    name: 'Tea',
    category: 'Beverages',
    price: 80,
    quantity: 2,
    status: 'Low Stock'
  }
]

export const categories = ['Grains', 'Sweeteners', 'Beverages', 'Dairy', 'Fruits']

export const getStats = (products: Product[]) => {
  const totalProducts = products.length
  const lowStock = products.filter(p => p.status === 'Low Stock').length
  const totalCategories = new Set(products.map(p => p.category)).size
  return { totalProducts, lowStock, totalCategories }
}