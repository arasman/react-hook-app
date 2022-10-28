import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Quote = ({quote, author}) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0, height: 0})
  
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({width, height })
  }, [])


  return (
    <>
     <blockquote 
      className="blockquote text-end"
      style={{display:'flex'}}
    >
          <p
            className="mb-1"
            ref={pRef}
          >{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote> 

        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
 }

Quote.defaultProps = {
    quote: '',
    author: ''
}