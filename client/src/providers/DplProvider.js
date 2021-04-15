import React, { useState } from 'react';
import axios from 'axios';
const DplContext = React.createContext();
export const DplConsumer = DplContext.Consumer;
const DplProvider = ({ children }) => {
  const [dpls, setdpls] = useState([])
  const grabDpls = (simonId) => {
    axios.get(`/api/simons/${simonId}/dpls`)
      .then( res => setdpls(res.data) )
      .catch( err => console.log(err) )
  }
  const addDpl = (simonId, dpl) => {
    axios.post(`/api/simons/${simonId}/dpls`, { dpl })
      .then( res => setdpls([...dpls, res.data]) )
      .catch( err => console.log(err) )
  }
  const updateDpl = (simonId, id, dpl) => {
    axios.put(`/api/simons/${simonId}/dpls/${id}`, { dpl } )
      .then ( res => {
        const updatedDpls = dpls.map( d => {
          if (d.id === id) {
            return res.data 
          }
          return d
        })
        setdpls(updatedDpls)
      })
      .catch( err => console.log(err) )
  }
  const deleteDpl = (simonId, id) => {
    axios.delete(`/api/simons/${simonId}/dpls/${id}`)
      .then( res => setdpls( dpls.filter( d => d.id !== id )))
      .catch( err => console.log(err) )
  }
  return (
    <DplContext.Provider value={{ 
      dpls,
      grabDpls: grabDpls,
      addDpl: addDpl,
      updateDpl: updateDpl,
      deleteDpl: deleteDpl,
    }}>
      { children }
    </DplContext.Provider>
  )
}
export default DplProvider;