var modelData = {title: 'blockTpl', content: 'Blah blah blah'};

// instantiate isotope
$('#main').isotope({
     itemSelector: '.block'
});

var count;
var newBlock;

for (count = 0; count < 2; count++) {
	newBlock = new blockView({
		model: modelData
		, className: 'block g2'
	});

	$('#main').isotope( 'insert', newBlock.$el );
}

// Start appending
count = 0;
var intervalId = window.setInterval(function () {

	if (++count === 4) {
		window.clearInterval(intervalId);
	}

	newBlock = new blockView({
		model: modelData
		, className: 'block g2'
	});

	console.log(newBlock.$el);

	$('#main').isotope( 'insert', newBlock.$el ).isotope('appended', newBlock.$el );

}, 2000);