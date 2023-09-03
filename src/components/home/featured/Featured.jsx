import React from 'react'
import './featured.css'
import FeaturedCard from './FeaturedCard'
import Heading from '../../header/Heading'
const Featured = () => {
  return (
<>
<section className='featured background'>
   <div className='container'> 
<Heading title='Featured Property Types' subtitle='Find All Type of Property' />
<FeaturedCard/>
   </div>
</section>
</>
   )
}

export default Featured