const AircraftStore = require('mode-s-aircraft-store')

const store = new AircraftStore({
    timeout: 60000 // remove airplane from store if we haven't seen it for 1 minutes
})
  

const StreamrClient = require('streamr-client')
const client = new StreamrClient({
    // See below for more options
    auth: {
        apiKey: 'Hb35dKItSxeJI9VSOPBLLAiF6EHACZQqGZo8mwKf3gJw'
    }
})

const publishStore = () => {
    store.getAircrafts().forEach(function (aircraft) {
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
        client.publish('zYg_QyeRQv-ee4kKVldczQ', toStream)
      })
}

module.exports = {store, publishStore}