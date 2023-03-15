import {items} from './items-data'

export function createItemApi(request, params){
  const {itemId} = params
	const {itemName, itemUrl, itemNotes} = request
	const orderedIds = items.map(item => item.id).sort()

	const newItem = {
		id: orderedIds + 1,
		name: itemName,
		url: itemUrl,
		notes: itemNotes
	}
    
  items.push(newItem)

  return newItem
}