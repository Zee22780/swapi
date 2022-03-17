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
    <>
    <h1>Starship Details</h1>
    <h4>{starshipPage.name}</h4>
    <h4>{starshipPage.model}</h4>
    
    <a href="/">Return to Starship List</a>
    </>
  );
}

export default StarshipPage;