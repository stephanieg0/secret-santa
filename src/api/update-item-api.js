import {items} from './items-data'

// This api is not really updating right now
export function updateItemApi(request, params){
	const {itemId} = params
	const {itemName, itemUrl, itemNotes} = request
	const newItem = {
		id: parseInt(itemId),
		name: itemName,
		url: itemUrl,
		notes: itemNotes
	}
	// find index of the item to remove
	const itemIndex = items.findIndex(item => item.id == parseInt(itemId))

	// replace item
	items.splice(itemIndex, 1, newItem)

	return items
}