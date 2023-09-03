import React from 'react'

const Back = ({title,name,cover}) => {
  return (
<>
<div className='back'>
   <div className='container'>
<span>{name}</span>
<h1>{title}</h1>
   </div>
   <img src={cover} alt=''/>
</div>
</>
   )
}

export default Back