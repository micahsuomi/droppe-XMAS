import React from 'react'

import useCarts from '../hooks/useCarts'
import WishListCartTable from '../components/WishList'
export default function WishList() {
  const [cartData] = useCarts()
  
  return (
    <>
      <h1>WishList Page</h1>
      <WishListCartTable data={cartData} />
    </>
  )
}