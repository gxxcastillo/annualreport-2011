# Kiva's Annual Report

## Installation

* Make sure you have an updated copy of Kiva's VirtualBox-NodeJs-Ubuntu client.
* Clone the [annualreport app](https://github.com/kiva/annualreport) into `/kiva-nodejs/annualreport`

## Local development

* Start the annualreport by running `sudo node /kiva-nodejs/annualreport/app.js`
* Browse to [annualreprot-vm.kiva.org](http://annualreprot-vm.kiva.org)

### Start coding

* `/app.js` is what kicks everything off on the server end.
* `/public/js/main.js` is our client-side "bootstrap" and where you will find references to all our client-side libraries.

## Local testing of the production environment

* Build a local production environment using [r.js](https://github.com/jrburke/r.js): `sudo r.js -o /kiva-nodejs/annualreport/app.build.js `
* Run the annual report app in "production" mode: `sudo env NODE_ENV=production node app.js`
* Alternatively, use the [forever](https://github.com/nodejitsu/forever) module, `sudo forever start /kiva-nodejs/annualreport/app.js`

## Deployment

1. log into boss-01
2. go to /release-scripts
3. run ./kv-annualreport

## The stack

### Javascript MVP / MVC Framework

[Backbone](http://documentcloud.github.com/backbone/) is a light mvc framework; more than enough to suit our needs.

### Script Loading / Client-side dependancy management

[RequireJs](http://requirejs.org/) We run this on the client, as well as on the server.

### Server-side module loading

[r.js](https://github.com/jrburke/r.js/) runs RequireJs in Node.  It allows us to do two really cool things:

1. Use [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) on the server.
2. Use [RequireJs Optimizer](http://requirejs.org/docs/optimization.html#download) to minify and concatenate our js & css.

### Js minification

[UglifyJS](https://github.com/mishoo/UglifyJS) minimizes our javascript files and concatenates them according the to settings passed into the RequireJs Optimizer

### Client-side Feature detection

[Modernizr](http://modernizr.com); We use a very minimal subset of the full libary.

### Templating

[Hogan](http://twitter.github.com/hogan.js/) a is logic-less templating language.  Think of it as [Mustache](https://github.com/janl/mustache.js/) + pre-rendering. We use it on the server & the client.

### Data storage

[mongoDB](http://www.mongodb.org/) `@todo`

### Event logging

[Winston](https://github.com/flatiron/winston) is used to log events & errors

### Profiling

'@todo' Some options could be dtrace or ulimit.

### Integration / Unit Testing

`@todo` Some options could be Should.js, Sinon.js, Mustard.js.  Also, Node comes with its own standard "assert" module, which is a good place to start

## Filing bugs
Please file bugs in redmine, under the ["Annual Report 2011" project](https://bugs.kiva.org/issues/21348)

## More documentation
* @todo link to annualreport page on the wiki page
* @todo link to page on using backbone on the wiki
* @todo link to client-side coding page on the wiki (should have phpStorm validation settings)


