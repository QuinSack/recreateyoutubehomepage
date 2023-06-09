import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faClock, faFire, faGamepad, faHistory, faHome, faMusic, faPlayCircle, faThumbsUp, faTrophy, faUserCircle, faCog, faFlag, faQuestionCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
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
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>Subscriptions</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>Library</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faHistory}></FontAwesomeIcon>
          <h3>History</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>Your videos</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          <h3>Watch later</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
          <h3>Liked videos</h3>
        </div>
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>Playlists</h3>
        </div>
        <div className='sidebarinner'>
          <h3>Subscriptions</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle} color='green'></FontAwesomeIcon>
          <h3>Freecodecamp.org</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle} color='blue'></FontAwesomeIcon>
          <h3>agadmator's chess channel</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle} color='grey'></FontAwesomeIcon>
          <h3>SuperSport</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle} color='red'></FontAwesomeIcon>
          <h3>Programming with Mosh</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle} color='brown'></FontAwesomeIcon>
          <h3>La Liga</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <h3>Thug Life Music</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <h3>PedroTech</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <h3>Dorian DevOps</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <h3>TreasureChrist</h3>
        </div>
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
          <h3>Browse channels</h3>
        </div>
        <div className='sidebarinner'>
          <h3>Explore</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faFire} color='red'></FontAwesomeIcon>
          <h3>Trending</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
          <h3>Music</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
          <h3>Gaming</h3>
        </div>
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faTrophy} color='blue'></FontAwesomeIcon>
          <h3>Sports</h3>
        </div>
        <div className='sidebarinner'>
          <h3>More from YouTube</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>YouTube Studio</h3>
        </div>
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          <h3>YouTube Kids</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faCog} color='grey'></FontAwesomeIcon>
          <h3>Settings</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faFlag} color='grey'></FontAwesomeIcon>
          <h3>Report history</h3>
        </div>
        <div className='sidebarinner'>
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h3>Help</h3>
        </div>
        <div className='sidebarinner1'>
          <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
          <h3>Send feedback</h3>
        </div>
    </div>
  )
}

export default Sidebar