import { useState } from 'react';
import { Form } from 'semantic-ui-react';
const DplForm = ({ simonId, addDpl }) => {
  const [dpl, setDpl] = useState({ location: "", built: 0, capacity: 0 })
  const handleSubmit = (e) => {
    e.preventDefault()
    setDpl({...dpl, built: parseInt(dpl.built), capacity: parseInt(dpl.capacity)})
    addDpl(simonId, dpl)
    setDpl({ location: "", built: 0, capacity: 0 })
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        name="location"
        value={dpl.location}
        onChange={(e) => setDpl({ ...dpl, location: e.target.value })}
        label="Location"
      />
      <Form.Input 
        name="built"
        value={dpl.built}
        onChange={(e) => setDpl({ ...dpl, built: e.target.value })}
        label="Built"
      />
      <Form.Input 
        name="capacity"
        value={dpl.capacity}
        onChange={(e) => setDpl({ ...dpl, capacity: e.target.value })}
        label="Capacity"
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}
export default DplForm;