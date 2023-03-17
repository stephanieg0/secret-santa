import {Form, useLoaderData, Link} from 'react-router-dom';
import {Box, Heading, TextInput, Textarea, Button} from '@primer/react';

export default function EditItem(){
	const {item} = useLoaderData();

	return (
		<>
			<Box id='new-item'>
				<Form method='post'>
					<Heading className='titles'>Edit Item</Heading>
					<TextInput aria-label='name' name='itemName' placeholder='Name' block className='mb-1'defaultValue={item.name}/>
					<TextInput aria-label='url' name='itemUrl' placeholder='URL' block className='mb-1' defaultValue={item.url}/>
					<Textarea
						name='itemNotes'
						rows={3}
						aria-label='notes'
						placeholder='Notes'
						defaultValue={item.notes}
					/>
					<Box className='form-buttons'>
						<Button type='submit'>Save</Button>
						<Link to={`/items/${item.id}`}>
							<Button type='button'>Cancel</Button>
						</Link>
					</Box>
				</Form>
			</Box>
		</>
	)
}