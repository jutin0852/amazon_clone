import React from 'react'
import "../styles/SearchErrorPage.scss"


export default function SearchErrorPage({productDetails}) {
  return (
    <div className='search-error-page'>
      <p className='no-results'>No results for {productDetails}</p>
      <p>Try checking your spelling or use more general terms</p>
    </div>
  )
}
