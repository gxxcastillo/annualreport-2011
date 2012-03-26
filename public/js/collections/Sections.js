define(['underscore', 'backbone', 'Section'], function (_, Backbone, Section) {
	return Backbone.Collection.extend({

		model: Section

		, url: '/'


		, setActive: function (id) {
			var activeSection = this.getActive();

			if (activeSection) {
				activeSection.set('isActive', false);
			}

			this.get(id).set('isActive', true);
			this.active = id;
		}


		, getActive: function () {
			return this.get(this.active);
		}


		, isLoaded: function (id) {
			return _.indexOf(this.loaded, id) > -1;
		}

		, isRendered: function () {
			return _.indexOf(this.rendered, id) > -1;
		}

		, sync: function (method, model) {
			console.log(arguments, 'sync');
		}

		, initialize: function () {
			this.active = '';
			this.rendered = [];
			this.loaded = [];
		}
	});
});