import {Outlet, Link} from 'react-router-dom';
import {GetItems} from '../api/get-items-api'

export default function Items() {
	const items = GetItems();

	return (
		<>
			<div id="sidebar">
				<h1>Items</h1>
				<div>
					<form id="search-form" role="search">
						<input
							id="q"
							aria-label="Search items"
							placeholder="Search"
							type="search"
							name="q"
						/>
						<div
							id="search-spinner"
							aria-hidden
							hidden={true}
						/>
						<div
							className="sr-only"
							aria-live="polite"
						></div>
					</form>
					<form method="post">
						<button type="submit">Add new Item</button>
					</form>
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
			<div id="detail"><Outlet /></div>
		</>
	);
}