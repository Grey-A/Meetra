import React from 'react'
import { Link } from 'react-router-dom'
import IMG from '../../asset/notFound.jpg'

const NotFound = () => {
  return (
    <div style={{color: '#fff', backgroundImage: `url(${IMG})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', }}>
        <h1 style={{textAlign: 'center'}}>404 Not Found</h1>
        <p style={{padding: '1rem'}}>There's nothing to see here. Kindly back space to <Link to="/login" style={{textDecoration: 'underline', color: 'orange'}}>GO BACK</Link></p>
      </div>

    </div>
  )
}

export default NotFound
