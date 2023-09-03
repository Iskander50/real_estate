import React from 'react'
import Back from '../Back'
import RecentCard from '../home/recent/RecentCard'
import img from'../images/about.jpg'
const Blog = () => {
  return (
<>
<section className='blog-out mb'>
<Back name='Blog' title='Blog Grid - Our Blogs' cover={img}/>
<div className='container reccent'>
  <RecentCard/>
</div>
</section>
</>
    )
}

export default Blog