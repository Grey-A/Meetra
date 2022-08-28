import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IMG1 from '../../asset/user9.jpg'

const data = [
  {
    id: 1,
    img: IMG1,
    name: 'Elena Robinson',
    method: 'Organiser',
    text: 'Team Leads Meeting - Discussing the startup project and roles',
    members: 6,
    Milestones: 'Overview - Startup Details - Project sales - Progress - Conclusion.',
    button: 1
  },
  {
    id: 2,
    img: IMG1,
    name: 'Elena Robinson',
    method: 'Organiser',
    text: 'Team Leads Meeting - Discussing the startup project and roles',
    members: 6,
    Milestones: 'Overview - Startup Details - Project sales - Progress - Conclusion.',
    button: 1
  },
  {
    id: 3,
    img: IMG1,
    name: 'Elena Robinson',
    method: 'Organiser',
    text: 'Team Leads Meeting - Discussing the startup project and roles',
    members: 6,
    Milestones: 'Overview - Startup Details - Project sales - Progress - Conclusion.',
    button: 1
  }
]

const Dashboard = () => {
  let day = new Date().getDay()
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let daysName = days[day]
  console.log(daysName);

  let sidebar = document.querySelector('#btn-bars')
  let SearchBtn = document.querySelector('#search')

  const [active, setActive] = useState(false);

  const toggleClass = () => {
    active === true ? setActive(false) : setActive(true)
  }


  return (
    <div className='container'>
      <div className={active == true ? ' active sidebar-nav': 'sidebar-nav'}>

        <div className="logo_content">
          <div className="logo-title">
              <div className="logo_name">Meet<span style={{fontWeight: '600'}}>ra</span></div>
          </div>
        </div>
        <i onClick={toggleClass} className='fa fa-bars' id='btn-bars'></i>

        <ul className="nav_list">

          <li>
            <Link to="/home">
              <i className="fa fa-house"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="toolkit">Home</span>
          </li>
          <li>
            <Link to="/home">
              <i className="fas fa-calendar"></i>
              <span className="links_name">Event</span>
            </Link>
            <span className="toolkit">Event</span>
          </li>
          <li>
            <Link to="/home">
              <i className="fa fa-bell"></i>
              <span className="links_name">Notification</span>
            </Link>
            <span className="toolkit">Notification</span>
          </li>
          <li>
            <Link to="/home">
              <i className="fa fa-gear"></i>
              <span className="links_name">Settings</span>
            </Link>
            <span className="toolkit">Settings</span>
          </li>
          <li>
              <i className="fa fa-search"></i>
              <input id='search' type="search" placeholder='Search...'/>
            <span className="toolkit">Search</span>
          </li>

        </ul>
        <div className="dashboard_logout">
          <span className='btn-logout'><i className="fa fa-sign-out"></i></span>
        </div>
      </div>

      <div className="main_content">
        <div className="main_content_header">
          <div className="div-main_title">
            <h2 className="user_profile-title">
              Hey 👋, enjoy you meet!
            </h2>
            You have {data.length} meetings scheduled!
          </div>
          <div className="join_meet_btns">
            <button><i className="fa fa-plus-circle"> </i> Create Meeting</button>
            <button><i className="fa fa-check"> </i> Join Meeting</button>
          </div>
        </div>
        <h3>Upcoming Meeting</h3>
        <div className="main_content_body">
          {data.map(({id, img, name, method, text, members, Milestones, time, button}) => (
            <div key={id} className='dashboard-card'>
              <div className="card_details">
                <div>
                  <img src={img} alt={`${name} pics`} />
                  <div className="propile_name">
                    <h3>{name}</h3>
                    <h4>{method}</h4>
                  </div>
                </div>
                <div className="card_time">
                    <h3>{daysName}</h3>
                    <h4>{time}</h4>
                </div>
              </div>

              <div className="card_body">
                <h3>{text}</h3>
                <h4>{members} participants</h4>
                <span>Meeting Milestones: {Milestones}</span>
              </div>

              <div className="card_footer">
                <div className='card_footer_btn'>
                  {button === 1 ? <button>Join Meeting</button> 
                   : <>
                  <button>Start Meeting</button> {" "} <button>Edit Detail</button> </> }
                </div> 
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
