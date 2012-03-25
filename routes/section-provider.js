SectionProvider = function(){};
SectionProvider.prototype.sectionData = {};

SectionProvider.prototype.findAll = function(callback) {
  callback( null, this.sectionData )
};

SectionProvider.prototype.findById = function(id, callback) {
	var result = this.sectionData[id];

	if (!result) {
		result = {
			success: false
			, message: 'Id not found: "' + id + '"'
		};
	}

	callback(result);
};

SectionProvider.prototype.save = function(sectionItems, callback) {
	var sectionCounter = 1
    , sItem
	, key;

	for (key in sectionItems) {
		if (sectionItems.hasOwnProperty(key)) {
			sItem = sectionItems[key];

			// Do we need an id number?  Currently, each section has a unique name that serves as an id?
			sItem._id = sectionCounter++;
			this.sectionData[key] = sItem;
		}
	}

	callback(sectionItems);
};

new SectionProvider().save(
    {
    	borrowers: {
    		title: 'Borrowers'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'profile'
    				, cssClass: 'g1 h1'
    				, img: '/img/blue.jpg'
    				, username: 'Sean'
    				, label: 'avg. time on site'
    			}
     			, {
    				name: 'highlight'
    				, cssClass: 'g1 h3'
    				, img: '/img/deer.jpg'
    				, link: ''
    				, c1: 'Most friends recruited to Kiva'
    				, c2: '140'
    				, c3: 'Erin, Vancouer Canada'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'text'
    				, label: 'the label'
    				, cssClass: 'g1 h2'
    				, value: ['change', 'good', 'support']
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '4.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'hTable'
    				, cssClass: 'g2 h1'
    				, dataset: [
    					{
    						label: 'Facebook'
    						, datum: '30%'
    					}
    					, {
    						label: 'Twitter'
    						, datum: '10%'
    					}
    					, {
    						label: 'Email'
    						, datum: '40%'
    					}
    					, {
    						label: 'Kiva Cards'
    						, datum: '20%'
    					}
    				]
    				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
    			}
    			, {
    				name: 'profile'
    				, cssClass: 'g1 h1'
    				, img: '/img/blue.jpg'
    				, username: 'Sean'
    				, label: 'avg. time on site'
    			}
     			, {
    				name: 'highlight'
    				, cssClass: 'g1 h3'
    				, img: '/img/deer.jpg'
    				, link: ''
    				, c1: 'Most friends recruited to Kiva'
    				, c2: '140'
    				, c3: 'Erin, Vancouer Canada'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'text'
    				, label: 'the label'
    				, cssClass: 'g1 h2'
    				, value: ['change', 'good', 'support']
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, lenders: {
    		title: 'Lenders'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'text'
    				, label: 'the label'
    				, cssClass: 'g1 h2'
    				, value: ['change', 'good', 'support']
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'text'
    				, label: 'the label'
    				, cssClass: 'g1 h2'
    				, value: ['change', 'good', 'support']
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'highlight'
    				, cssClass: 'g1 h3'
    				, img: '/img/deer.jpg'
    				, context: 'Most friends recruited to Kiva'
    				, datum: '140'
    				, descriptor: 'Erin, Vancouer Canada'
    				, link: '#'
    			}
    		]
    	}
    	, site: {
    		title: 'Web Site'
    		, blocks: [
    			{
    				name: 'hTable'
    				, cssClass: 'g2 h1'
    				, dataset: [
    					{
    						label: 'Facebook'
    						, datum: '30%'
    					}
    					, {
    						label: 'Twitter'
    						, datum: '10%'
    					}
    					, {
    						label: 'Email'
    						, datum: '40%'
    					}
    					, {
    						label: 'Kiva Cards'
    						, datum: '20%'
    					}
    				]
    				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, partners: {
    		title: 'Partners'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g3 h5'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, ecosystem: {
    		title: 'Kiva Ecosystem'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    					, cssClass: 'g1 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h4'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h5'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, stories: {
    		title: 'Stories From the Field'
    		, blocks: [
    			{
    				name: 'highlight'
    				, cssClass: 'g2 h2'
    				, img: '/img/stache.jpg'
    //	only use when clicking adds a link			, link: 'http://google.com'
    				, lightbox: [
    					{
    						href: '/img/blue.jpg'
    						, title: 'blue.jpg'
    					}
    					, {
    						href: '/img/deer.jpg'
    						, title: 'deer.jpg'
    					}
    					, {
    						href: '/img/fish.jpg'
    						, title: 'fish.jpg'
    					}
    				]
    				, c2: 'Photo highlights'
    				, c3: 'Best Kiva photos from 2011'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, press: {
    		title: 'Press & Promotions'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, fincances: {
    		title: 'Financial Health'
    		, blocks: [
    			{
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, context: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    }
, function(error, sectionItems){});

exports.SectionProvider = SectionProvider;