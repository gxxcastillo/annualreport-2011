
/*
 * GET home page.
 */

// @todo
var model = {
	borrowers:  {
		moneyBorrowed: {
			2010: 400000
			, 2011: 4301001
		}

		, totalLoans: {
			2010: 2903
			, 2011: 4000
		}

		, gender:  {
			male: 60
			, female: 40
		}

		, topCountries: [
			{
				name: 'lebanon'
				, population: 4000000
				, gdp: 1000
			}
			, {
				name: 'nicaragua'
				, population: 3000000
				, gdp: 1600
			}
		]
	}
};

// Use this to feed the data in for each block
var sections = {
	borrowers: {
		title: 'Borrowers'
		, blocks: [
			{
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
			, {
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
		]
	}

	, lenders: {
		title: 'Lenders'
		, blocks: [
			{
				title: 'block title'
				, style: 'styleName'
				, bgImage: '/images/990541.jpg'
				, link: '#'
			}
		]
	}
}

exports.index = function(req, res){
  res.render('index', {title: 'dataviz'});
};

exports.section = function(req, res){
	// return json object representation of this view, broken up into "blocks".
	// Rendering will then iterate over each block.  (no frame)


	// does this need to be converted to JSON?
	res.send(sections[req.params.section]);
};