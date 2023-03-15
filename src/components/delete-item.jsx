import {redirect} from 'react-router-dom'
import {deleteItemApi} from '../api/delete-item-api'

export async function action({params}){
	await deleteItemApi(params)
	return redirect('/items');
}