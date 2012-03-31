# Model structure for blocks

## sectionTitle
```
{
	name: 'sectionTitle'
	, cssClass: 'g3 h1'
	, title: 'Borrowers'    // The display name for the section
}
```

## dataMetric
```
{
	name: 'dataMetric'
	, cssClass: 'g1 h1'
	, value: '4.5'
	, label: 'avg. time on site'
	, caption: 'vs. 2010 5.1 mins'
}
```

## text
```
{
	name: 'text'
	, cssClass: 'g1 h1'
	, label: 'Most popular tweet'
	, value: ''                                         // Can be a string OR...
	, value: ['', '', '']                               // An array of strings
	, context: 'Nov 9, 2,201 retweets & 500 favorites'  // [optional]
	, description:  ''  // [optional]
	, c2a:  {           // [optional]
		text: ''
		, link: ''
	}
}
```

## highlight
```
{
	name: 'highlight'
	, label: 'most prolific lender'
	, imgUrl: ''                // Url to the image that appears in the background
	, link: ''                  // Destination url when someone clicks on this block
	, lightbox: ['', '', '']    // One or more url's to images that should appear on click
	, caption: ''
	, subject: ''
	, description: ''
}
```

## profile
```
{
	name: 'profile'
	, imgUrl: ''        // Url to the user's profile picture
	, username: ''
	, label: ''
}
```

## map
```
{
    name: 'map'
    , cssClass: 'g3 h8'
    , label: 'Number of borrowers by countries (Top 5)'

    // Each segment is placed on top of the map at the specified coordindates
    , segments: [
        {
            position: {top: X, left: X}
            , dataset: [
                {img: '', label: ''}                        // There are times when you have an image
                , {sprite: {name: '', id: ''}, label: ''}   // There are times when you want a sprite
                , {label:'', value:''}                      // Sometimes you only need a label/value pair
            ]
        }
        , {
            position: {}
            , dataset: []
        }
    ]
    , caption: ['WORLDWIDE','per capita income: $x,xxx', 'Literacy rate: 84%', '*data from The World Bank']
}
```

## dataTable
```
{
	tables: [
		// This is the first table
		{
			label: ''
			, dataset: [
				// Each table contains an array of label/value pairs
				{
					label: ''
					, value: ''
				}
				, {
					label: ''
					, value: ''
				}
			]
		}

		// This is the second table
		, {
			label: ''
			, dataset: [
				{
					label: ''
					, value: ''
				}
				, {
					label: ''
					, value: ''
				}
			]
		}
	]
	caption: ''
}
```

## dataGraph
```
{
	name: 'dataGraph'
	, cssClass: 'g1 h1'
	, label: ''
	, dataset: [{label: 'farming', value: '0'},{}, {}, {}]
}
```

## custom
```
{
	name: 'custom'
	, cssClass: 'g1 h1'
	, content: ''
}
```
