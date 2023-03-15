import {items} from './items-data'

export function createItemApi(request, params){
  const {itemId} = params
	const {itemName, itemUrl, itemNotes} = request
	const orderedIds = items.map(item => item.id).sort((a,b) => a - b)
	const lastIdIndex = orderedIds.length - 1
	const newId = orderedIds[lastIdIndex] + 1
	const newItem = {
		id: newId,
		name: itemName,
		url: itemUrl,
		notes: itemNotes
	}
    
  items.push(newItem)

  return newItem
}