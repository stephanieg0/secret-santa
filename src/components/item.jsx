import {Form, useLoaderData} from 'react-router-dom';
import {Box, Heading, Text, Button, Link} from '@primer/react';
import {getItemApi} from '../api/get-item-api';

export async function loader({params}) {
  const item = await getItemApi(params);
  return {item};
}

export default function Item(){
	const {item} = useLoaderData()

  return (
		<>
			<Box id={`item-${item.id}`}>
				<Heading className='titles'>{item.name}</Heading>
				<p>
					<Link target='_blank' href={item.url}>
						{item.url}
					</Link>
				</p>
				<Text>{item.notes}</Text>
			</Box>
			
			<Box className='form-buttons'>
				<Form action='edit'>
					<Button type='submit'>Edit</Button>
				</Form>
				<Form
					method='post'
					action='destroy'
				>
					<Button type='submit'>Delete</Button>
				</Form>
			</Box>
		</>
	)
}