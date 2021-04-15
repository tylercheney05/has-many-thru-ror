import { useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
const UserSimons = ({ userSimons, grabUserSimons }) => {
  useEffect( () => {
    grabUserSimons()
  }, [])
  return(
    <>
      { userSimons.length > 0 ?
        <>
          { userSimons.map( s =>
            <>
              <p>Glasses: { s.glasses ? "Has Glasses" : "No Glasses"}</p>
              <p>4/5: { s.four_out_of_five}</p>
              <p>{ s.country_origin } Country</p>
            </>
          )}
        </>
      : <p>Loading</p>}
    </>
  )
}
const ConnectedUserSimons = (props) => (
  <AuthConsumer>
    { value => (
      <UserSimons {...props} {...value} />
    )}
  </AuthConsumer>
)
export default ConnectedUserSimons;