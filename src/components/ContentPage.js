import React, {useEffect, useState} from 'react'

import axios from 'axios';
import '../stylesheets/ContentPage.css'

const ContentPage = () => {

  const [apiData, setApiData] = useState([]);
  const handleData = async() => {
    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: 'rick roll',
        next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
        hl: 'en',
        gl: 'US',
        upload_date: 't',
        type: 'v',
        duration: 's',
        features: 'li;hd',
        sort: 'v'
      },
      headers: {
        'X-RapidAPI-Key': '3b40c0dea8msh009f0bcf88628c3p194d1bjsn4e3c6506765e',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      
      console.log(response.data.contents);
      setApiData(response.data.contents);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleData();
  },[])

  
  return (
    <div className='contentcontainer'>
        {apiData.map((ap) =>  {
          return(
            <>
              <div className='contentbox'>
                <div className='thumbnaildisplay'>
                  <img src={ap.video.thumbnails[1]} className='thumbnail' />
                </div>
                <h3>{ap.video.channelName}</h3>
              </div>
                
            </>
          )
        } 
        )}
    </div>
  )
}

export default ContentPage