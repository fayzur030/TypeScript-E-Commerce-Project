import type { Product } from '../Data/ProductData'

export interface CartItem extends Product {
  quantity: number
}
