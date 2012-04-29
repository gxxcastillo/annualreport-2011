# Kiva's Annual Report
// url to github repo

## Installation

* Make sure you have an updated copy of Kiva's VirtualBox-NodeJs-Ubuntu client.
* Clone the [annualReport](https://github.com/kiva/annualreport) into `/kiva-nodejs/annualreport`

## Local development

* Start the annualreport by running `sudo node /kiva-nodejs/annualreport/app.js`

## Local testing of the production environment

* Build a local production environment using [r.js](https://github.com/jrburke/r.js): `sudo r.js -o /kiva-nodejs/annualreport/app.build.js `
* Run the annual report app in "production" mode: sudo env NODE_ENV=production node app.js
* Alternatively, use the [forever](https://github.com/nodejitsu/forever) module, `sudo forever start /kiva-nodejs/annualreport/app.js'

## Deployment

* log into boss-01
* go to /release-scripts
* run ./kv-annualreport

## Javascript MVP / MVC Framework

[Backbone](http://documentcloud.github.com/backbone/) is a light mvc framework; more than enough to suit our needs.

## Script Loading / Client side dependancy management

[RequireJs](http://requirejs.org/) We run this on the client, as well as on the server.

## Client side Feature detection

[Modernizr](http://modernizr.com) We use a very minimal subset of the full libary.

## Templating

[Hogan](http://twitter.github.com/hogan.js/) Hogan is logic-less templating language.  Think of it as Mustache + pre-rendering. We use it on the server & the client.

## Client side

A good place to start is by looking at "/public/js/main.js".  This is our client side "bootstrap" and where you will find references to our client side libraries.

## More documentation
// link to page on using backbone on the wiki
// link to client side coding page on the wiki (should have phpStorm validation settings)
// link to annualreport page on the wiki page


