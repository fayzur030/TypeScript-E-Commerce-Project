import type { Product } from '../Data/ProductData'
import type { CartItem } from './CartItem'

export interface CartState {
  cart: CartItem[]
  addToCart: (Product: Product) => void
  removeFromCart: (id: number) => void
  remove_On_By_On: (id: number) => void
}
