import { create } from 'zustand'
import type { CartState } from '../Interface/CartState'
import type { Product } from '../Data/ProductData'

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product: Product) => {
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id)
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      }
    })
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }))
  },
  remove_On_By_On: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
}))
