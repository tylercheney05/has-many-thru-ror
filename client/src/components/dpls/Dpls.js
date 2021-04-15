import { useState, useEffect } from 'react';
import { DplConsumer } from '../../providers/DplProvider';
import axios from 'axios';
import DplForm from './DplForm';
const Dpls = ({ grabDpls, simonId, addDpl }) => {
  const [dpls, setdpls] = useState([])
  useEffect( () => {
    // grabDpls(simonId)
    axios.get(`/api/simons/${simonId}/dpls`)
      .then( res => setdpls(res.data) )
      .catch( err => console.log(err) )
  }, [])
  return(
    <>
      { dpls.length > 0 ? 
        <>
          { dpls.map( d => 
            <>
              <p>{d.capacity}</p>
              <p>{d.location}</p>
              <p>{d.built}</p>
            </>  
          )}
        </>
      : <p>No dpls connected</p>}
      <DplForm simonId={simonId} addDpl={addDpl} />
    </>
  )
}
const ConnectedDpls = (props) => (
  <DplConsumer>
    { value => (
      <Dpls {...props} {...value} />
    )}
  </DplConsumer>
)
export default ConnectedDpls;