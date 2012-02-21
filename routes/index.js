
/*
 * GET home page.
 */

var model = {
	title: 'DataViz'
	, borrowers:  {
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

exports.index = function(req, res){
  res.render('index', model);
};