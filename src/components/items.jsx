import {Outlet, Link, useLoaderData, Form, redirect} from 'react-router-dom';
import {getItemsApi} from '../api/get-items-api'
import {createItemApi} from '../api/create-item-api'

export async function loader() {
  const items = await getItemsApi();
  return { items };
}

// this creates the post action in the route
export async function action({request, params}) {	
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
  const item = await createItemApi(updates, params);
  return {item}
}

export default function Items() {
	const { items } = useLoaderData();

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
			<div id='detail'><Outlet /></div>
		</>
	);
}