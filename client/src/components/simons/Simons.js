import { SimonConsumer } from '../../providers/SimonProvider';
import Simon from './Simon';
const Simons = ({ simons, grabSimonUsers }) => {
  return (
    <>
      <div>
        { simons.map( s =>
          <>
            <Simon {...s} grabSimonUsers={grabSimonUsers} />
          </>
        )}
      </div>
    </>
  )
}
const ConnectedSimons = (props) => (
  <SimonConsumer>
    { value => (
      <Simons {...props} {...value} />
    )}
  </SimonConsumer>
)
export default ConnectedSimons;