import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='innernav'>
            <div className='namesection'>
                <FontAwesomeIcon icon={faYoutube} size='2x' color='red'></FontAwesomeIcon>
                <h3>YouTube</h3>
            </div>
            <div className='searchsection'>
                <input type='text' placeholder='Search' size={60}/>
                <button type='submit'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
            </div>
            <div className='extras'>
                <FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faBell} size='xl'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faUserCircle} size='2x' color='lightblue'></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}

export default Navbar