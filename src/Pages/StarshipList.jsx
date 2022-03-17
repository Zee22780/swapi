import { getAllStarships } from "../Services/api-calls";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])
  
  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  }, [])
  
  return (  
    <>
    {starshipList.length ?
    <>
      {starshipList.map((starship) => (
        <Link id='links' 
        to="/starship"
        state={{ starship }}
        key={starship['name']}
        >
          <div id='link-div'>
          {starship['name']}
          </div>
        </Link>
      ))}
    </>
    :
        <>
        <h2>Loading all starships...</h2>
        </>}
    </>
  );
}

export default StarshipList;
