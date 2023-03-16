import {Form, useLoaderData} from 'react-router-dom'

export default function EditItem(){
	const {item} = useLoaderData();

	return (
		<>
			<div id='new-item'>
				<Form method='post'>
					<h2>Edit Item</h2>
					<div>
						<label >Item Name</label>
						<input
							aria-label='name'
							type='text'
							name='itemName'
							defaultValue={item.name}
						/>
					</div>
					<div>
						<label >Item URL</label>
						<input
							aria-label='url'
							type='text'
							name='itemUrl'
							defaultValue={item.url}
						/>
					</div>
					<div>
						<label >Item Notes</label>
						<textarea
							name='itemNotes'
							defaultValue={item.notes}
							rows={6}
						/>
					</div>
					<p>
						<button type='submit'>Save</button>
						<button type='button'>Cancel</button>
					</p>
				</Form>
			</div>
		</>
	)
}