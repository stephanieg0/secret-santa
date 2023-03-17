import {Outlet, useLoaderData, Form, Link as ReactRouterLink} from 'react-router-dom';
import {Box, Heading, TextInput, Text, Textarea, Button, ActionList} from '@primer/react';
import {getItemsApi} from '../api/get-items-api';

export async function loader() {
  const items = await getItemsApi();
  return {items};
}

export default function Items() {
	const {items} = useLoaderData();

	return (
		<>
			<Box id='container'>
				<Box id='sidebar'>
					<Heading className='titles'>Items</Heading>
					<div>
						<Form method='post'>
							<Text display='block'>Add a new Item</Text>
							<TextInput aria-label='name' name='itemName' placeholder='Name' block className='mb-1' required/>
							<TextInput aria-label='url' name='itemUrl' placeholder='URL' block className='mb-1'/>
							<Textarea
								name='itemNotes'
								rows={3}
								aria-label='notes'
								placeholder='Notes'
							/>
							<Button type='submit'>Add Item</Button>
						</Form>
					</div>
					<ActionList selectionVariant='single'>
						{items.map((item) => (
							<ActionList.LinkItem as={ReactRouterLink} to={`/items/${item.id}`}  key={item.id} active={window.location.hash === `#/items/${item.id}`}>
								{item.name}
							</ActionList.LinkItem>
						))}
					</ActionList>
				</Box>
				{/* This is to render the children routes */}
				<div id='detail'><Outlet /></div>
			</Box>
		</>
	);
}