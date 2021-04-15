import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SimonContext = React.createContext();
export const SimonConsumer = SimonContext.Consumer;
const SimonProvider = ({ children }) => {
  const [simons, setSimons] = useState([])
  useEffect( () => {
    axios.get('/api/simons')
      .then(res => setSimons(res.data))
      .catch( err => console.log(err))
  }, [])
  const addSimon = (simon) => {
    axios.post('/api/simon', { simon })
      .then( res => setSimons([...simons, res.data ]))
      .catch( err => console.log(err))
  }
  const updateSimon = (id, simon) => {
    axios.put(`/api/simon/${id}`, { simon })
      .then( res => {
        const updatedSimons = simons.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setSimons(updatedSimons)
      })
      .catch( err => console.log(err))
  }
  const deleteSimon = (id) => {
    axios.delete(`/api/simon/${id}`)
      .then( res => {
        setSimons(simons.filter( s => s.id !== id ))
      })
      .catch( err => console.log(err))
  }
  const grabSimonUsers = (id) => {
    axios.get(`/api/simonUsers/${id}`)
      .then( res => {
        return res.data
      })
      .catch( err => console.log(err))
  }
  return(
    <SimonContext.Provider value={{
      simons,
      addSimon: addSimon,
      updateSimon: updateSimon,
      deleteSimon: deleteSimon,
      grabSimonUsers: grabSimonUsers,
    }}>
      { children }
    </SimonContext.Provider>
  )
}
export default SimonProvider;