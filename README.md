# Airtraffic streaming tool
Easy to use integration script for ADS-B signal airtraffic listening. This integration heavily utilizes the modules included in [AirplaneJS](https://github.com/watson/airplanejs) made by Thomas Watson.

Requirements:
Raspberry pi 3+, [ADS-B USB dongle + antenna](https://shop.jetvision.de/epages/64807909.sf/en_GB/?ObjectPath=/Shops/64807909/Products/53200), 

## How to use
Clone the repo

Prerequirements for the script:

Node.js 8 or higher?

Librtlsdr is required for ADS-B listening:

Mac: `brew install librtlsdr`

Linux: `apt-get install librtlsdr-dev`

Now you can run “npm install”

Create and configure your .env file to have stream id and Streamr API key

Run npm start

That’s it?
