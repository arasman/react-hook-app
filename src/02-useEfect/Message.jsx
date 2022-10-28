import { useState, useEffect } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    useEffect(() => {
        //   console.log('Message mounted');
        const onMouseMove = ({x,y}) => {
            const newCoords = {x,y};
            console.log(coords);
            setCoords(newCoords);
        }
        window.addEventListener('mousemove', onMouseMove);
        return () => {
        // console.log('Message unmounted');
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    
  return (
    <>
     <h3>Usuario ya existe</h3> 
     {JSON.stringify(coords)}
    </>
  )
}

