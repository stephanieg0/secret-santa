// react router link does client side routing
import {Link} from 'react-router-dom';
import {Box, Heading} from '@primer/react';

export default function App() {
  return (
		<>
		<Box m={4} className='titles'>
			<Heading sx={{mb: 2}}>Hello, world!</Heading>
			<p>This will get Primer text styles.</p>
			<Link to='/items'>Got to Items</Link>
		</Box>
		</>
  );
}
