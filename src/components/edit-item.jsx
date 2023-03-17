import {Form, useLoaderData} from 'react-router-dom';
import {Box, Heading, TextInput, Textarea, Button, Link} from '@primer/react';

export default function EditItem(){
	const {item} = useLoaderData();

	return (
		<>
			<Box id='new-item'>
				<Form method='post'>
					<Heading className='titles'>Edit Item</Heading>
					<TextInput aria-label="name" name="itemName" placeholder="Name" block className='mb-1'defaultValue={item.name}/>
					<TextInput aria-label="url" name="itemUrl" placeholder="URL" block className='mb-1' defaultValue={item.url}/>
					<Textarea
						name='itemNotes'
						rows={3}
						aria-label='notes'
						placeholder='Notes'
						defaultValue={item.notes}
					/>
					<Box className='form-buttons'>
						<Button type='submit'>Save</Button>
						<Button type='button'>Cancel</Button>
					</Box>
				</Form>
			</Box>
		</>
	)
}