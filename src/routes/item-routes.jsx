import {redirect} from 'react-router-dom'
import {createItemApi} from '../api/create-item-api'
import {updateItemApi} from '../api/update-item-api'
import {deleteItemApi} from '../api/delete-item-api'

export async function create({request, params}) {
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
  const item = await createItemApi(updates, params);
  return {item}
}

export async function edit({request, params}){
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updateItemApi(updates, params)
	return redirect(`/items/${params.itemId}`);
}

export async function destroy({params}){
	await deleteItemApi(params)
	return redirect('/items');
}