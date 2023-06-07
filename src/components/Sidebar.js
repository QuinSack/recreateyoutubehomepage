import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import youtubeshorts from '../images/youtubeshorts.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarinner'>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            <h3>Home</h3>
        </div>
        <div className='sidebarinner'>
            <img src={youtubeshorts} width={35} height={27}/>
            <h3>Shorts</h3>
        </div>
    </div>
  )
}

export default Sidebar