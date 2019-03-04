import React from 'react';

const image = (props) => {
 // console.log(props)
const style={
  height:"200px",
  width:"200px"
}
  return (   
      <img className="img-thumbnail mr-3 mb-2" style={style}
        src={props.source}
        alt={props.name}    
        onClick={() => props.imageClick(props.imageId)} />    
  )
}

export default image;