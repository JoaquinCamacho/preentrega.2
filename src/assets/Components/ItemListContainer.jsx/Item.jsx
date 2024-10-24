import React from 'react'

const Item = ({product}) => {
  return (
    <div className='item'>
              <img src={product.img} className='img-item' alt="" />
              <h2 className='text-item'>{product.nombre}</h2>
              <p className='text-item'>{product.precio}</p>

          </div>
  )
}

export default Item