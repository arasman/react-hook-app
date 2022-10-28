import React from 'react'

export const ShowIncrement = ({increment}) => {
    console.log('painted again ...')
  return (
    <button
    className='btn btn-primary'
    onClick={() => increment(5)}  //(5) = (incrementValue) as argument of the useCallback function useCallBack((incrementValue) => {...}, [])
    >Increment</button>
  )
}
