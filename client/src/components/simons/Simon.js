import { useState, useEffect } from 'react';
import Dpls from '../dpls/Dpls';
const Simon = ({ grabSimonUsers, id, glasses, four_out_of_five, country_origin }) => {
  const [users, setSimonUsers] = useState([])
  useEffect( () => {
    // setSimonUsers(grabSimonUsers(id))
  }, [])
  return (
    <>
      <p>Glasses: { glasses ? "Has Glasses" : "No Glasses"}</p>
      <p>4/5: { four_out_of_five}</p>
      <p>{ country_origin } Country</p>
      <>
      {/* { 
        users.length > 0 ? 
          <>
            {
              users.map( u => 
                <p>{u.name}</p>
              )
            }
          </>
        : <p>Loading</p>
      } */}
        <Dpls simonId={id} />
      </>
    </>
  )
}
export default Simon