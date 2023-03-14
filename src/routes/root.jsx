import {Outlet, Link} from 'react-router-dom';

export default function Root() {

	return (
		<>
			<div>
				<h1>Hello World!</h1>
				<Link to='/items'>Got to Items</Link>
			</div>
		</>
	);
}