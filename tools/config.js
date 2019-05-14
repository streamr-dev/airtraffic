
require('dotenv').config()

const streamrApiKey = process.env.STREAMR_API_KEY
const streamId = process.env.STREAM_ID

module.exports = {streamId, streamrApiKey}