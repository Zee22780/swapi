import { useState, useEffect } from 'react';
import { getDetails } from '../Services/api-calls';
import { useLocation } from 'react-router-dom';

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipPage(starshipData))
  }, [])

  return (  
    <div id="starship-details">
    <>
    <h2>Starship Details</h2>
    <h4>NAME: {starshipPage.name}</h4>
    <h4>MODEL: {starshipPage.name === starshipPage.model ? "No Model Details" : starshipPage.model}</h4>
    
    <a id="links" href="/">Return to Starship List</a>
    </>
    </div>
  );
}

export default StarshipPage;