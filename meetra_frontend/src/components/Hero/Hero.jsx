import React from 'react'
import Img1 from '../../asset/Meetra-20220820T114304Z-001/Meetra/user1.jpg'
import Img2 from '../../asset/Meetra-20220820T114304Z-001/Meetra/user2.jpg'
import Img3 from '../../asset/Meetra-20220820T114304Z-001/Meetra/user3.jpg'
import Img4 from '../../asset/Meetra-20220820T114304Z-001/Meetra/user4.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'Users Photo'
  },
  {
    id: 2,
    image: Img2,
    title: 'Users Photo'
  },
  {
    id: 3,
    image: Img3,
    title: 'Users Photo'
  },
  {
    id: 4,
    image: Img4,
    title: 'Users Photo'
  },
]

const Hero = () => {
  return (
    <div fluid align-items-center className='hero-container'>
      {data.map(({id, image, title}) => {
        return (
          <div class="hero-item" key={id}>
            <div className="hero-image">
              <img src={image} alt={title} />
            </div>
          </div>
        )
      })}
      
    </div>


  )
}

export default Hero
