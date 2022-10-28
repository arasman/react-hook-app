import React from 'react'

export const ShowIncrement = ({increment}) => {
    console.log('painted again ...')
  return (
    <button
    className='btn btn-primary'
    onClick={() => increment()}
    >Increment</button>
  )
}
