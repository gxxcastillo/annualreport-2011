SectionProvider = function (){};
SectionProvider.prototype.sectionData = {};


SectionProvider.prototype.findAll = function () {
  return this.sectionData;
};


SectionProvider.prototype.findByIds = function (ids) {
	var result = [];

	// @todo, crappy check for Array
	if (ids.forEach) {
		ids.forEach(function(id) {
			result.push(this.findById(id));
	    });
	}

	return result;
};


SectionProvider.prototype.findById = function (id) {
	var result;

	if (typeof id == 'string') {
		result = this.sectionData[id];
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
};


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
	    letter: {
		    id: 'letter'
		    , order: 1
		    , blocks: [
			    {
				    name: 'sectionTitle'
					, cssClass: 'g9 h1'
					, title: 'Letter from Matt & Premal'
			    }
				, {
				    name: 'text'
				    , cssClass: 'g9 h5'
				    , value: '<p>In 2005, Kiva was founded with a mission to connect people, through lending, to alleviate poverty. Six years later, we are just beginning.</p><p>In 2011, we made significant strides, and as a result have many meaningful firsts, milestones achieved and inspiring statistics to share. We are excited to bring these to life through our first-ever Annual Report!</p><p>Kiva is a place full of entrepreneurs and their stories. As an entrepreneurial organization, we are sharing our story here. It\'s a story that includes the guidance of our board, the commitment of our staff, the contributions of volunteers and the unbridled generosity of our lenders.</p><p>Kiva\'s highest value is transparency. This means that we communicate works in progress -- both successes and failures -- along the way. So accept us in that light -- a work in progress. With your help, we can make great, great progress in the years to come.</p><p>On behalf of our borrowers and the entire Kiva team, thank you.</p><p>Matt Flannery, Co-Founder and CEO<br />Premal Shah, President</p>'
			    }
		    ]
	    }
	    , borrowers : {
	        id: 'borrowers'
	        , order: 2
	        , blocks: [
				{
		            name: 'sectionTitle'
		            , cssClass: 'g9 h1'
		            , title: 'Borrowers'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g4 h1'
		            , label: 'Total Borrowed'
		            , caption: ':up: vs 2010 $71,096,550'
		            , value: '$89,481,825'
		        }
			    , {
		           name: 'dataMetric',
		           cssClass: 'g2 h1',
		           value: '$399',
		           label: 'avg loan size',
		           caption: ':up: vs 2010 $350'
		       }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Loans funded'
		            , caption: ':up: vs 2010 92,216'
		            , value: '110,256'
		        }
		        , {
		            name: 'highlight'
		            , cssClass: 'g6 h3'
		            , label: 'Borrower stories'
		            , link: 'http://www.kiva.org/lend/320391'
		            , imgUrl: '/img/2011/agneta.jpg'
		            , caption: 'The Butterfly Hunter'
		            , subject:  'Agneta'
		            , description: 'Tiribe, Kenya'
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g3 h3'
		            , label: 'borrower gender'
				    , imgUrl: '/img/2011/borrowers/borrowers-gender.png'
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
		            , cssClass: 'g9 h2'
		            , label: 'Dollars raised per hour (avg by activity)'
				    , imgUrl: '/img/2011/borrowers/fundraising-by-activity.png'
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
		        }
		        , {
		            name: 'map'
		            , cssClass: 'g9 h7'
		            , label: 'Number of borrowers by countries (Top 5)'
				    , imgUrl: '/img/2011/borrowers/most-borrowing-by-country.png'
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
		            value: ['loan', 'years', 'business', 'children', 'married', 'family', 'lives', 'purchase', 'school'],
		            label: 'most common words from borrower profiles'
		        }
			    , {
		           name: 'highlight',
		           cssClass: 'g3 h4',
		           label: 'Borrower stories',
		           link: 'http://www.kiva.org/lend/386067',
		           imgUrl: ['/img/2011/water-to-live.jpg'],
		           caption: 'Asociación Intercomunitaria Agua Para Vivir Group',
		           subject:  'Water to live',
		           description: 'Masaya, Nicaragua'
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
		           value: '1,504',
		           label: 'Total defaults',
		           caption: ':up: vs 2010 957'
		       }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            value: '1.09%',
		            label: 'Cumulative default rate',
		            caption: ':up: vs 2010 1.08%'
		        }
			    , {
		           name: 'percentageGraph',
		           cssClass: 'g6 h1',
		           label: 'expired loans by sector',
		           dataset: [
						{
							label: 'Food'
							, value: '10'
						},
						{
							label: 'Retail'
							, value: '8'
						},
						{
							label: 'Clothing'
							, value: '5'
						}
			            , {
							label: 'Other'
							, value: '3'
						}
		           ]
		       }
			    , {
			        name: 'highlight'
			        , cssClass: 'g6 h3'
			        , imgUrl: '/img/2011/juan-flowers.jpg'
			        , link: 'http://www.kiva.org/lend/352245'
				    , subject: 'Juan'
				    , caption: 'Barranquilla, Colombia'
				    , description:  'A loan of $550 helped buy bulk flowers'
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
	        , order: 3
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
		            , caption: ':up: vs 2010 370,837'
		            , value: '457,739'
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: 'Lent per minute'
			        , value: '$171'
		        }
		        , {
		            name: 'dataMetric',
		            cssClass: 'g3 h1',
		            label: 'Lending Teams',
		            caption: ':up: vs 2010 10,578',
		            value: '12,783'
		        }
		        , {
					name: 'dataGraph'
					, cssClass: 'g6 h3'
					, label: 'Dollars lent by month for top 4 lending teams'
					, imgUrl: '/img/2011/lenders/team-lending-activity.png'
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
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'Most dollars lent'
					, link: 'http://www.kiva.org/lender/gooddogg1'
					, imgUrl: '/img/2011/good-dogg.jpg'
					, caption: 'Top lender'
					, description: 'Lending since June 2007'
					, subject:  'Good Dogg'
				}
			    , {
			        id: 'most-used-words-within-lender-profiles'
			        , name: 'wrapper'
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
			        name: 'map'
			        , cssClass: 'g9 h7'
			        , label: 'Top lending by city'
			        , imgUrl: '/img/2011/lenders/lending-by-city.png'
		        }
		        , {
		            name: 'highlight',
		            cssClass: 'g4 h3',
		            label: 'Invites',
		            link: 'http://www.kiva.org/lender/johngreen',
		            imgUrl: '/img/2011/john-green-most-succesful-invites.jpg',
		            caption: 'Most successful invites',
		            subject:  '953',
		            description: 'John Green, Indianapolis, IN'
		        }
			    , {
					name: 'highlight'
					, cssClass: 'g5 h3'
					, label: 'Project for awesome'
					, lightbox: {
						isVideo: true
						   , urls: ['http://www.youtube.com/embed/1jlNXRbsU2E?rel=0&amp;wmode=opaque&amp;autoplay=1']
						}
			        , singIt: true
					, imgUrl: '/img/2011/project-for-awsome.jpg'
					, caption: 'Paige L. Finch project for awesome'
					, description: 'You\'re just a girl living in the USA, how can you finance someone down in Paraguay?'
				}
				, {
					name: 'dataGraph'
					, cssClass: 'g6 h3'
			        , link: 'http://www.kiva.org/partners/22'
					, label: 'Losses incurred by Lenders by Country'
					, imgUrl: '/img/2011/lenders/amount-of-losses-experienced-by-lenders.png'
				}
				, {
				    name: 'highlight',
				    cssClass: 'g3 h3',
				    label: 'Sports centric team',
				    link: 'http://www.kiva.org/team/leeds_united_fans',
				    imgUrl: '/img/2011/leeds-lending-team.jpg',
				    caption: 'Most dollars lent by a sports centric team',
				    subject:  '$98,150',
				    description: 'Leeds United Fans'
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
				}
				, {
					name: 'dataMetric',
					cssClass: 'g4 h1',
					label: 'Dollar amount posted by partners',
					caption: ':up: vs 2010 $74,236,575',
					value: '$94,134,925'
				}
				, {
					name: 'dataMetric',
					cssClass: 'g2 h1',
					label: 'New field partners',
					caption: ':down: vs 2010 27',
					value: '26'
				}
				, {
				    name: 'dataMetric',
				    cssClass: 'g3 h1',
				    label: 'Countries with an MFI partner',
				    caption: ':up: vs 2010 54',
				    value: '57'
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g6 h1'
					, label: 'Field Partners that received Kiva due diligence.'
					, caption: ':up: vs 2010 25'
					, value: '44'
				}
				, {
				      name: 'highlight'
				      , cssClass: 'g3 h3'
				      , label: 'Most loans posted by a partner'
				      , link: 'http://www.kiva.org/partners/128'
				      , imgUrl: '/img/2011/hagdan-sa-pag-uswag-foundation.jpg'
				      , caption: 'Most loans posted by a partner'
				      , subject:  '4,686'
				      , description: 'Hagdan sa Pag-uswag Foundation, Philipines'
				 }
				, {
				    name: 'dataMetric'
				    , cssClass: 'g3 h2'
				    , label: 'provided loans to underserved populations through Kiva'
				    , caption: {
				        text: 'What are underserved populations?'
				        , lightbox : 'Underserved populations can be refugees, ethnic minorities, or other vulnerable and excluded peoples that have limited access to financial services. Kiva incentivizes partners to go the extra mile and provide these populations with access to much needed loans and non-financial services.'
				    }
				    , value: '31% of partners'
				}
				, {
				    name: 'dataMetric'
				    , cssClass: 'g3 h2'
				    , label: 'provided loans to underserved regions through Kiva'
				    , caption: {
				        text: 'What are underserved regions?'
				        , lightbox : 'Underserved regions are areas that otherwise lack access to adequate financial services. These can be rural, isolated, or simply underdeveloped. Kiva incentivizes partners to go the extra mile and offer financial services to these underserved regions.'
				    }
				    , value: '54% of partners'
				}
		        , {
		            name: 'spBadge'
		            , label: 'social performance'
		            , cssClass: 'g6 h3'
		            , description: 'In 2011, Kiva introduced seven <a href="http://www.kiva.org/about/socialperformance" target="_blank">Social Peformance</a> badges to identify partners that deliver services in one or more of these areas:'
			        , spBadges: [
				        {
		                    id: 'entrepreneurial'
							, name: 'Entrepreneurial Support'
						}
				        , {
	                        id: 'vulnerableGroup'
	                        , name: 'Vulnerable Group Focus'
	                    }
				        , {
	                        id: 'empowerment'
	                        , name: 'Family and Community Empowerment'
	                    }
				        , {
	                        id: 'facilitateSavings'
	                        , name: 'Facilitation of Savings'
	                    }
				        , {
	                        id: 'innovation'
	                        , name: 'Innovation'
	                    }
				        , {
	                        id: 'clientVoice'
	                        , name: 'Client Voice'
	                    }
					    , {
							id: 'antipoverty'
							, name: 'Anti-poverty Focus'
				        }
		            ]
		        }
		        , {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, link: 'http://www.kiva.org/updates/kiva/2011/10/18/please-join-us-in-welcoming-one-acre.html'
					, imgUrl: '/img/2011/one-acre-fund-first-non-traditional-partner.jpg'
					, caption: 'Jun 29, 2011'
					, subject:  'First non-MFI partner'
			        , description: 'Learn more'
				}
		        , {
		            name: 'map'
			        , cssClass: 'g9 h7'
		            , label: 'Partners who achieved 6 of 7 badges'
			        , imgUrl: '/img/2011/partners/top-partners-SP.png'
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
		            , cssClass: 'g6 h1'
		            , label: 'Languages partners used to post loans'
		            , caption: ':same: vs 2010 6'
		            , value: '6'
		        }
			    , {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Dissolved Partnerships'
					, caption: {
						text : 'Why do partnerships end?'
						, lightbox : '<p>Partnerships at Kiva dissolve for a variety of reasons. In some cases, Kiva discovers an issue with a partner, either financial or operational, and needs to protect lenders from increased risk or default. In other cases, a partner may choose to end its relationship with Kiva.</p><p>For example, this happens when partners find other sources of capital that better fit their needs. External factors can also lead to partnership dissolution, including local conflicts or changes to financial regulations.</p>'
					}
					, value: '5'
	            }
		        , {
			        id: 'languages-of-posted-loans'
		            , name: 'text'
		            , cssClass: 'g4 h4'
		            , value: ['English', 'Spanish', 'French', 'Russian', 'Portuguese', 'Arabic']
		            , label: 'Languages of posted loans'
		        }
			    , {
					name: 'percentageGraph'
					, cssClass: 'g5 h1'
					, label: 'Reasons for partnership dissolution'
					, dataset: [
						{
						   label: 'Credit problems'
						   , value: '3'
						}
						, {
						   label: 'MFI Choice'
						   , value: '2'
						}
						, {
						   label: 'Country instability'
						   , value: '1'
						}
	                ]
	               }
		        , {
		            name: 'text'
		            , cssClass: 'g5 h3'
			        , label: 'Partnerships in new countries (added in 2011)'
		            , value: [
			            {
			                'sprite': {name: 'f32', id: 'bf'}
				            , text: 'Burkina Faso'
			            }
			            , {
			                'sprite' : {name: 'f32', id: 'ge'}
			                , text: 'Georgia'
			            }
			            , {
			                'sprite' : {name: 'f32', id: 'tr'}
			                , text: 'Turkey'
			            }
			            , {
			                'sprite' : {name: 'f32', id: 'ye'}
			                , text: 'Yemen'
			            }
			            , {
			                'sprite' : {name: 'f32', id: 'zw'}
			                , text: 'Zimbabwe'
			            }
			        ]
		        }
		        , {
		            name: 'dataGraph'
		            , cssClass: 'g9 h3'
		            , label: 'Percent of partners awarded social performance badges'
			        , imgUrl: '/img/2011/partners/partners-awarded-badges.png'
		            , dataset: [
			            {
			                label: 'Anti-poverty focus',
			                value: '57%'
			            }
			            , {
			                label: 'Entrepreneurial support',
			                value: '50%'
			            }
			            , {
			                label: 'Facilitation of savings',
			                value: '44%'
			            }
			            , {
			                label: 'Innovation',
			                value: '43%'
			            }
			            , {
			                label: 'Family & community empowerment',
			                value: '41%'
			            }
			            , {
			                label: 'Vulnerable group focus',
			                value: '28%'
			            }
			            , {
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
		            , cssClass: 'g9 h1'
		            , title: 'Website'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg Daily Visits'
		            , caption: ':down: vs 2010 56,452'
		            , value: '49,572'
		        }
		        ,{
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Avg time spent on site'
		            , caption: ':up: vs 2010 2:35:00'
		            , value: '3:42:00'
		        }
			    ,{
			          name: 'dataMetric'
			          , cssClass: 'g3 h1'
			          , label: 'Avg monthly transactions'
			          , caption: ':up: vs 2010 124,431'
			          , value: '160,341'
			      }
				, {
					name: 'text'
					, cssClass: 'g3 h4'
					, value: ['New York', 'San Francisco', 'Sydney', 'Los Angeles', 'London', 'Melbourne', 'Beijing']
					, label: 'Most visits by city'
				}
			    , {
			        name: 'dataGraph'
			        , cssClass: 'g6 h4'
			        , label: 'Web traffic on Kiva.org (USA visits)'
			        , imgUrl: '/img/2011/website/web-traffic.png'
		        }
				, {
					name: 'highlight'
					, cssClass: 'g3 h4'
					, label: 'Kiva Zip'
					, link: 'https://zip.kiva.org/learn'
					, imgUrl: '/img/2011/kiva-zip.jpg'
					, caption: 'Nov 1, 2011'
					, subject:  'Kiva Zip'
					, description: 'Pilot project exploring approaches to P2P lending, including electronic & mobile payments.'
				}
				, {
					name: 'highlight'
					, cssClass: 'g6 h4'
					, label: 'Website redesign'
					, link: 'http://www.kiva.org/updates/kiva/2011/03/08/new-kivaorg-is-here.html'
					, imgUrl: '/img/2011/website-redesign.jpg'
					, caption: 'mar 8, 2011'
					, subject:  'Redesign'
					, description: 'After more than 5 years, Kiva launches its first redesign.'
				}
				, {
					name: 'highlight'
					, cssClass: 'g3 h4'
					, label: 'Borrower stories'
					, link: 'http://www.kiva.org/green'
					, imgUrl: ['/img/2011/green-loans.jpg']
					, caption: 'Mar 1, 2011'
					, subject:  'Green Loans'
					, description: 'Mark Omondi Siaya, Kenya'
				}
				, {
					name: 'percentageGraph'
					, cssClass: 'g6 h1'
					, label: 'Mobile device traffic'
					, dataset: [
						{
							label: 'Android'
							, value: '32%'
						}
						, {
							label: 'iPhone'
							, value: '31%'
						}
						, {
							label: 'iPad'
							, value: '20%'
						}
						, {
							label: 'iPod'
							, value: '6%'
						}
						, {
							label: 'Other'
							, value: '9%'
						}
					]
				}
				, {
				    name: 'dataGraph'
				    , cssClass: 'g6 h3'
				    , label: 'Most commonly translated languages'
				    , imgUrl: '/img/2011/website/translation-activity.png'
				 }
				,{
					name: 'dataMetric'
					, cssClass: 'g3 h2'
					, label: 'Day with the highest avg loan volume'
					, value: '15th of each month'
					, caption: 'The day repayments post to lender accounts'
				}
				,{
					name: 'dataMetric'
					, cssClass: 'g4 h2'
					, label: 'Most common question asked of customer service'
					, value: 'Can I get a loan for my business?'
					, caption: {
						text: 'Well, can I?'
						, 'lightbox' : 'Kiva does not process loan applications. If you would like to apply for a loan, you can contact the Kiva Field Partner in your local area. A list of <a href="http://www.kiva.org/partners" target="_blank">Field Partners</a> can be found here. If you are not located near a partner, try the <a href="http://mixmarket.org" target="_blank">Mix Market</a>, which lists more microfinance institutions.'
				    }
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Reviewed & translated loans'
					, value: '114,085'
					, caption: ':up: vs 2010 95,402'
				}
				,{
					name: 'dataMetric'
					, cssClass: 'g2 h2'
					, label: 'Avg time for volunteers to review & translate a loan for posting'
					, caption: ':down: vs 2010 2.16 days'
					, value: '3.9 days'
				}
				,{
					name: 'dataMetric'
					, cssClass: 'g6 h1'
					, label: 'Programming changes made to the website'
					, caption: ':up: vs 2010 10,651'
					, value: '13,612'
				}
				, {
				    name: 'dataGraph'
				    , cssClass: 'g3 h3'
				    , label: 'Browser usage'
				    , imgUrl: '/img/2011/website/browsers.png'
				}
				,{
					name: 'dataMetric'
					, cssClass: 'g4 h2'
					, label: 'Most Critical Bug'
					, value: 'Partner data missing from loan page'
					, caption: {
						text: 'Why’d it matter?'
						, lightbox: '<p>On Aug. 23-24, Kiva experienced a technical issue that erased data about our Field Partners from individual loan pages, including default, delinquency and currency loss rates. While the issue was swiftly corrected, hundreds of lenders did make loans during this time period.</p><p>Kiva CEO Matt Flannery took quick action, sending out a message to all affected lenders explaining the problem and emphasizing Kiva\'s commitment to providing as much information as we can to help lenders make informed decisions.</p>'
					}
				}
	        ]
	    }
	    , ecosystem: {
	        id: 'ecosystem'
	        , order: 6
	        , blocks: [
		        {
		            name: 'sectionTitle'
		            , cssClass: 'g9 h1'
		            , title: 'Kiva Ecosystem'
		        }
				, {
		            name: 'highlight'
		            , cssClass: 'g3 h3'
		            , label: 'Board Trip'
		            , link: 'http://www.kiva.org/updates/kiva/2011/11/15/kiva-board-visits-lima-peru.html'
		            , imgUrl: '/img/2011/board-trip.jpg'
		            , caption: 'Lima, Peru'
		            , subject:  'Board Trip'
		            , description: 'Field visit gave Kiva\'s board a first-hand, on-the-ground perspective on microfinance.'
		        }
				, {
		            name: 'highlight'
		            , cssClass: 'g3 h3'
		            , label: 'New Office'
			        , link: 'http://www.interiordesign.net/article/549288-Lend_a_Hand.php'
		            , imgUrl: '/img/2011/new-office.jpg'
		            , caption: 'Kiva Headquarters'
		            , subject:  'New office'
		            , description: 'Downtown San Francisco'
		        }
		        , {
		            name: 'dataMetric'
		            , cssClass: 'g3 h1'
		            , label: 'Full time employees'
		            , caption: ':up: vs 2010 55'
		            , value: '83'
		        }
			    , {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Avg Employee Age'
					, caption: ':up: vs 2010 32.3'
					, value: '32.7'
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Staff in the field'
					, value: '12'
				}
				, {
					name: 'map'
					, cssClass: 'g9 h5'
					, label: 'Typical commutes by Kiva staff'
					, imgUrl: '/img/2011/ecosystem/commute-map.png'
				}
		        , {
		            name: 'percentageGraph'
		            , cssClass: 'g6 h1'
		            , label: 'Functions of full time staff'
		            , dataset: [
		                {
			                label: 'Engineering'
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
		            , value: 'Software engineer'
		        }
				, {
					name: 'dataGraph'
					, cssClass: 'g3 h3'
					, label: 'Employee foreign travel'
						, imgUrl: '/img/2011/ecosystem/employee-visited-foreign-countries.png'
						, dataset: [
							{
								label: 'Ten or more countries visited'
								, value: '5%'
							}
							, {
								label: 'Visited at least one foreign country'
								, value: '97%'
							}
						]
					}
				, {
					name: 'dataMetric'
					, cssClass: 'g4 h1'
					, label: 'Dogs in office at any one time'
					, value: '3'
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g2 h1'
					, label: 'volunteers'
					, value: '~500'
				}
				, {
				    name: 'highlight'
				    , cssClass: 'g3 h3'
				    , link: 'http://www.donorschoose.org/blog/2011/11/08/kiva-saving-the-world-one-stache-at-a-time/'
				    , imgUrl: '/img/2011/mustaches-for-kids.jpg'
				    , caption: 'Mustaches'
				    , value: 'For the kids'
				    , description: 'During November, members of Kiva staff gave their upper lip to raise money for children in need.'
				}
			    , {
					name: 'dataGraph'
					, cssClass: 'g6 h3'
					, label: 'Food shared most often by staff'
			        , imgUrl: '/img/2011/ecosystem/food-shared-most-often.png'
				}
			    , {
					name: 'text',
					cssClass: 'g3 h2',
					label: 'Interested in joining Kiva?',
					value: 'Kiva is organized around the ability to engage the talent of exceptional, passionate people. You can work with Kiva in a number of ways: <a href="http://www.kiva.org/jobs" target="_blank">As an employee</a> or <a href="http://www.kiva.org/volunteer#localOpp" target="_blank">volunteer in San Francisco</a> or <a href="http://www.kiva.org/volunteer#remoteOpp" target="_blank">from home</a>, or as a <a href="http://www.kiva.org/fellows" target="_blank">fellow in the field</a>.'
	            }
				, {
				    name: 'dataMetric'
				    , cssClass: 'g6 h1'
				    , label: 'staff holding advanced degrees (MA, MS, JD, or PHD)'
				    , value: '39%'
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Avg number of interns'
					, value: '40'
				}

		    , {
						    name: 'highlight',
						    cssClass: 'g5 h3',
						    label: 'Volunteer Activity',
						    imgUrl: '/img/2011/tree-planting.jpg',
						    caption: 'Volunteer Activity, Oct 11, 2011',
						    subject:  'Tree Planting',
						    description: 'Volunteer gardening to beautify Golden Gate Park in honor of Kiva\'s 6th birthday.'
						}
		    , {
		        name: 'dataGraph'
		        , cssClass: 'g3 h3'
		        , label: 'Number of languages spoken'
		        , imgUrl: '/img/2011/ecosystem/employee-foreign-languages-spoken.png'
		        , dataset: [
			        {
				        label: 'one'
				        , value: '5%'
			        }
					, {
				        label: 'two'
				        , value: '36%'
			        }
				    , {
				        label: 'three'
				        , value: '39%'
			        }
					, {
				        label: 'four'
				        , value: '15%'
			        }
				    , {
				        label: 'five'
				        , value: '5%'
			        }
		        ]
	        }
			    , {
				    name: 'dataGraph'
				    , cssClass: 'g4 h3'
				    , label: 'Volunteer hours by Kiva staff at outside organizations'
				    , imgUrl: '/img/2011/ecosystem/employee-volunteer-hours.png'
				}
			    , {
			        id: 'locations-of-field-staff'
					, name: 'text'
					, cssClass: 'g4 h4'
					, value: ['Bali, Indonesia', 'Lima, Peru', 'Minsk, Belarus', 'Nairobi, Kenya', 'Dakar, Senegal', 'Beirut, Lebanon']
					, label: 'Locations of field staff'
				}
	        ]
	    }
		, stories: {
	        id: 'stories'
			, order: 7
			, blocks:
			    [
					{
						name: 'sectionTitle'
						, cssClass: 'g9 h1'
						, title: 'Stories from the field'
					}
					, {
						name: 'highlight'
						, cssClass: 'g6 h4'
						, label: 'Photo Hightlights'
						, imgUrl: '/img/2011/photo-highlights.jpg'
				        , lightbox: [
					        '/img/2011/photo-highlights/137025_AdamCohn_1of3.jpg'
					        , '/img/2011/photo-highlights/200679_AbhinabBasnyat_2of4.jpg'
						    , '/img/2011/photo-highlights/223090_TaraCapsuto5of5.jpg'
						    , '/img/2011/photo-highlights/224803_MagalisMaria_MaturanaMuñoz_JohnGwillim_1of3.jpg'
						    , '/img/2011/photo-highlights/285572_Kathrin-Gerner_1_of_4.jpg'
						    , '/img/2011/photo-highlights/286167_JulieKerr_7of9.jpg'
						    , '/img/2011/photo-highlights/288330_JóseArriagada_2of2_FE_LoEspejo_Chile_JohnGwillim.jpg'
						    , '/img/2011/photo-highlights/301779_Kathrin-Gerner_4_of_4.jpg'
						    , '/img/2011/photo-highlights/302498_AbhinabBasnyat_5of5.jpg'
						    , '/img/2011/photo-highlights/328241_TejalDesai_4of4.jpg'
						    , '/img/2011/photo-highlights/341223_RebeccaCorey_5of5.jpg'
						    , '/img/2011/photo-highlights/AdamCohn_VFC-Sewing-Cooperative_2of3.jpg'
						    , '/img/2011/photo-highlights/GabeFrancis_1679.jpg'
						    , '/img/2011/photo-highlights/GabeFrancis_1697.jpg'
				        ]
						, subject:  'Photo Hightlights'
						, description: 'Best Kiva photos from 2011'
					}
					, {
					  name: 'highlight'
					  , cssClass: 'g3 h4'
					  , label: 'Nepal'
					  , link: 'http://fellowsblog.kiva.org/2011/02/06/small-is-beautiful-microcredit-fair-in-nepal/'
					  , imgUrl: '/img/2011/microcredit-fair-nepal.jpg'
					  , subject:  'Microcredit fair in Nepal'
					}
				    , {
						name: 'highlight'
						, cssClass: 'g3 h3'
						, label: 'going green'
						, link: 'http://fellowsblog.kiva.org/2011/10/20/going-green-overcoming-cultural-barriers-to-promote-green-loans-part-1/'
						, imgUrl: '/img/2011/going-green-nairobi.jpg'
						, caption: 'Traffic in Nairobi, Kenya'
						, subject:  'Going Green'
						, description: 'Overcoming cultural barriers to promote green loans.'
					}
					, {
						name: 'highlight'
						, cssClass: 'g6 h3'
						, label: 'Rwanda'
						, link: 'http://fellowsblog.kiva.org/2011/09/16/agriculture-loans-what-makes-them-so-different/'
						, imgUrl: '/img/2011/what-makes-agriculture-different.jpg'
						, caption: 'Rwanda Rice Paddies'
						, subject:  'What Makes Agriculture Different?'
					}
				    , {
						name: 'text'
						, label: 'Kiva Fellows'
						, cssClass: 'g4 h2'
				        , value: '<p>The Kiva Fellows program places talented individuals with our Field Partners around the globe.</p><p>Fellows volunteer to work closely with our partners, maximizing efficiency and impact. <a href="http://www.kiva.org/fellows" target="_blank">Learn more</a>.</p>'
					}
				    , {
						name: 'highlight'
						, cssClass: 'g5 h4'
						, label: 'Haiti'
						, link: 'http://fellowsblog.kiva.org/2011/01/24/loans-in-the-time-of-cholera-in-haiti/'
						, imgUrl: '/img/2011/loans-in-cholera-haitit.jpg'
						, caption: 'Haitian loan officer interviewing a Kiva borrower'
						, subject:  'Loans In The Time Of Cholera'
						, description: '"As international news stations broadcast Haiti’s misery, my own picture will be one of a fun-loving, joyous nation."'
					}
				    , {
			            name: 'dataMetric'
			            , cssClass: 'g4 h1'
			            , label: 'Number of Kiva Fellows'
			            , value: '81'
		            }
				    , {
						name: 'dataMetric'
						, cssClass: 'g4 h1'
						, label: 'Time Kiva Fellows worked in the field'
						, value: '41,080 hrs'
					}
				    , {
						name: 'dataMetric'
						, cssClass: 'g6 h1'
						, label: 'Estimated cost of a Kiva fellowship'
						, caption: 'The cost is covered by each Kiva Fellow'
						, value: '$5,000 for 4 months'
					}
				    , {
						name: 'dataMetric'
						, cssClass: 'g3 h1'
						, label: 'Kiva Fellows blog posts'
						, value: '397'
					}
				    , {
						name: 'dataMetric'
						, cssClass: 'g3 h1'
						, label: 'Countries visited by fellows'
						, value: '41'
					}
				    , {
						name: 'dataMetric'
						, cssClass: 'g6 h1'
						, label: 'Worst injury suffered by a fellow in the field'
						, caption: 'Suffered while playing soccer'
						, value: 'Two broken wrists'
					}
					, {
						name: 'highlight'
						, cssClass: 'g3 h4'
						, label: 'going green'
						, link: 'http://fellowsblog.kiva.org/2011/12/30/60-tips-from-kiva-fellows/'
						, imgUrl: '/img/2011/tips-from-a-fellow.jpg'
						, subject:  'Tips from a Fellow'
						, description: 'Sit in a park/plaza by yourself…someone will sit next to you.'
					}
					, {
						name: 'highlight'
						, cssClass: 'g6 h4'
						, label: 'Costa Rica'
						, link: 'http://fellowsblog.kiva.org/2011/11/18/village-banks-by-farmers-for-farmers-a-micro-credit-labor-of-love/'
						, imgUrl: '/img/2011/microcredit-labor-of-love.jpg'
						, caption: 'Costa Rica'
						, subject:  'A Microcredit Labor of Love'
						, description: 'Chief Loan Officer Geiner Gonzáles Marín often leads the trek into plunging valleys or up steep mountains with unceasing enthusiasm.'
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
			        , link: 'http://kivanews.blogspot.com/2011/10/economist-honors-kiva-ceo-and-co.html'
			        // @todo switch to the kiva.org/updates url when it gets fixed
					//, link: 'http://www.kiva.org/updates/kiva/2011/10/21/economist-honors-kiva-ceo-and-co.html'
					, imgUrl: '/img/2011/the-economist-innovation-award.jpg'
					, caption: ''
					, subject:  '2011 Innovation Award'
					, description: 'The Economist` honors Kiva CEO and co-founders with "No Boundaries" Innovation Award!'
				}
		        , {
					name: 'highlight'
					, cssClass: 'g3 h3'
					, label: 'Why I Kiva'
					, lightbox: {
				        isVideo: true
				        , urls : ['http://www.youtube.com/embed/LLRXbz0Jq6Y?rel=0&amp;wmode=opaque&amp;autoplay=1']
			        }
					, imgUrl: '/img/2011/why-i-kiva.jpg'
					, caption: 'Sep 15, 2011'
					, subject:  'Why I Kiva'
					, description: 'Kiva users tell us why they lend.'
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
					, label: 'Clinton Global Initiatives'
			        , link: 'http://kivanews.blogspot.com/2011/10/economist-honors-kiva-ceo-and-co.html'
					// @todo switch to the kiva.org/updates url when it gets fixed
					//, link: 'http://www.kiva.org/updates/kiva/2011/10/21/economist-honors-kiva-ceo-and-co.html'
					, imgUrl: '/img/2011/clinton-global-initiatives.jpg'
					, caption: 'June 29, 2011'
					, subject:  'Clinton Global Initiative'
					, description: 'Kiva, Visa and Accion USA announce a partnership to expand microfinance across the U.S. at CGI America'
				}
				, {
					name: 'highlight'
					, cssClass: 'g6 h4'
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
					, cssClass: 'g3 h4'
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
					, description: 'From Pittsburgh to Paris, Kiva lenders gathered to meet each other and celebrate Kiva\'s 6th birthday with parties in 10 cities.'
				}

			    , {
			        name: 'text'
			        , cssClass: 'g6 h3'
			        , value: ['"See what happens when 620k lenders fund 615k entrepreneurs, students & other microfinance borrowers around the world!" <a href="http://ow.ly/6ieV5" target="_blank">ow.ly/6ieV5</a>']
			        , label: 'Most popular tweet'
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , value: '147,811'
			        , label: 'Facebook Likes as of 12/31/2011'
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , value: '~110,000'
			        , label: 'New Twitter followers'
		        }
			]
        }
		, finances: {
			id: 'finances'
			, order: 9
			, blocks: [
				{
					name: 'sectionTitle'
					, cssClass: 'g9 h1'
					, title: 'Financial Health'
				}
				, {
					name: 'dataMetric'
					, cssClass: 'g4 h1'
					, label: 'Total revenue & Support'
					, value: '$13,665,463'
			        //, caption: ':up: vs 2010 $12,554,793'
			        , caption: 'Including gifts in kind'
				}
			    , {
			        name: 'text'
			        , cssClass: 'g2 h2'
			        , label: 'Donating to Kiva'
			        , value: '100% of every dollar you lend on Kiva goes directly toward funding loans, making it necessary to raise tax-deductible donations for operation costs. <a href="http://www.kiva.org/about/supportus/individual#topleft" target="_blank">Make a donation</a>.'
		        }
			    , {
					name: 'dataMetric'
					, cssClass: 'g4 h1'
					, label: 'Total expenses'
					, value: '$11,684,353'
				    , caption: 'Facilitated $89,481,825 in loans'
				}
			    , {
					name: 'dataGraph'
			        , cssClass: 'g3 h3'
			        , label: 'Revenue by donor source'
			        , imgUrl: '/img/2011/finances/revenue-by-donor-source.png'
			        , dataset: [
				        {
					        label: 'insitutions'
					        , value: '25%'
				        }
					    , {
					        label: 'Corporations'
					        , value: '25%'
				        }
					    , {
					        label: 'individuals [offline]'
					        , value: '25%'
				        }
					    , {
					        label: 'individuals [online]'
					        , value: '25%'
					    }
			        ]
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: 'Program Expense Ratio'
			        , value: '84%'
		        }
				, {
					name: 'dataMetric'
					, cssClass: 'g3 h1'
					, label: 'Loans made with a donation'
					, value: '42.6%'
	                , caption: ':down: vs 2010 43.3%'
				}
			    , {
					name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: '1st time lenders who donated'
			        , value: '50%'
			        , caption: ':down: vs 2010 51.2%'
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: 'Avg donation at checkout'
			        , value: '$7.36'
			        , caption: ':down: vs 2010 $7.82'
		        }
			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: 'Number of online Donors'
			        , value: '312,248'
			        , caption: ':up: vs 2010 256,651'
		        }

			    , {
			        name: 'dataMetric'
			        , cssClass: 'g3 h1'
			        , label: 'Fundraising efficiency'
			        , value: '$.04'
			        , caption: ':up: vs 2010 $.02'
		        }

			    , {
			        name: 'dataMetric'
			        , cssClass: 'g6 h1'
			        , label: 'Kiva\'s online revenue/total expenses'
			        , value: '68% Self-sufficiency'
		        }
				, {
		           name: 'highlight',
		           cssClass: 'g6 h3',
		           link: 'http://www.kiva.org/press/releases/release_20110209',
		           imgUrl: '/img/2011/charity-navigator.jpg',
		           caption: 'Feb 9, 2011',
		           subject:  'Kiva Receives Top Rating from Charity Navigator',
		           description: 'Based on sound fiscal management, exceeding industry standards'
				}
			    , {
			        id: 'osberg-tweet'
			        , name: 'text'
			        , cssClass: 'g3 h8'
			        , value: ['A disruptive innovator poised to address some of the world\'s most pressing issues, Kiva is a star in our portfolio of Skoll Awards for Social Entrepreneurship - made brighter by its ability to mobilize even greater resources to drive large-scale change.']
			        , label: 'Sally Osberg, President and CEO, Skoll Foundation, major Kiva funder'
		        }
				, {
					name: 'highlight'
					, cssClass: 'g2 h3'
					, label: 'Largest individual donor'
					, imgUrl: '/img/2011/anonymous-donor.jpg'
					, caption: 'Largest individual donor'
					, subject:  '250k'
					, description: 'Anonymous'
				}
				, {
					name: 'highlight'
					, cssClass: 'g2 h3'
					, label: 'Largest Institutional donor'
					, link: 'http://www.kiva.org/about/supportus/supporters/institutions'
					, imgUrl: '/img/2011/omidyar-network.jpg'
					, caption: 'Largest Institutional donor'
					, subject:  '$1.9M'
					, description: 'Omidyar Network'
				}
				, {
					name: 'highlight',
					cssClass: 'g2 h3',
					label: 'Largest Corporate donor',
					link: 'http://www.kiva.org/about/supportus/supporters',
					imgUrl: '/img/2011/visa.jpg',
					caption: 'Largest Corporate donor',
					subject:  '$525K',
					description: 'Visa'
				}
			    , {
			        name: 'dataGraph'
			        , cssClass: 'g6 h2'
			        , label: 'Avg donation when lending'
			        , imgUrl: '/img/2011/finances/donations-by-lend-amount.png'
		        }
				, {
					name: 'percentageGraph'
					, cssClass: 'g6 h1'
					, label: 'Expenses by department'
					, dataset: [
						{
						    label: 'Engineering'
						    , value: '25%'
						}
						, {
						    label: 'Portfolio Team'
						    , value: '18%'
						}
						, {
						    label: 'Marketing'
						    , value: '10%'
						}
						, {
						    label: 'Product'
						    , value: '8%'
						}
						, {
							label: 'Other'
						    , value: '39%'
						}
					]
				}
		        , {
			        name: 'dataGraph'
			        , cssClass: 'g9 h4'
			        , link: 'http://www.kiva.org/about/finances'
			        , imgUrl: '/img/2011/finances/balance-sheet.png'
		        }
			]
        }
    }
, function (error, sectionItems){});

module.exports = SectionProvider;