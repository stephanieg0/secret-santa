import {items} from './items-data'

export function getItemApi({itemId}){
  const item = items.filter(function(item){
		if (item.id === parseInt(itemId)){
			return item
		}
	})

	return item[0]
}
