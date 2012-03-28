SectionProvider = function (){};
SectionProvider.prototype.sectionData = {};

SectionProvider.prototype.findAll = function (callback) {
  callback( null, this.sectionData )
};

SectionProvider.prototype.findById = function (id) {
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

	return result;
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
				    name: 'sectionTitle'
				    , cssClass: 'g2 h1'
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
	                name: 'highlight'
	                , cssClass: 'g2 h4'
	                , imgUrl: '/img/2011/agneta.jpg'
	                , link: '#kjljl'
				    , context: 'The butterfly hunter'
	                , datum: 'Agneta, the butterfly hunter'
	                , descriptor: 'Erin, Vancouer Canada'
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
    				name: 'dataGraph'
    				, cssClass: 'g1 h3'
    				, context: 'borrower gender'
    			}
				, {
				    name: 'hTable'
				    , cssClass: 'g3 h2'
				    , datapoints: [
					    {
							bv0: 'blah'
						    , bv: 'shmah'
					    }
						, {
							bv0: 'blah'
							, bv: 'shmah'
						}
					    , {
							bv0: 'blah'
							, bv: 'shmah'
						}
				    ]
			    }
    			, {
    				name: 'text'
    				, cssClass: 'g1 h5'
    				, valuelist: ['change', 'good', 'support', 'hiahis', 'haokdsfo', 'akdsf', 'aksdf', 'sahahha']
    				, label: 'most common words from borrower profiles'
    			}
			    , {
	                name: 'highlight'
	                , cssClass: 'g1 h5'
	                , imgUrl: '/img/2011/green-loans.jpg'
	                , link: '#kjljl'
				    , context: 'March 1, 2011'
	                , datum: 'First green loan'
	                , descriptor: 'Mark Omandi, Somewhere in Kenya'
	            }
			    , {
	                name: 'highlight'
	                , cssClass: 'g1 h5'
	                , imgUrl: '/img/2011/nshigikira-group.jpg'
	                , link: '#kjljl'
				    , context: 'Liveliest borrower photo'
	                , datum: 'Nshigikira Group'
	                , descriptor: 'Gitego, Berundi'
	            }
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '$399'
    				, label: 'avg loan size'
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
    				name: 'dataGraph'
    				, cssClass: 'g1 h2'
    				, context: 'borrower gender'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '$399'
    				, label: 'avg loan size'
    				, context: 'vs. 2010 5.1 mins'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '$399'
    				, label: 'avg loan size'
    				, context: 'vs. 2010 5.1 mins'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '$399'
    				, label: 'avg loan size'
    				, context: 'vs. 2010 5.1 mins'
    			}
			    , {
	                name: 'highlight'
	                , cssClass: 'g1 h4'
	                , imgUrl: '/img/2011/araksi-video-profile.jpg'
	                , link: '#kjljl'
				    , context: 'Video profile'
	                , datum: 'Araksi'
	                , descriptor: 'Talin, Armenia'
	            }
    		]
    	}
    	, lenders: {
	        id: 'lenders'
    		, title: 'Lenders'
	        , order: 2
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g2 h1'
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
				    name: 'sectionTitle'
				    , cssClass: 'g2 h1'
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
				    name: 'sectionTitle'
				    , cssClass: 'g1 h1'
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
				    name: 'sectionTitle'
				    , cssClass: 'g1 h1'
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
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
			    }
	            , {
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
				    , context: 'Most friends recruited to Kiva'
	                , datum: '140'
	                , descriptor: 'Erin, Vancouer Canada'
	                , link: '#'
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
				    name: 'sectionTitle'
				    , cssClass: 'g1 h1'
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
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
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