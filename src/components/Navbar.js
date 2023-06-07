import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='innernav'>
            <div className='namesection'>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                <h3>YouTube</h3>
            </div>
            <div className='searchsection'>
                <input type='text' placeholder='Search' size={60}/>
                <button type='submit'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar