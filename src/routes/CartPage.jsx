import React from 'react'
import { useCartDispatch, useCartId } from '../components/cartContext'
import { products } from '../components/allProducts'

export default function CartPage() {
    const cartItem = useCartId()
    const cartproducts = cartItem.map(cartid => products.find((product)=> product.productId === cartid) )

    
    console.log(cartproducts,cartItem)
  return (
    <div>
        {cartproducts.map((product,index) => (
        <div key={index}>
            <h2>{product.productName}</h2>
        </div>)
        )}
      <h2>{cartItem}</h2>
    </div>
  )
}
