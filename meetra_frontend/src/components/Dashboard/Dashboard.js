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
    button: 1,
    DayTime: null,
    time: '03:00PM - 04:30PM'
  },
  {
    id: 2,
    img: IMG1,
    name: 'You',
    method: 'Organiser',
    text:  "Design Thinking 101 - A Designer's Ultimate guide",
    members: 101,
    Milestones: 'Overview - Startup Details - Project sales - Progress - Conclusion.',
    button: 2,
    DayTime: '24-08-2022',
    
    time: '10:00AM - 10:30PM'
  },
  {
    id: 3,
    img: IMG1,
    name: 'You',
    method: 'Organiser',
    text: 'Prime Meeting with Ellie, David and Henry',
    members: 3,
    Milestones: 'Overview - Startup Details - Project sales - Progress - Conclusion.',
    button: 2,
    time: '03:00pm - 04:30pm'
  }
]

const Dashboard = () => {
  let day = new Date().getDay()
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let daysName = days[day]

  const [active, setActive] = useState(false);

  const toggleClass = () => {
    active === true ? setActive(false) : setActive(true)
  }


  return (
    <div className='container'>
      <div className={active === true ? ' active sidebar-nav': 'sidebar-nav'}>

        <div className="logo_content" style={{opacity: '111'}}>
          <div className="logo-title">
              <div className="logo_name">Meet<span style={{fontWeight: '600'}}>ra</span></div>
          </div>
        </div>
        <i onClick={toggleClass} className='fa fa-bars' id='btn-bars'></i>

        <ul className="nav_list" style={{opacity: '111'}}>

          <li>
            <Link to="/home">
              <i className="fa fa-house"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="toolkit">Home</span>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-calendar"></i>
              <span className="links_name">Event</span>
            </Link>
            <span className="toolkit">Event</span>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-bell"></i>
              <span className="links_name">Notification</span>
            </Link>
            <span className="toolkit">Notification</span>
          </li>
          <li>
            <Link to="#">
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

      <div className="main_content ">
        <div className="main_content_header">
          <div className="main_title">
            <h1 className="user_profile-title" style={{opacity: '111'}}>
              Hey, enjoy you meet!
            </h1>
            <h3>You have {data.length} meetings scheduled!</h3>
          </div>
          <div className="join_meet_btns">
            <button className='btn btn--outline'><i className="fa fa-plus"> </i> Create Meeting</button>
            <button  className='btn btn--primary'>Join Meeting</button>
          </div>
        </div>
        <h2>Upcoming Meeting</h2>
        <div className="main_content_body">
          {data.map(({id, img, name, method, text, members, Milestones, time, button, DayTime}) => (
            <div key={id} className='dashboard-cards border-radius'>
              <div className="card_details">
                <div className='flex'>
                  <img src={img} alt={`${name} pics`} />
                  <div className="profile_name block">
                    <h3>{name}</h3>
                    <h4>{method}</h4>
                  </div>
                </div>
                <div className="card_time block">
                    <h3>{DayTime == null ? daysName : DayTime}</h3>
                    <h4>{time}</h4>
                </div>
              </div>

              <div className="card_body margin-b-1">
                <h3>{text}</h3>
                <h4>{members} participants</h4>
                <span><b>Meeting Milestones: </b>{Milestones}</span>
              </div>

              <div className="card_footer">
                <div className='card_footer_btn'>
                  {button === 1 ? <button className='btn btn--primary'>Join Meeting</button> 
                   : <>
                  <button className='btn btn--primary'>Start Meeting</button> {" "} <button className='btn btn--primary'>Edit Detail</button> </> }
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
