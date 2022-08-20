import React from 'react'
import Img1 from '../../asset/user1.jpg'
import Img2 from '../../asset/user2.jpg'
import Img3 from '../../asset/user3.jpg'
import Img4 from '../../asset/user4.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Users Photo',
    classes: 'border-radius-r'
  },
  {
    id: 2,
    image: Img2,
    title: 'Users Photo',
    classes: 'border-radius-l'
  },
  {
    id: 3,
    image: Img3,
    title: 'Users Photo',
    classes: 'border-radius-r'
  },
  {
    id: 4,
    image: Img4,
    title: 'Users Photo',
    classes: 'border-radius-l'
  },
]

const Hero = () => {
  return (
    <div fluid align-items-center className='hero-container'>
      {data.map(({id, image, title, classes}) => {
        return (
          <div className={`hero-item ${classes}`} key={id}>
            <div className="hero-image">
              <img src={image} alt={title} className={classes} />
            </div>
          </div>
        )
      })}
      
    </div>


  )
}

export default Hero
