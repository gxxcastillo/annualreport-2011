SectionProvider = function (){};
SectionProvider.prototype.sectionData = {};

SectionProvider.prototype.findAll = function (callback) {
  callback( null, this.sectionData )
};

SectionProvider.prototype.findById = function (id) {

    if (id.ty)
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


SectionProvider.prototype.findById = function (ids) {
    var result;

    if (typeof x == 'object') {
        id.forEach(function(val){
            result = this.sectionData[val];
        });
    } else {
        result = this.sectionData[ids];
    }

	if (!result) {
		result = {
			success: false
		};
        console.log(ids)
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
	        sectionList.push({id: this.sectionData[key].id, title: this.sectionData[key].blocks[0].title, order: this.sectionData[key].order});
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
		    , order: 1
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
                    , title: 'Borrowers'
			    }
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h1'
                    , label: 'Money Borrowed'
                    , caption: ':up: vs 2010 $71,096,550'
    				, value: '$89,481,825'
    			}
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h1'
                    , label: 'Loans funded'
                    , caption: ':up: vs 2010 92,216'
                    , value: '110,256'
                }
			    , {
	                name: 'highlight'
	                , cssClass: 'g2 h4'
                    , label: 'Borrower stories'
                    , link: 'http://www.kiva.org/lend/320391'
	                , imgUrl: '/img/2011/agneta.jpg'
                    , caption:'The Butterfly Hunter'
                    , subject:'Agneta'
                    , description: ''
	            }
    			, {
    				name: 'dataGraph'
    				, cssClass: 'g1 h3'
    				, label: 'borrower gender'
                    , dataset: [{label: 'male', value:'24%'},{label:'female', value:'42%'}, {label:'group', value:'34%'}]
    			}
                , {
                    name: 'dataGraph'
                    , cssClass: 'g1 h3'
                    , label: 'Dollars raised per hour (avg by activity)'
                    , dataset: [{label: 'retail', value:'$2045.35'},{label:'Food', value:'$1900.19'}, {label:'agriculture', value:'$1565.96'}]
                    , caption: 'most'
                }
                , {
                    name: 'dataGraph'
                    , cssClass: 'g1 h3'
                    , label: ''
                    , dataset: [{label: 'xxx', value:'$2045.35'},{label:'xxx', value:'$1900.19'}, {label:'xxxx', value:'$1565.96'}]
                    , caption: 'least'
                }
                , {
                    name: 'map'
				    , cssClass: 'g3 h8'
                    , label: 'Number of borrowers by countries (Top 5)'
                    , segments: [
                        {
	                        position: {top: 'X', left: 'X'}
			                , dataset: [
		                        {img:'', label:'Philippines'}
	                            , {label:'20,820 borrowers', value:''}
	                            , {label:'avg loan amount', value:'314.39'}
			                ]
                        }
                        , {
	                        position: {top: 'X', left: 'X'}
			                , dataset: [
				                {img:'', label:'Peru'}
			                     , {label:'18,865 borrowers', value:''}
			                     , {label:'avg loan amount', value:'446.47'}
			                ]
                        }
                        , {
	                        position: {top: 'X', left: 'X'}
			                , dataset: [
				                {img:'', label: ''}
			                     , {label:'18,841 borrowers', value:'300.33'}
			                     , {label:'avg loan amount', value:'text'}
			                ]
                        }
						, {
							position: {top: 'X', left: 'X'}
							, dataset: [
								{img:'', label:'Paraguay'}
						         , {label:'14,589 borrowers', value:''}
						         , {label:'avg loan amount', value:'204.71'}
							]
						}
						, {
							position: {top: 'X', left: 'X'}
							, dataset: [
		                        {img:'', label:'Uganda'}
	                            , {label:'14,345 borrowers', value:''}
	                            , {label:'avg loan amount', value:'271.71'}
							]
						}
                    ]
                    , caption: ['WORLDWIDE','per capita income: $x,xxx', 'Literacy rate: 84%', '*data from The World Bank']
                }
    			, {
    				name: 'text'
    				, cssClass: 'g1 h5'
    				, value: ['loan','years','business', 'children', 'married', 'years_old','family', 'lives']
    				, label: 'most common words from borrower profiles'
    			}
                , {
                    name: 'highlight'
                    , cssClass: 'g1 h4'
                    , label: 'Borrower stories'
                    , link: '#'
                    , imgUrl: ['/img/2011/green-loans.jpg']
                    , caption:'March 1, 2011'
                    , subject:'First Green Loan'
                    , description: 'Mark Omondi Siaya, Kenya'
                }
                , {
                    name: 'highlight'
                    , cssClass: 'g1 h4'
                    , label: 'Borrower stories'
                    , link: 'http://www.kiva.org/lend/324240'
                    , imgUrl: ['img/2011/nshigikira-group.jpg']
                    , caption:'Liveliest photo'
                    , subject:'Nshigikira Group'
                    , description: 'Gitega, Burundi'
                }
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '$399'
    				, label: 'avg loan size'
    				, caption: ':up: vs. 2010 $350'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '26'
    				, label: 'Expired loans'
    				, caption: ':down: vs. 2010 99'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '1.09%'
    				, label: 'Avg default rate'
    				, caption: ':up: vs. 2010 1.08%'
    			}
			    , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '1638'
    				, label: 'Total defaults'
    				, caption: ':down: vs. 2010 3342'
    			}
                , {
                   name: 'dataGraph'
                   , cssClass: 'g1 h1'
                   , label: 'expired loans by activity'
                   , dataset: [{label: 'Retail', value:'36'}, {label:'Housing', value:'25'}, {label:'Services', value:'12'}]

               }
                , {
                   name: 'dataGraph'
                   , cssClass: 'g1 h1'
                   , label: 'highest & lowest default rates by activity and by country'
                   , dataset: [{label: 'farming', value:'0'},{label:'transportation', value:'0'}, {label:'mexxxx', value:'0'}, {label:'texxxx', value:'0'}]
               }
                , {
				    id: 'blah_01'
                    , name: 'highlight'
                    , cssClass: 'g1 h4'
                    , label: 'Borrower stories'

				    // @todo replace with video
                    , lightbox: ['/img/2011/green-loans.jpg', '/img/2011/going-green-nairobi.jpg']
                    , imgUrl: '/img/2011/araksi-video-profile.jpg'
                    , caption:'Video Profile'
                    , subject:'Araksi'
                    , description: 'Talin, Armenia'
                }

    		]
    	}
    	, partners: {
	        id: 'partners'
	        , order: 4
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
                    , title: 'Field Partners'
			    }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Countries with an MFI partner'
                    , caption: ':up: vs. 2010 54'
                    , value: '57'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Dollar amount posted by partners'
                    , caption: ':up: vs. 2010 $74,236,575'
                    , value: '$94,134,925'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'New field partners'
                    , caption: ':down: vs. 2010 27'
                    , value: '26'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Percent of partners who provided loans to underserved populations'
                    , caption: {text: 'Who are underserved populations?', lightbox: "Underserved populations can be refugees, ethnic minorities, or other vulnerable and excluded peoples that have limited access to financial services. Kiva incentivizes partners to go the extra mile and provide these populations with access to much needed loans and non-financial services."}
                    , value: '31%'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Percent of partners who provided loans to underserved regions'
                    , caption: {text: 'What are underserved regions?', lightbox: "Underserved regions are areas that otherwise lack access to adequate financial services. These can be rural, isolated, or simply underdeveloped. Kiva incentivizes partners to go the extra mile and offer financial services to these underserved regions."}
                    , value: '54%'
                }
                , {
                    name: 'custom'
                    , label: 'social performance'
                    , cssClass: 'g1 h5'
                    , value: "<p>Social performance  Different organizations have different social performance strengths. in 2011 Kiva introduced seven Social Performance Badges to recognize partners with a demonstrated commitment to one or more of these areas.</p>"
                }
                , {
                    name: 'custom'
                    , label: 'partnerships in new countries'
                    , cssClass: 'g1 h5'
                    , value: "<p>THIS IS partnerships in new countries HTML BLOCK FTW!</p>"
                }
                , {
                    name: 'highlight'
                    , cssClass: 'g2 h4'
                    , label: 'First non traditional partner'
                    , link: 'http://www.kiva.org/updates/kiva/2011/10/18/please-join-us-in-welcoming-one-acre.html'
                    , imgUrl: 'http://s3-1.kiva.org/img/w100/857318.jpg'
                    , caption:'Jun 29, 2011'
                    , subject:'First non traditional partner'
                    , description: ''
                }
                , {
                    name: 'highlight'
                    , cssClass: 'g2 h4'
                    , label: 'Most loans posted by a partner'
                    , link: 'http://www.kiva.org/partners/128'
                    , imgUrl: 'http://s3-2.kiva.org/img/w100/272879.jpg'
                    , caption:'Most loans posted by a partner'
                    , subject:'4,686'
                    , description: 'Gitega, Burundi'
                }
                , {
                    name: 'map'
                    , label: 'Partners who achieved 6 of 7 badges'
                    , segments: [
				        {
					        position: {top: 'x', left: 'x'}
						    , dataset: [
								{img: 'xxx'}
								, {sprite: {}, label: 'Paraguay'}
						        , {label: 'Kiva loans 2011', value: '$2,986,450'}
						        , {label: 'avg loan size', value: '$205'}
						        , {sprite: {}, label: 'Community Empowerment xx', description: "Fundacion Paraguay offers a wide array of specialized products and services to meet social needs in the community. For this, they have earned Kiva's Family and Community Empowerment badge."}
							]
				        }
				        , {
					        position: {top: 'x', left: 'x'}
						    , dataset: [
                                {img: 'xxx'}
                                , {sprite: {}, label:'Asasah'}
                                , {label: 'Kiva loans 2011', value: '$1,435,550'}
                                , {label: 'avg loan size', value: '$218'}
                                , {sprite: {}, label: 'Vulnerable Group Focus', description: "Working with vulnerable groups in Pakistan is one of Asasah's many strengths. Their efforts to reach and serve the needs of ultra and extremely poor populations have earned Asasah Kiva's Vulnerable Group Focus badge."}
							]
				        }
                        , {
					        position: {top: 'x', left: 'y'}
				            , dataset: [
								{img: '', label: ''}
					            , {sprite: '', label: ''}
					            , {label: 'Kiva loans 2011', text:'735,100'}
					            , {label: 'avg loan size', text:'$316'}
					            , {sprite: {}, label: 'Client Voice', description: "Listening to clients is so important in microfinance. Paglaum has gone above and beyond creating mechanisms for client voices to be heard, and for this they have earned Kiva's Client Voice badge."}
					        ]
				        }
                    ]
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Number of field partners that Kiva performed due diligence on'
                    , caption: ':up: vs 2010 25'
                    , value: '44'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Different languages partners use to post loans'
                    , caption: ':same: vs 2010 6'
                    , value: '6'
                }
                , {
                    name: 'dataMetric'
                    , cssClass: 'g1 h2'
                    , label: 'Number of disolved partnerships'
                    , caption: {text: 'Why do partnerships end?', lightbox: 'xxxxxxxx'}
                    , value: '5'
                }
                , {
                    name: 'text'
                    , cssClass: 'g1 h5'
                    , value: ['Spanish', 'French', 'Portugues', 'English', 'Russian', 'Arabic']
                    , label: 'Languages loans are posted in'
                }
                , {
                   name: 'dataGraph'
                   , cssClass: 'g1 h1'
                   , label: 'Reasons for partnership dissolution (breakdown)'
                   , dataset: [{label: 'Credit problems', value:'3'}, {label:'MFI Choice', value:'2'}, {label:'Country instability', value:'1'}]

                }
                , {
                    name: 'text'
                    , cssClass: 'g1 h5'
                    , value: [{image:'', text:'Burkina Faso'}, {image:'', text:'Georgia'}, {image:'', text:'Turkey'}, {image:'', text:'Yemen'}, {image:'', text:'Zimbabwe'}]
                    , label: 'Partnerships in new countries (list of countries Kiva began lending in 2011)'
                }
                , {
                    name: 'dataGraph'
                    , cssClass: 'g1 h1'
                    , label: 'Percent of partners awarded social performance badges'
                    , dataset: [{label: 'Anti-poverty focus', value:'57%'}, {label:'Entrepreneurial support', value:'50%'}, {label:'Facilitation of savings', value:'44%'}, {label:'Innovation', value:'43%'}, {label: 'Family & community empowerment', value:'41%'}, {label:'Vulnerable group focus', value:'28%'}, {label:'Client Voice', value:'26%'}]
                }


    		]
    	}
    	, site: {
	        id: 'site'
	        , order: 3
    		, blocks: [
			    {
					title: 'Web Site'
				    , name: 'sectionTitle'
				    , cssClass: 'g3 h1'
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
    				, caption: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, lenders: {
	        id: 'lenders'
	        , order: 2
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
				    , title: 'Lenders'
			    }
	            , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g3 h5'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, ecosystem: {
	        id: 'ecosystem'
	        , order: 5
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
				    , title: 'Kiva Ecosystem'
			    }
	            , {
    				name: 'dataMetric'
    				, cssClass: 'g1 h1'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    					, cssClass: 'g1 h2'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
     			, {
    				name: 'dataMetric'
    				, cssClass: 'g2 h3'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h4'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    			, {
    				name: 'dataMetric'
    				, cssClass: 'g1 h5'
    				, value: '5.5'
    				, unit: 'Mins'
    				, label: 'avg. time on site'
    				, caption: 'vs. 2010 5.1 mins'
    			}
    		]
    	}
    	, stories: {
	        id: 'stories'
	        , order: 6
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
				    , title: 'Stories From the Field'
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
	        , order: 7
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
				    , title: 'Press & Promotions'
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
	        , order: 8
    		, blocks: [
			    {
				    name: 'sectionTitle'
				    , cssClass: 'g3 h1'
				    , title: 'Financial Health'
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