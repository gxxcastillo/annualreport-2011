# Model structure for blocks

## dataMetric
```
{
	name: 'dataMetric'
	, cssClass: 'g1 h1'
	, value: '4.5'
	, unit: 'Mins'
	, label: 'avg. time on site'
	, context: 'vs. 2010 5.1 mins'
}
```

## text
```
{
	name: 'text'
	, cssClass: 'g1 h1'
	, label: 'Most popular tweet'
	, headline: 'Even if just one micro-entrepreneur ends up getting a chance...'
	, context: Nov 9, 2,201 retweets & 500 favorites
}
```

## text (plain)
```
{
	name: 'text'
	, label: 'donating to Kiva'
	, description: 'some long text describing the stuff going on'
	, cta: 'make a loan today!' // [optional]
	, link: 'http://blahblah.html' // [optional]
}
```

## text (list)
```
{
	name: 'text'
	, cssclass: ''
	, label: ''
	, value: [] // This is our list
	, context: ''
}

## highlight
```
{
	name: 'highlight'
	, label: 'most prolific lender'
	, datum: '$77,777.00'
	, descriptor: 'Jericoacuara, Brazil'
	, isMedia: true // Boolean
}
```

## profile
```
{
	name: 'profile'
	, img: ''
	, username: ''
	, label: ''
}
```

## hover
```
{
	name: hover
	, cssclass: ''
	, headline: ''
	, dataset: [
		{
			label: ''
			, datum: ''
		}
	]
}
```

## wrapper
```
```

## img
```
```

## custom
```
```
