// import {memo} from 'react'
import React from 'react'


export const Small = React.memo (({value}) => {
    console.log('Me volví  a pintar');
  return (
    <small>{value}</small>
  )
})