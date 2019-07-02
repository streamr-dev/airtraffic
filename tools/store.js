const AircraftStore = require('mode-s-aircraft-store')
const config = require('./config')
const store = new AircraftStore({
    timeout: 60000 // remove airplane from store if we haven't seen it for 1 minutes
})
const StreamrClient = require('streamr-client')
const client = new StreamrClient({
    // See below for more options
    auth: {
        apiKey: config.streamrApiKey
    }
})

const publishStore = () => {
    store.getAircrafts().forEach(function (aircraft) {
	if (Date.now() - aircraft.seen < 5000) {
       	    const toStream = {
           	id: aircraft.icao,
            	altitude: aircraft.altitude,
           	speed: aircraft.speed,
            	heading: aircraft.heading,
            	latitude: aircraft.lat,
            	longitude: aircraft.lng,
            	callsign: aircraft.callsign,
            	count: aircraft.count,
            	seen: aircraft.seen
            }
            client.publish(config.streamId, toStream)
	    console.log(toStream.id)
	}
    })
}

module.exports = {store, publishStore}
