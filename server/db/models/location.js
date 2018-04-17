import Location from '../schemas/City'

function findOrCreateByName(cityName){
	return Location.findOrCreate({
		where: {
			name: cityName
		}
	})
	.spread(city => {
    return city.get({
      plain: true
    })
	})
}


export default {
	findOrCreateByName
}
