import {items} from './items-data'

export function deleteItemApi({itemId}){
		
		const itemIndex = items.findIndex(item => item.id == parseInt(itemId))
		
		items.splice(itemIndex, 1)

		return items
}