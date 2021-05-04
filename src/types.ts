export const GET_PRODUCTS = 'GET_PRODUCTS'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_USERS = 'GET_USERS'
export const GET_CARTS = 'GET_CARTS'
export const GET_CARTS_DISMISSED = 'GET_CARTS_DISMISSED'
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT'
export const REMOVE_CART = 'REMOVE_CART'

// UI types
export type ImageProps = {
  image: string
  title: string
}

type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  size: Size
  backgroundColor?: string
  color?: string
  className?: string
  withMargin?: boolean
  withIcon?: boolean
  icon?: string
  noBackgroundColor?: boolean
  outlined?: boolean
  text: string
  onClickRes?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type ProductItemProps = {
  id: string
  product: Product
  image: string
  title: string
  price: any
  description: string
  category: string
  quantity: number
  discardItemOnClick: Function
  checkout?: boolean
  totalPrice: string | number
  totalDiscount: any
}

export type UserProps = {
  firstName: string
  lastName: string
  email: string
}

export type CartListProps = {
  cartData: any
  checkout?: boolean
}

export type CartItemProps = {
  id: number
  cart: Cart
  userId: number
  user?: any
  date: string
  products: ProductInCart[]
  checkout?: boolean
  calculateTotalPurchase: Function
}

// Product types
export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  total?: string | number
}

export type ProductInCart = {
  productId: number
  quantity: number
  product: Product
  total: number
}

//Product actions types
export type GetProductsAction = {
  type: typeof GET_PRODUCTS
  payload: {
    products: Product[]
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ProductActions = GetProductsAction | RemoveProductAction

// User types
export type Geolocation = {
  lat: string
  ling: string
}

export type Address = {
  geolocation: Geolocation
  city: string
  street: string
  number: number
  zipcode: number
}

export type Name = {
  firstname: string
  lastname: string
}

export type User = {
  address: Address
  id: number
  email: string
  username: string
  password: string
  name: Name
  phone: string
}

// User actions types
export type GetUsersAction = {
  type: typeof GET_USERS
  payload: {
    users: User[]
  }
}

export type UserActions = GetUsersAction

// Cart types
export type Cart = {
  id: number
  userId: number
  date: string
  products: ProductInCart[]
  cartUser?: User
}

// Cart action types
export type GetCartsAction = {
  type: typeof GET_CARTS
  payload: {
    carts: Cart[]
  }
}

export type GetCartsDismissedAction = {
  type: typeof GET_CARTS_DISMISSED
  payload: {
    carts: Cart[]
  }
}

export type RemoveCartProductAction = {
  type: typeof REMOVE_CART_PRODUCT
  payload: {
    cart: Cart
    approvedCartProducts: ProductInCart[]
    dismissedCartProduct: ProductInCart
  }
}

export type RemoveCartAction = {
  type: typeof REMOVE_CART
  payload: {
    cart: Cart
  }
}

export type CartActions =
  | GetCartsAction
  | GetCartsDismissedAction
  | RemoveCartProductAction
  | RemoveCartAction

// State types

export type UserState = {
  users: User[]
}

export type ProductState = {
  products: Product[]
}

export type CartState = {
  carts: Cart[]
  approvedCarts: Cart[]
  disregardedCarts: Cart[]
}

export type AppState = {
  product: ProductState
  user: UserState
  cart: CartState
}
