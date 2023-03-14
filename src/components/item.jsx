import {Form} from 'react-router-dom';

export default function Item(){
	const item = {
		id: 1,
		name: 'Nintendo Switch',
		url: 'https://www.amazon.com/Nintendo-Switch-Lite-Coral/dp/B084Y3VVNG/ref=sr_1_7?keywords=nintendo+switch&qid=1678812713&sprefix=ninten%2Caps%2C152&sr=8-7',
		notes: 'Love the pink'
	};

  return (
		<>
			<div id={`item-${item.id}`}>
				<h1>{item.name}</h1>
				<p>
					<a target='_blank' href={item.url}>
						{item.url}
					</a>
				</p>
				<p>{item.notes}</p>
			</div>
			
			<div id={`item-form-${item.id}`}>
				<Form action='edit'>
					<button type='submit'>Edit</button>
				</Form>
				<Form
					method='post'
					action='destroy'
					onSubmit={(event) => {
					event.preventDefault();
					}}
				>
					<button type='submit'>Delete</button>
				</Form>
			</div>
		</>
	)
}