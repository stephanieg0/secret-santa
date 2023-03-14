import {Outlet, Link, useLoaderData, Form} from 'react-router-dom';
import {getItemsApi} from '../api/get-items-api'
import {createItemApi} from '../api/create-item-api'

export async function loader() {
  const items = await getItemsApi();
  return { items };
}

export async function action() {
	// this creates the post action in the route
  const itemResponse = await createItemApi();
  return { itemResponse };
}

export default function Items() {
	const { items } = useLoaderData();

	return (
		<>
			<div id='sidebar'>
				<h1>Items</h1>
				<div>
					<Form method='post'>
						<button type='submit'>Add new Item</button>
					</Form>
				</div>
				<nav>
					<ul>
					{items.map((item) => (
						<li key={item.id}>
							<Link to={`/items/${item.id}`}>{item.name}</Link>
						</li>
						))}
					</ul>
				</nav>
			</div>
			<div id='detail'><Outlet /></div>
		</>
	);
}