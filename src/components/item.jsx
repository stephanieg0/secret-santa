import {Form, useLoaderData} from 'react-router-dom';
import {getItemApi} from '../api/get-item-api'

export async function loader({params}) {
  const item = await getItemApi(params);
  return {item};
}

export default function Item(){
	const {item} = useLoaderData()

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
				>
					<button type='submit'>Delete</button>
				</Form>
			</div>
		</>
	)
}