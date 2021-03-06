import {
  ProductState,
  ProductActions,
  GET_PRODUCTS,
} from '../../types'

export default function product(
  state: ProductState = {
    products: []
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
  case GET_PRODUCTS: {
    const { products } = action.payload
    return {
      ...state,
      products: products
    }
  }
 
  default:
    return state
  }
}
