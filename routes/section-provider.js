SectionProvider = function (){};
SectionProvider.prototype.sectionData = {};

SectionProvider.prototype.findAll = function (callback) {
  callback( null, this.sectionData )
};

SectionProvider.prototype.findById = function (id, callback) {
	var result = this.sectionData[id];

	if (!result) {
		result = {
			success: false
			, message: 'Id not found: "' + id + '"'
		};
	} else {
		// @todo, this is pretty lame but enough for now...
		result.success = true;
	}

	callback(result);
};

SectionProvider.prototype.getList = function () {
	var sectionList = []
	, key;

    for(key in this.sectionData) {
        if (this.sectionData.hasOwnProperty(key)) {
	        sectionList.push({id: this.sectionData[key].id, title: this.sectionData[key].title, order: this.sectionData[key].order});
        }
    }

    return sectionList;
}

SectionProvider.prototype.save = function (sectionItems, callback) {
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
            id: 'borrowers'
    		, title: 'Borrowers'
		    , order: 1
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
	        id: 'lenders'
    		, title: 'Lenders'
	        , order: 2
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
	        id: 'site'
    		, title: 'Web Site'
	        , order: 3
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
	        id: 'partners'
    		, title: 'Partners'
	        , order: 4
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
	        id: 'ecosystem'
    		, title: 'Kiva Ecosystem'
	        , order: 5
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
	        id: 'stories'
    		, title: 'Stories From the Field'
	        , order: 6
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
	        id: 'press'
    		, title: 'Press & Promotions'
	        , order: 7
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
    	, finances: {
	        id: 'finances'
    		, title: 'Financial Health'
	        , order: 8
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
, function (error, sectionItems){});

module.exports = SectionProvider;