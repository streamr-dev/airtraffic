# Airtraffic streaming tool
Easy to use integration script for ADS-B signal airtraffic listening. This integration heavily utilizes the modules included in [AirplaneJS](https://github.com/watson/airplanejs) made by Thomas Watson.

Requirements:
Raspberry pi 3+, [ADS-B USB dongle + antenna](https://shop.jetvision.de/epages/64807909.sf/en_GB/?ObjectPath=/Shops/64807909/Products/53200), 

## How to set up and run
Clone the repo

Prerequirements for the script:

Node.js 8 or higher (Use Node 8 for Raspberry Pi)

Librtlsdr is required for ADS-B listening:

Mac: `brew install librtlsdr`

Linux: `apt-get install librtlsdr-dev`

Now you can run “npm install”

Create and configure your .env file to have stream id and Streamr API key

Run `npm start` or `node index.js`

## Setting up systemd for Raspberry Pi

By setting up Systemd for the script will automatically launch on boot and restart in case of errors. 

To do this first you want to find the directory that contains your .service files for Systemd by default it should be located in `/lib/systemd/system` on Raspberry Pi.

In the directory you want to run:
``` 
sudo nano airtraffic.service 
```

Then you should copy and paste this snippet to the file

```
[Unit]
Description=Streamr Airtraffic stream publish script
Documentation=https://github.com/streamr-dev/airtraffic
After=network.target

[Service]
Environment=STREAMR_API_KEY=
Environment=STREAM_ID=
Type=simple
User=pi
ExecStart=/usr/bin/node /home/pi/streamr-airtraffic/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target

```

Make sure that the `User` field is correct and that the `Environment` fields contain your Streamr API key and the streams ID. 

Also make sure that the `ExecStart` script is pointed correctly.

After you have set up the fields run 
```
sudo systemctl daemon.reload
```

And then

```
sudo systemctl start airtraffic
```

You can see if the script is now running with

```
systemctl status airtraffic
```

if ids and the string "new raw data" are being logged and there are no errors, the script should be publishing data to Streamr. You can double check in Streamrs editor if the data is coming in. Remember that the script does not publish planes from the Store that have not been seen in the last 2.5 seconds. Also the Store forgets planes that have not been seen in 60 seconds.

If the systemd start script worked correctly you should then run

```
sudo systemctl enable airtraffic
```

Now you can reboot your Raspberry Pi to see if the script is running automatically on launch. 
