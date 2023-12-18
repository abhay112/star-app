import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './App.css'

const orangeColor = {
  color:"gold",
}

const Star = () => {
  const arr = [0, 1, 2, 3, 4];
  const [orange,setOrange] = useState();
  console.log(orange);
  return (
    <div className='start-img'>
       {arr.map((val, idx) => (
        <div className='star' key={idx}>
          <div>
            <StarIcon onClick={()=>{setOrange(idx)}} 
             style={{ color: orange >= idx ? orangeColor.color : "black" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Star