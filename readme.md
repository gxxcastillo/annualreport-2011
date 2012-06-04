# Kiva's Annual Report

## Installation

* ~~Make sure you have an updated copy of Kiva's VirtualBox-NodeJs-Ubuntu client.~~ Talk to Gabriel about getting a copy of his local development environment.
* Clone the [annualreport app](https://github.com/kiva/annualreport) into `/kiva-nodejs/annualreport`

## Local development

* Start the annualreport by running `sudo node /kiva-nodejs/annualreport/app.js`
* Alternatively, you can also run the annualreport with `sudo forever start /kiva-nodejs/annualreport/app.js`
* Once the annualreport app is running, browse to [annualreport-vm.kiva.org](http://annualreport-vm.kiva.org)

### Start coding

* `/app.js` is what kicks everything off on the server end.
* `/public/js/main.js` is our client-side "bootstrap" and where you will find references to all our client-side libraries.

### phpStorm

#### Import default validation settings:

1. Go to PhpStorm > preferences > inspections
2. Click "import"
3. browse to `annualreport/kv_nodejs_validation_settings.xml`

#### Install phpStorm - handlebars plugin

This plugin makes it so phpStorm knows how to recognize and parse "mustache" style templates

1. IDE Settings -> Plugins -> Browse repositories -> Search for "handlebars"
2. Install & Restart phpStorm

## Local testing of the production environment

* Build a local production environment using [r.js](https://github.com/jrburke/r.js): `sudo r.js -o app.build.js`.  This will create a new folder, `/public_build`, which contains all minified javascript and a copy of the `/public` foler.
* Run the annual report app in "production" mode: `sudo env NODE_ENV=production node app.js`
* Alternatively, use the [forever](https://github.com/nodejitsu/forever) module, `sudo forever start app.js`

## Deployment [@todo currently only works when logged in as "gabriel"]

1. log into boss-01.kiva.org
2. go to ~/release-scripts
3. run ./kv-deploy-annualreport.sh

## Logs

* /var/log/express
* /var/log/annualreport
* /var/run/annualreport/sock
* /var/run/annualreport/pids

## The stack

### Javascript MV* Framework

[Backbone](http://documentcloud.github.com/backbone/) is a light mvc framework; more than enough to suit our needs.

### Script Loading / Client-side dependancy management

[RequireJs](http://requirejs.org/) syntax wraps all of our client side modules, including third party scripts.  Be sure to wrap any scripts when updating them.

### Server-side module loading

[r.js](https://github.com/jrburke/r.js/) runs RequireJs in Node.  It allows us to do two really cool things:

1. Use [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) on the server.
2. Use [RequireJs Optimizer](http://requirejs.org/docs/optimization.html#download) to minify and concatenate our js & css.

### Js minification

[UglifyJS](https://github.com/mishoo/UglifyJS) minimizes our javascript files and concatenates them according the to settings passed into the RequireJs Optimizer

### Client-side Feature detection

[Modernizr](http://modernizr.com); We use a very minimal subset of the full libary.

### Templating

[Hogan](http://twitter.github.com/hogan.js/) a is logic-less templating language.  Think of it as [Mustache](https://github.com/janl/mustache.js/) but with the ability to pre-render. We use it on the server & the client.

### Data storage

[mongoDB](http://www.mongodb.org/) `@todo`

### Event logging

[Winston](https://github.com/flatiron/winston) (together with "forever") is used to log events & errors

### Profiling

`@todo` Some options could be dtrace or ulimit.

### Integration / Unit Testing

`@todo` Some options could be Should.js, Sinon.js, Mustard.js.  Also, Node comes with its own standard "assert" module, which is a good place to start

## Filing bugs
Please file bugs in redmine, under the ["Annual Report 2011"](https://bugs.kiva.org/issues/21348) project.

## More documentation
* @todo link to annualreport page on the wiki page
* @todo link to page on using backbone on the wiki
* @todo link to client-side coding page on the wiki (should have phpStorm validation settings)


