// Action types
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_USERS = 'GET_USERS'
export const GET_CARTS = 'GET_CARTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// UI types
export type ImageProps = {
  image: string
  title: string
}

type Size = 'sm' | 'md' | 'lg' 

export type ButtonProps = {
  size: Size
  color: string
  className?: string
  withMargin?: boolean
  withIcon?: boolean
  icon?: string
  text: string
}

export type ProductItemProps = {
  id: string
  image: string
  title: string
  price: any
  description: string
  category: string
  quantity: number
}

export type UserProps = {
  firstName: string
  lastName: string
  email: string
}

export type CartItemProps = {
  id: number
  userId: number
  user?: any 
  date: string
  products: ProductInCart[]
}

// Product types
export type Product = {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
}

export type ProductInCart = {
  productId: number
  quantity: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product,
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product,
  }
}

export type GetProductsAction = {
  type: typeof GET_PRODUCTS
  payload: {
    products: Product[]
  }
}

// User type
export type Geolocation = {
  lat: string,
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

export type GetUsersAction = {
  type: typeof GET_USERS
  payload: {
    users: User[]
  }
}

export type UserActions = 
  | GetUsersAction

export type UserState = {
    users: User[]
}
// Use this union in reducer
export type ProductActions =
  | GetProductsAction
  | AddProductAction
  | RemoveProductAction


// Cart type
export type Cart = {
  id: number
  userId: number
  date: string
  products: ProductInCart[]
}

export type GetCartsAction = {
  type: typeof GET_CARTS
  payload: {
    carts: Cart[]
  }
}

export type CartActions = 
  | GetCartsAction

export type ProductState = {
  inCart: Product[]
  products: Product[]
}

export type CartState = {
  carts: Cart[]
}

export type AppState = {
  product: ProductState
  user: UserState
  cart: CartState
}
