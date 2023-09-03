import React from 'react'
import './about.css'
import img from '../images/about.jpg'
import Back from '../Back'
import Heading from '../header/Heading'
const About = () => {
  return (
<>
<section className='about'>
   <Back name='About Us'title='About Us -Who We Are'  cover={img}/>
<div className='container flex mtop'>
   <div className='left row'>
<Heading title='Our Agency Story' subtitle='Check out our company story and work process'/>
   
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aliquam illo minus voluptatem quibusdam repellat cum quam incidunt perspiciatis minima neque, odio eaque repellendus exercitationem cumque vero? Id, in fugit?</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aliquam illo minus voluptatem quibusdam repellat cum quam incidunt perspiciatis minima neque, odio eaque repellendus exercitationem cumque vero? Id, in fugit?</p>
   <button className='btn2'>More About Us</button>
   </div>
   <div className='right row'>
      <img src='./immio.jpg'alt=''/>
   </div>
</div>
</section>
</>
   )
}

export default About