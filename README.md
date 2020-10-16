# connexOneTest

Purpose: Demonstrate Back End skills with node.js

## Installation

TODO: Describe the installation process

if not already present on the system: `$ sudo npm install -g express-generator`

you might want to check for unwanted running servers: `$ sudo systemctl status apache2`

if any you might want to stop them: `$ sudo systemctl stop apache2`

create new app: `$ express back-end-app --view=jade`

change directory: `$ cd back-end-app`

install dependencies: `$ npm install`

fix audit issues: `$ npm audit fix`

add express-prometheus-middleware to project: `$ npm i --save express-prometheus-middleware`

add prom-client to project: `$ npm i --save prom-client`

add cors to project to support cors when communicating between front-end app and back-end app: `$ npm i --save cors`

optional add nodemon to project as dev dependancy: `$ npm i -D nodemon`

run the app: `$ DEBUG=back-end-app:* npm start`

Download and install "prometheus" from https://prometheus.io/download/


## Usage

TODO: Write usage instructions

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

MIT license
