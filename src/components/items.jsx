import {Outlet, Link, useLoaderData, Form} from 'react-router-dom';
import {getItemsApi} from '../api/get-items-api'

export async function loader() {
  const items = await getItemsApi();
  return {items};
}

export default function Items() {
	const {items} = useLoaderData();

	return (
		<>
			<div id='sidebar'>
				<h1>Items</h1>
				<div>
					<Form method='post'>
						<div>
							<label >Item Name</label>
							<input
								aria-label='name'
								type='text'
								name='itemName'
							/>
						</div>
						<div>
							<label >Item URL</label>
							<input
								aria-label='url'
								type='text'
								name='itemUrl'
							/>
						</div>
						<div>
							<label >Item Notes</label>
							<textarea
								name='itemNotes'
								rows={6}
							/>
						</div>
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
			{/* This is to render the children routes */}
			<div id='detail'><Outlet /></div>
		</>
	);
}