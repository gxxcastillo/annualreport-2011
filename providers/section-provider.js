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
	    borrowers : {
	        id: 'borrowers'
	        , order: 1
	        , blocks: [
				{
		            name: 'sectionTitle'
		            , cssClass: 'g9 h1'
		            , title: 'Borrowers'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g5 h1'
		            , label: 'Money Borrowed'
		            , caption: ':up: vs 2010 $71,096,550'
		            , value: '$89,481,825'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g4 h1'
		            , label: 'Loans funded'
		            , caption: ':up: vs 2010 92,216'
		            , value: '110,256'
		        }
		        , {
		            name: 'highlight'
		            , cssClass: 'g4 h4'
		            , label: 'Borrower stories'
		            , link: 'http://www.kiva.org/lend/320391'
		            , imgUrl: '/img/2011/agneta.jpg'
		            , caption: 'The Butterfly Hunter'
		            , subject:  'Agneta'
		            , description: ''
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g3 h3'
		            , label: 'borrower gender'
		            , dataset: [
			            {
			                label: 'male'
			                , value: '24%'
			            }
			            , {
			                label: 'female'
			                , value: '42%'
			            }
			            , {
			                label: 'group'
			                , value: '34%'
			            }
		            ]
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g3 h3'
		            , label: 'Dollars raised per hour (avg by activity)'
		            , dataset: [
			            {
			                label: 'retail'
			                , value: '$2045.35'
			            }
			            , {
			                label: 'Food'
			                , value: '$1900.19'
			            }
			            , {
			                label: 'agriculture'
			                , value: '$1565.96'
			            }
		            ]
		            , caption: 'most'
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g3 h3'
		            , label: ''
		            , dataset: [
			            {
			                label: 'xxx'
			                , value: '$2045.35'
			            }
			            , {
			                label: 'xxx'
			                , value: '$1900.19'
			            }
			            , {
			                label: 'xxxx'
			                , value: '$1565.96'
			            }
		            ]
		            , caption: 'least'
		        }
		        , {
		            name: 'map'
		            , cssClass: 'g9 h8'
		            , label: 'Number of borrowers by countries (Top 5)'
		            , segments: [
			            {
			                position: {
			                    top: 'X'
			                    , left: 'X'
			                }
			                , dataset: [
			                    {
				                    'img' : ''
				                    , label: 'Philippines'
				                }
				                , {
				                    label: '20,820 borrowers'
				                    , value: ''
				                }
				                , {
				                    label: 'avg loan amount'
				                    , value: '314.39'
				                }
			                ]
			            }
			            , {
			                position: {
			                    top: 'X'
			                    , left: 'X'
			                }
			                , dataset: [
								{
				                    'img' : ''
				                    , label: 'Peru'
				                }
				                , {
				                    label: '18,865 borrowers'
				                    , value: ''
				                }
				                , {
				                    label: 'avg loan amount'
				                    , value: '446.47'
				                }
							]
			            }
			            , {
			                position: {
			                    top: 'X'
			                    , left: 'X'
			                }
			                , dataset: [
				                {
				                    'img' : ''
				                    , label: ''
				                }
				                , {
				                    label: '18,841 borrowers'
				                    , value: '300.33'
				                }
				                , {
				                    label: 'avg loan amount'
				                    , value: 'text'
				                }
			                ]
				            }
				            , {
				                position: {
				                    top: 'X'
				                    , left: 'X'
				                }
				                , dataset: [{
				                    'img' : ''
				                    , label: 'Paraguay'
				                },
				                {
				                    label: '14,589 borrowers'
				                    , value: ''
				                },
				                {
				                    label: 'avg loan amount'
				                    , value: '204.71'
				                }
						    ]
			            },
			            {
			                position: {
			                    top: 'X'
			                    , left: 'X'
			                },
			                dataset: [
					            {
				                    'img' : ''
				                    , label: 'Uganda'
				                }
				                , {
				                    label: '14,345 borrowers'
				                    , value: ''
				                }
				                , {
				                    label: 'avg loan amount'
				                    , value: '271.71'
				                }
			                ]
			            }
			        ]
		            , caption: ['WORLDWIDE', 'per capita income: $x,xxx', 'Literacy rate: 84%', '*data from The World Bank']
		        }
		        , {
		            name: 'text',
		            cssClass: 'g3 h5',
		            value: ['loan', 'years', 'business', 'children', 'married', 'years_old', 'family', 'lives'],
		            label: 'most common words from borrower profiles'
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Borrower stories',
		            link: '#',
		            imgUrl: ['/img/2011/green-loans.jpg'],
		            caption: 'March 1, 2011',
		            subject:  'First Green Loan',
		            description: 'Mark Omondi Siaya, Kenya'
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Borrower stories',
		            link: 'http://www.kiva.org/lend/324240',
		            imgUrl: ['img/2011/nshigikira-group.jpg'],
		            caption: 'Liveliest photo',
		            subject:  'Nshigikira Group',
		            description: 'Gitega, Burundi'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            value: '$399',
		            label: 'avg loan size',
		            caption: ':up: vs. 2010 $350'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            value: '26',
		            label: 'Expired loans',
		            caption: ':down: vs. 2010 99'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            value: '1.09%',
		            label: 'Avg default rate',
		            caption: ':up: vs. 2010 1.08%'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            value: '1638',
		            label: 'Total defaults',
		            caption: ':down: vs. 2010 3342'
		        }
		        , {
		            name: 'dataGraph',
		            cssClass: 'g3 h1',
		            label: 'expired loans by activity',
		            dataset: [
		                {
			                label: 'Retail',
			                value: '36'
			            },
			            {
			                label: 'Housing',
			                value: '25'
			            },
			            {
			                label: 'Services',
			                value: '12'
			            }
		            ]
		        }
		        , {
		            name: 'dataGraph',
		            cssClass: 'g3 h1',
		            label: 'highest & lowest default rates by activity and by country',
		            dataset: [{
		                label: 'farming',
		                value: '0'
		            },
		            {
		                label: 'transportation',
		                value: '0'
		            },
		            {
		                label: 'mexxxx',
		                value: '0'
		            },
		            {
		                label: 'texxxx',
		                value: '0'
		            }]
		        }
		        , {
		            id: 'blah_01'
		            , name: 'highlight'
		            , cssClass: 'g3 h4'
		            , label: 'Borrower stories'
		            , 'lightbox' : {
			            isVideo: true
			            , urls: ['http://www.youtube.com/embed/_yfhJ0jH5EA?rel=0&amp;wmode=opaque&amp;autoplay=1']
		            }
		            , imgUrl: '/img/2011/araksi-video-profile.jpg'
		            , caption: 'Video Profile'
		            , subject:  'Araksi'
		            , description: 'Talin, Armenia'
		        }
		    ]
	    }
		, lenders: {
	        id: 'lenders'
	        , order: 2
	        , blocks: [
		        {
		            name: 'sectionTitle'
		            , cssClass: 'g9 h1'
		            , title: 'Lenders'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Active Lenders'
		            , caption: ':up: vs. 2010 370,837'
		            , value: '457,739'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'Lending Teams',
		            caption: ':up: vs. 2010 10,578',
		            value: '12,783'
		        }
		        , {
		            name: 'highlight'
		            , cssClass: 'g3 h3'
		            , label: 'Most dollars lent'
		            , link: 'http://www.kiva.org/lender/jamesclayton9485'
		            , imgUrl: '/img/2011/most-prolific-lender.jpg'
		            , caption: 'Most prolific lender'
		            , subject:  '$541,600'
		            , description: 'jbcarioca, Rio de Janeiro, Brazil'
		        }
			    , {
			        name: 'wrapper'
			        , cssClass: 'g9 h3'
			        , label: 'Most used words within lender profiles'
			        , blocks: [
				        {
				            name: 'text',
				            cssClass: 'g3',
				            value: ['help', 'people', 'want', 'world'],
				            label: 'I loan because'
				        }
				        , {
				            name: 'text',
				            cssClass: 'g3',
				            value: ['student', 'manager', 'business', 'teacher'],
				            label: 'Occupation'
				        },
				        {
				            name: 'text'
				            , cssClass: 'g3'
				            , value: ['work', 'people', 'help', 'business']
				            , label: 'About me'
				        }
			        ]
			    }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g6 h1'
		            , label: 'popular ways to invite friends to kiva'
		            , dataset: [
		                {
			                label: 'Email'
			                , value: '48'
			            }
			            , {
			                label: 'Lender url'
			                , value: '22'
			            }
			            , {
			                label: 'Kiva Card'
			                , value: '15'
			            }
			            , {
			                label: 'Team url'
			                , value: '8'
			            }
			            , {
			                label: 'Facebook'
			                , value: '7'
			            }
		            ]
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Invites',
		            link: 'http://www.kiva.org/lender/johngreen',
		            imgUrl: '/img/2011/john-green-most-succesful-invites.jpg',
		            caption: 'Most friends recruited to Kiva',
		            subject:  '953',
		            description: 'John Green, Indianapolis, IN'
		        },
		        {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Sports centric team',
		            link: 'http://www.kiva.org/team/leeds_united_fans',
		            imgUrl: '/img/2011/leeds-lending-team.jpg',
		            caption: 'Most dollars lent by a sports centric team',
		            subject:  '$98,150',
		            description: 'Leeds United Fans'
		        },
		        {
		            name: 'highlight'
		            , cssClass: 'g3 h4'
		            , label: 'Project for awesome'
		            , lightbox: {
						isVideo: true
			            , urls: ['http://www.youtube.com/embed/1jlNXRbsU2E?rel=0&amp;wmode=opaque&amp;autoplay=1']
			        }
			        , singIt: true
		            , imgUrl: '/img/2011/project-for-awsome.jpg'
		            , caption: 'Paige l finch project for awesome'
		            , subject:  ''
		            , description: 'Your just a girl living in the USA how can you finance someone down in Paraguay?'
		        }
	        ]
	    }
	    , partners: {
	        id: 'partners'
	        , order: 4
	        , blocks: [
		        {
		            name: 'sectionTitle',
		            cssClass: 'g9 h1',
		            title: 'Field Partners'
		        },
		        {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'Countries with an MFI partner',
		            caption: ':up: vs. 2010 54',
		            value: '57'
		        },
		        {
		            name: 'dataMetric',
		            cssClass: 'g6 h1',
		            label: 'Dollar amount posted by partners',
		            caption: ':up: vs. 2010 $74,236,575',
		            value: '$94,134,925'
		        },
		        {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'New field partners',
		            caption: ':down: vs. 2010 27',
		            value: '26'
		        },
		        {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'Percent of partners who provided loans to underserved populations',
		            caption: {
		                text: 'Who are underserved populations?',
		                'lightbox' : 'Underserved populations can be refugees, ethnic minorities, or other vulnerable and excluded peoples that have limited access to financial services. Kiva incentivizes partners to go the extra mile and provide these populations with access to much needed loans and non-financial services.'
		            },
		            value: '31%'
		        },
		        {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'Percent of partners who provided loans to underserved regions',
		            caption: {
		                text: 'What are underserved regions?',
		                'lightbox' : 'Underserved regions are areas that otherwise lack access to adequate financial services. These can be rural, isolated, or simply underdeveloped. Kiva incentivizes partners to go the extra mile and offer financial services to these underserved regions.'
		            },
		            value: '54%'
		        },
		        {
		            name: 'custom',
		            label: 'social performance',
		            cssClass: 'g3 h6',
		            value: '<p>Social performance  Different organizations have different social performance strengths. in 2011 Kiva introduced seven Social Performance Badges to recognize partners with a demonstrated commitment to one or more of these areas.</p>'
		        },
		        {
		            name: 'custom',
		            label: 'partnerships in new countries',
		            cssClass: 'g3 h5',
		            value: '<p>THIS IS partnerships in new countries HTML BLOCK FTW!</p>'
		        },
		        {
		            name: 'highlight'
		            , cssClass: 'g3 h4'
		            , label: 'First non traditional partner'
		            , link: 'http://www.kiva.org/updates/kiva/2011/10/18/please-join-us-in-welcoming-one-acre.html'
		            , imgUrl: 'http://s3-1.kiva.org/img/w100/857318.jpg'
		            , caption: 'Jun 29, 2011'
		            , subject:  'First non traditional partner'
		            , description: ''
		        }
		        , {
		            name: 'highlight'
		            , cssClass: 'g3 h4'
		            , label: 'Most loans posted by a partner'
		            , link: 'http://www.kiva.org/partners/128'
		            , imgUrl: 'http://s3-2.kiva.org/img/w100/272879.jpg'
		            , caption: 'Most loans posted by a partner'
		            , subject:  '4,686'
		            , description: 'Gitega, Burundi'
		        }
		        , {
		            name: 'map'
			        , cssClass: 'g9 h8'
		            , label: 'Partners who achieved 6 of 7 badges'
		            , segments: [
			            {
			                position: {
			                    top: 'x'
			                    , left: 'x'
			                }
			                , dataset: [
				                {
				                    'img' : 'xxx'
				                }
				                , {
				                    sprite: {}
				                    , label: 'Paraguay'
				                }
				                , {
				                    label: 'Kiva loans 2011'
				                    , value: '$2,986,450'
				                }
				                , {
				                    label: 'avg loan size'
				                    , value: '$205'
				                }
				                , {
				                    sprite: {}
				                    , label: 'Community Empowerment xx'
				                    , description: 'Fundacion Paraguay offers a wide array of specialized products and services to meet social needs in the community. For this, they have earned Kiva\'s Family and Community Empowerment badge.'
				                }
			                ]
			            }
			            , {
			                position: {
			                    top: 'x',
			                    left: 'x'
			                },
			                dataset: [
				                {
				                    'img' : 'xxx'
				                },
				                {
				                    sprite: {},
				                    label: 'Asasah'
				                },
				                {
				                    label: 'Kiva loans 2011',
				                    value: '$1,435,550'
				                },
				                {
				                    label: 'avg loan size',
				                    value: '$218'
				                },
				                {
				                    sprite: {},
				                    label: 'Vulnerable Group Focus',
				                    description: 'Working with vulnerable groups in Pakistan is one of Asasah\'s many strengths. Their efforts to reach and serve the needs of ultra and extremely poor populations have earned Asasah Kiva\'s Vulnerable Group Focus badge.'
				                }
		                    ]
			            },
			            {
			                position: {
			                    top: 'x',
			                    left: 'y'
			                },
			                dataset: [
				                {
				                    'img' : '',
				                    label: ''
				                },
				                {
				                    sprite: '',
				                    label: ''
				                },
				                {
				                    label: 'Kiva loans 2011',
				                    text: '735,100'
				                },
				                {
				                    label: 'avg loan size',
				                    text: '$316'
				                },
				                {
				                    sprite: {},
				                    label: 'Client Voice',
				                    description: 'Listening to clients is so important in microfinance. Paglaum has gone above and beyond creating mechanisms for client voices to be heard, and for this they have earned Kiva\'s Client Voice badge.'
				                }
			                ]
			            }
		            ]
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Number of field partners that Kiva performed due diligence on'
		            , caption: ':up: vs 2010 25'
		            , value: '44'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Different languages partners use to post loans'
		            , caption: ':same: vs 2010 6'
		            , value: '6'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Number of disolved partnerships'
		            , caption: {
		                text : 'Why do partnerships end?'
		                , lightbox : 'xxxxxxxx'
		            }
		            , value: '5'
		        }
		        , {
		            name: 'text',
		            cssClass: 'g3 h5',
		            value: ['Spanish', 'French', 'Portugues', 'English', 'Russian', 'Arabic'],
		            label: 'Languages loans are posted in'
		        }
		        , {
		            name: 'dataGraph',
		            cssClass: 'g3 h1',
		            label: 'Reasons for partnership dissolution (breakdown)',
		            dataset: [{
		                label: 'Credit problems',
		                value: '3'
		            },
		            {
		                label: 'MFI Choice',
		                value: '2'
		            },
		            {
		                label: 'Country instability',
		                value: '1'
		            }]
		        },
		        {
		            name: 'text',
		            cssClass: 'g3 h5',
		            value: [
			            {
			                'image' : '',
			                text: 'Burkina Faso'
			            },
			            {
			                'image' : '',
			                text: 'Georgia'
			            },
			            {
			                'image' : '',
			                text: 'Turkey'
			            },
			            {
			                'image' : '',
			                text: 'Yemen'
			            },
			            {
			                'image' : '',
			                text: 'Zimbabwe'
			            }
			        ]
		            , label: 'Partnerships in new countries (list of countries Kiva began lending in 2011)'
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g3 h1'
		            , label: 'Percent of partners awarded social performance badges'
		            , dataset: [
			            {
			                label: 'Anti-poverty focus',
			                value: '57%'
			            },
			            {
			                label: 'Entrepreneurial support',
			                value: '50%'
			            },
			            {
			                label: 'Facilitation of savings',
			                value: '44%'
			            },
			            {
			                label: 'Innovation',
			                value: '43%'
			            },
			            {
			                label: 'Family & community empowerment',
			                value: '41%'
			            },
			            {
			                label: 'Vulnerable group focus',
			                value: '28%'
			            },
			            {
			                label: 'Client Voice',
			                value: '26%'
			            }
		            ]
		        }
	        ]
	    }
	    , website: {
	        id: 'website'
	        , order: 5
	        , blocks: [
		        {
		            name: 'sectionTitle'
		            , cssClass: 'g3 h1'
		            , title: 'Web site'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg Daily Visits'
		            , caption: ':down: vs. 2010 56,452'
		            , value: '49,572'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg Time on Site'
		            , caption: ':up: vs. 2010 2:35:00'
		            , value: '3:42:00'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h2'
		            , label: 'Most common question asked of customer service'
		            , caption: {
		                text: 'Well, can I?',
		                'lightbox' : 'Kiva does not process loan applications, but if you would like to apply for a loan, you can contact the Kiva Field Partner (microfinance institution) in your local area. A list of Kiva\'s Field Partners can be found on the Field Partners page.'
		            }
		            , value: 'Can I get a loan for my own business?'
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Website redesign',
		            link: 'http://www.kiva.org/updates/kiva/2011/03/08/new-kivaorg-is-here.html',
		            imgUrl: '/img/2011/website-redesign.jpg',
		            caption: 'mar 8, 2011',
		            subject:  'Redesign',
		            description: 'The result of thousands of hours of consultation with lenders, meetings with designers, drafts with employees, and feedback from the Kiva community.'
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Kiva Zip',
		            link: 'https://zip.kiva.org/learn',
		            imgUrl: '/img/2011/kiva-zip.jpg',
		            caption: 'Nov 1, 2011',
		            subject:  'Kiva Zip',
		            description: 'A pilot to explore new approaches to P-to-P lending including electronic & mobile payments.'
		        }
				, {
		            name: 'highlight',
		            cssClass: 'g3 h4',
		            label: 'Relisting',
		            link: '',
		            imgUrl: '/img/2011/kiva-zip.jpg',
		            caption: 'Jun 29, 2011',
		            subject:  'Relisting',
		            description: 'Field partners are able to quickly post new loans for borrowers'
		        }
		        , {
		            name: 'text'
		            , cssClass: 'g3 h4'
		            , value: ['New York', 'San Francisco', 'Sydney', 'Los Angeles', 'London', 'Melbourne']
		            , label: 'Most visits by city'
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g9 h3'
		            , label: 'Mobile device traffic'
		            , dataset: [
		                {
			                label: 'Android'
			                , value: '32'
			            }
			            , {
			                label: 'iPhone'
			                , value: '31'
			            }
			            , {
			                label: 'iPad'
			                , value: '20'
			            }
			            , {
			                label: 'iPod'
			                , value: '6'
			            }
			            , {
			                label: 'Other'
			                , value: '9'
			            }
		            ]
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h2'
		            , label: 'Most Critical Bug'
		            , caption: {
		                text: 'Why’d it matter?',
		                'lightbox' : 'During a brief period on August 23rd and 24th, Kiva experienced a system-wide issue that caused some information relating to your loan(s) to be inaccurately displayed. More specifically, statistics relating to your loan\'s Field Partner did not properly appear on the site, including default, delinquency and currency loss rates. we want to make sure that you are fully aware of the issue, as it is very important to us that our lenders be able to make informed lending decisions. Due to the system-wide error, you did not have access to all of the information we normally provide our lenders. We truly regret any inconvenience this may have caused you. '
		            }
		            , value: 'Partner data missing from borrower page'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h2'
		            , label: 'Day of the month with highest avg loan volume'
		            , caption: 'Repayments posting to lenders accounts'
		            , value: '15th each month'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h2'
		            , label: 'Avg time for volunteers to review, translate and approve a loan for posting'
		            , caption: ':down: vs. 2010 2.16 days'
		            , value: '3.93 days'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Code Commits by Kiva engineers to version control'
		            , caption: ':up: vs. 2010 10,651 days'
		            , value: '13,612'
		        }
	        ]
	    }
	    , ecosystem: {
	        id: 'ecosystem'
	        , order: 6
	        , blocks: [
		        {
		            name: 'sectionTitle'
		            , cssClass: 'g6 h1'
		            , title: 'Kiva Ecosystem'
		        }
				, {
		            name: 'highlight'
		            , cssClass: 'g3 h4'
		            , label: 'Board Trip'
		            , link: 'http://www.kiva.org/updates/kiva/2011/11/15/kiva-board-visits-lima-peru.html'
		            , imgUrl: '/img/2011/board-trip.jpg'
		            , caption: 'Lima, Peru'
		            , subject:  'Board Trip'
		            , description: 'Field visit for Kiva’s board give a first hand, on-the-ground perspective to the work.'
		        }
				, {
		            name: 'highlight'
		            , cssClass: 'g3 h3'
		            , label: 'New office'
		            , link: ''
		            , imgUrl: '/img/2011/new-office.jpg'
		            , caption: 'Kiva Headquarters'
		            , subject:  'New office'
		            , description: 'Downtown San Francisco'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Full time employees'
		            , caption: ':up: vs. 2010 55'
		            , value: '83'
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g6 h1'
		            , label: 'Functions of full time staff'
		            , dataset: [
		                {
			                label: 'engineering'
			                , value: '31%'
			            }
			            , {
			                label: 'Partner Investments'
			                , value: '27%'
			            }
			            , {
			                label: 'Operations'
			                , value: '17%'
			            }
			            , {
			                label: 'Product'
			                , value: '10%'
			            }
			            , {
			                label: 'Partner Ops'
			                , value: '9%'
			            }
			            , {
			                label: 'Marketing'
			                , value: '7%'
			            }
		            ]
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g6 h1'
		            , label: 'Most common job title of new hires'
		            , caption: 'Software engineer in 2010'
		            , value: 'Software engineer'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Dogs allowed in office at one time'
		            , caption: 'Unlimited in previous years'
		            , value: '3'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg Employee Age'
		            , caption: ':up: vs. 2010 32.3'
		            , value: '32.7'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Full time staff working in the field'
		            , value: '12'
		        }
		        , {
		            name: 'text'
		            , cssClass: 'g9 h4'
		            , value: ['Bali, Indonesia', 'Lima, Peru', 'Minsk, Belarus', 'Nairobi, Kenya', 'Kigali, Rwanda', 'Dakar, Senegal', 'Beirut, Lebanon']
		            , label: 'Locations of field staff'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg number of interns'
		            , caption: ''
		            , value: '40'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'volunteers'
		            , caption: ''
		            , value: '500'
		        }
		        , {
		            name: 'custom',
		            label: 'Interested in joining Kiva?',
		            cssClass: 'g3 h5',
		            value: '<p>Kiva is organized around the ability to engage the talent of exceptional, passionate people. You can work with Kiva in a number of ways: <a href="http://www.kiva.org/jobs" target="_blank">As an employee</a> or <a href="http://www.kiva.org/volunteer#localOpp" target="_blank">volunteer in San Francisco</a> or <a href="http://www.kiva.org/volunteer#remoteOpp" target="_blank">from home</a>, or as a <a href="http://www.kiva.org/fellows" target="_blank">fellow in the field</a>.</p>'
		        }
				, {
		            name: 'dataMetric'
		            , cssClass: 'g6 h2'
		            , label: 'staff holding advanced degrees (MA, MS, JD, or PHD)'
		            , caption: ''
		            , value: '38%'
		        }
				, {
		            name: 'highlight',
		            cssClass: 'g5 h3',
		            label: 'Volunteer Activity',
		            link: '',
		            imgUrl: '/img/2011/tree-planting.jpg',
		            caption: 'Volunteer Activity, October 11, 2011',
		            subject:  'Tree planting in GG Park',
		            description: 'Kiva is committed to doing good in the world and the environment we live in: Volunteer gardening to beautify Golden Gate Park in honor of Kiva\'s 6th Birthday.'
		        }
	        ]
	    }
    	, stories: {
	    id: 'stories'
     , order: 7
     , blocks: [
      {
          name: 'sectionTitle'
          , cssClass: 'g8 h1'
          , title: 'Stories from the field'
      }
, {
          name: 'highlight',
          cssClass: 'g6 h4',
          label: 'Photo Hightlights',
          link: '',
          imgUrl: '/img/2011/photo-highlights.jpg',
          caption: '',
          subject:  'Photo Hightlights',
          description: 'Best Kiva photos from 2011'
      }
, {
          name: 'highlight',
          cssClass: 'g3 h3',
          label: 'Nepal',
          link: 'http://fellowsblog.kiva.org/2011/02/06/small-is-beautiful-microcredit-fair-in-nepal/',
          imgUrl: '/img/2011/photo-highlights.jpg',
          caption: '',
          subject:  'Microcredit fair in Nepal',
          description: ''
      }
, {
          name: 'highlight',
          cssClass: 'g6 h3',
          label: 'Rwanda',
          link: 'http://fellowsblog.kiva.org/2011/09/16/agriculture-loans-what-makes-them-so-different/',
          imgUrl: '/img/2011/what-makes-agriculture-different.jpg',
          caption: 'Rwanda Rice Paddies',
          subject:  'What Makes Agriculture Different?',
          description: ''
      }
      , {
          name: 'custom',
          label: 'Kiva Fellows',
          cssClass: 'g9 h2',
          value: '<p>Kiva\'s Fellows programs places individuals in different countries around the globe. Fellows become the eyes and ears on the ground working directly with Kiva’s field partners. The program is an unpaid, volunteer position designed to increase Kiva\'s impact and to offer participants a unique insider experience. Learn more ></p>'
      }
, {
          name: 'dataMetric'
          , cssClass: 'g3 h2'
          , label: 'By 81 fellows working with 68 different field partners'
          , caption: ''
          , value: '41,080 hrs spent working in the field'
      }
, {
          name: 'highlight',
          cssClass: 'g3 h3',
          label: 'going green',
          link: 'http://fellowsblog.kiva.org/2011/10/20/going-green-overcoming-cultural-barriers-to-promote-green-loans-part-1/',
          imgUrl: '/img/2011/going-green-nairobi.jpg',
          caption: 'Traffic in Nairobi, Kenya',
          subject:  'Going Green?',
          description: 'Overcoming Cultural Barriers to Promote Green Loans'
      }
, {
          name: 'highlight',
          cssClass: 'g3 h4',
          label: 'going green',
          link: 'http://fellowsblog.kiva.org/2011/12/30/60-tips-from-kiva-fellows/',
          imgUrl: '/img/2011/tips-from-a-fellow.jpg',
          caption: 'Traffic in Nairobi, Kenya',
          subject:  'Tips from a fellow',
          description: 'Sit in a park/plaza by yourself…someone will sit next to you.'
      }
, {
          name: 'dataMetric'
          , cssClass: 'g9 h1'
          , label: 'Countries Visited by fellows'
          , caption: ''
          , value: '41'
      }
, {
          name: 'dataMetric'
          , cssClass: 'g9 h1'
          , label: 'Blog posts from Kiva fellows'
          , caption: ''
          , value: '397'
      }
, {
          name: 'dataMetric'
          , cssClass: 'g6 h2'
          , label: 'Worst injury suffered by a fellow in the field. Suffered while playing soccer'
          , caption: ''
          , value: 'Two broken wrists'
      }
, {
          name: 'highlight',
          cssClass: 'g6 h4',
          label: 'Haiti',
          link: 'http://fellowsblog.kiva.org/2011/01/24/loans-in-the-time-of-cholera-in-haiti/',
          imgUrl: '/img/2011/loans-in-cholera-haitit.jpg',
          caption: 'Haitian loan officer interviewing a Kiva borrower',
          subject:  'Loans In The Time Of Cholera',
          description: 'As international news stations broadcast Haiti’s misery, my own picture will be one of a fun-loving, joyous nation'
      }
, {
          name: 'dataMetric'
          , cssClass: 'g9 h2'
          , label: 'Avergage cost, paid for by out of each fellows own pocket, for a four month Kiva fellowship'
          , caption: ''
          , value: '$5,000'
      }
, {
          name: 'highlight',
          cssClass: 'g9 h5',
          label: 'Costa Rica',
          link: 'http://fellowsblog.kiva.org/2011/11/18/village-banks-by-farmers-for-farmers-a-micro-credit-labor-of-love/',
          imgUrl: '/img/2011/microcredit-labor-of-love.jpg',
          caption: 'Costa Rica',
          subject:  'A Microcredit Labor of Love',
          description: 'When visiting borrowers and the lands they cultivate, Chief Loan Officer Geiner Gonzáles Marín, often leads the trek into plunging valleys or up steep mountains, with unceasing enthusiasm.'
      }
     ]
    	}
    	, press: {
		    id: 'press'
			, order: 8
			, blocks: [
				{
				  name: 'sectionTitle'
				  , cssClass: 'g9 h1'
				  , title: 'Press & Promotions'
				}
				, {
					name: 'highlight'
					, cssClass: 'g6  h3'
					, label: 'Economist innovation award'
					, link: 'http://www.kiva.org/updates/kiva/2011/10/21/economist-honors-kiva-ceo-and-co.html'
					, imgUrl: '/img/2011/the-economist-innovation-award.jpg'
					, caption: ''
					, subject:  '2011 Innovation Award'
					, description: 'The Economist` Honors Kiva CEO and Co-Founders with "No Boundaries" Innovation Award!'
				}
				, {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'Why I Kiva'
					, link: {
				        isVideo: true
				        , urls : ['http://www.youtube.com/watch?v=LLRXbz0Jq6Y']
			        }
					, imgUrl: '/img/2011/why-i-kiva.jpg'
					, caption: 'Sep 15, 2011'
					, subject:  'Why I Kiva'
					, description: 'Kiva users tell us why they lend'
				}
				, {
					name: 'highlight'
					, cssClass: 'g6 h3'
					, label: 'Clinton Global Initiatives'
					, link: ''
					, imgUrl: '/img/2011/clinton-global-initiatives.jpg'
					, caption: 'Oct 6, 2011'
					, subject:  'Clinton Global Initiatives'
					, description: 'Kiva President, Premal Shah, speaks at the 2011 Clinton Global Initiative Annual Meeting!'
				}
				, {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'Free Trials'
					, link: 'http://www.kiva.org/updates/kiva/2011/08/03/thank-you-for-helping-kiva-branch-out.html'
					, imgUrl: '/img/2011/free-trials.jpg'
					, caption: 'Aug 3, 2011'
					, subject:  'Free Trials'
					, description: 'It took less than 26 hours for 8k new lenders to claim their free trial loans.'
				}
				, {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'Kiva City'
					, link: 'http://www.kiva.org/kivacity'
					, imgUrl: '/img/2011/kiva-city.jpg'
					, caption: 'Jun 29, 2011'
					, subject:  'Kiva City'
					, description: ''
				}
				, {
					name: 'highlight'
					, cssClass: 'g6 h3'
					, label: 'Kiva ICBM'
					, imgUrl: '/img/2011/kiva-icbm.jpg'
			        , lightbox: {
				        isVideo: true
				        , urls: ['http://player.vimeo.com/video/28413747?title=0&byline=0&portrait=0&color=4b9123&autoplay=1']
			        }
					, caption: 'Aug 31, 2011'
					, subject:  'Intercontinental Ballistic Microfinance'
					, description: ''
				}
				, {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'most popular blog post'
					, link: 'http://www.kiva.org/updates/kiva/2011/12/08/celebrations-of-world-through-eyes-of.html'
					, imgUrl: '/img/2011/celebrations-though-eyes-of-borrowers.jpg'
					, caption: 'Most popular blog post'
					, subject:  ''
					, description: 'Celebrations of the World Through the Eyes of Kiva Fellows'
				}
				, {
					name: 'highlight'
					, cssClass: 'g6 h3'
					, label: '10 parties'
					, link: 'http://www.kiva.org/updates/kiva/2011/10/09/global-celebration-in-10-cities-in.html'
					, imgUrl: '/img/2011/10-cities-10-parties.jpg'
					, caption: 'Oct 9, 2011'
					, subject:  '10 Parties | 10 Cities'
					, description: 'From Pittsburgh to Paris Kiva Lender got together to meet each other and celebrate Kiva’s 6th birthday with parties in ten cities.'
				}
			]
        }
    	, finances: {
			id: 'finances'
			, order: 9
			, blocks: [
				{
				   name: 'sectionTitle'
				   , cssClass: 'g6 h1'
				   , title: 'Financial Health'
				}
				, {
				       name: 'dataMetric'
				       , cssClass: 'g4 h1'
				       , label: 'Total revenue & Support'
				       , caption: ''
				       , value: '$12,100,200'
				   }
				, {
				   name: 'dataMetric'
				   , cssClass: 'g4 h1'
				   , label: 'Total expenses'
				   , caption: ''
				   , value: '$8,000,000'
				}
				, {
					name: 'custom',
					label: 'Donating to Kiva',
					cssClass: 'g6 h2',
					value: '<p>Given that 100% of the loans made on kiva.org go directly to the entrepreneurs we feature, it is necessary to fundraise tax-deductible donations to cover our operations. Make a donation  ></p>'
				}
				, {
					name: 'dataGraph'
					, cssClass: 'g6 h1'
					, label: 'Expense breakdown'
					, dataset: [
						{
							label: 'Program Expenses'
							, value: '80%'
						}
						, {
							label: 'Fundraising'
							, value: '10%'
						}
						, {
							label: 'Operations'
							, value: '10%'
						}
		            ]
				}
				, {
		           name: 'highlight',
		           cssClass: 'g6 h3',
		           label: '10 parties',
		           link: 'http://www.kiva.org/press/releases/release_20110209',
		           imgUrl: '/img/2011/charity-navigator.jpg',
		           caption: 'Feb 9, 2011',
		           subject:  'Kiva.org Receives Top Rating from Charity Navigator',
		           description: 'Based on Sound Fiscal Management, Exceeding Industry Standards'
				}
				, {
					name: 'highlight',
					cssClass: 'g6 h2',
					label: 'Largest individual donor',
					link: '',
					imgUrl: '/img/2011/leeds-lending-team.jpg',
					caption: 'Largest individual donor',
					subject:  '250k',
					description: 'Annoyomous'
				}
				, {
					name: 'highlight',
					cssClass: 'g6 h2',
					label: 'Largest Institutional donor',
					link: '',
					imgUrl: '/img/2011/leeds-lending-team.jpg',
					caption: 'Largest Institutional donor',
					subject:  '$1 million',
					description: 'Omidyar Network'
				}
				, {
					name: 'highlight',
					cssClass: 'g6 h2',
					label: 'Largest Corporate donor',
					link: '',
					imgUrl: '/img/2011/leeds-lending-team.jpg',
					caption: 'Largest Corporate donor',
					subject:  '$1 million',
					description: 'Visa'
				}
				, {
					name: 'dataGraph'
					, cssClass: 'g6 h1'
					, label: 'Expense by department'
					, dataset: [
						{
							label: 'Engineering'
							, value: '33%'
						}
						, {
							label: 'Partner Investments'
							, value: '29%'
						}
						, {
							label: 'Operations'
							, value: '18%'
						}
						, {
							label: 'Product'
							, value: '10%'
						}
						, {
							label: 'Partner Ops'
							, value: '10%'
						}
						, {
							label: 'Marketing'
							, value: '7%'
						}
				   ]
				}
			]
        }
    }
, function (error, sectionItems){});

module.exports = SectionProvider;