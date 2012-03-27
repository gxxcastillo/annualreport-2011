define(['underscore', 'backbone', 'Section'], function (_, Backbone, Section, undefined) {
	return Backbone.Collection.extend({

		model: Section

		, url: '/sectionList?raw=1'

		, getActive: function () {
			return this.get(this.active);
		}


		, setActive: function (id) {
			var activeSection = this.getActive()
			, collectionObj = this;

			if (activeSection) {
				activeSection.set('isActive', false);
			}

			// Has this collection already been already loaded?
			$.get(id, {raw: 1}, function (response) {
				var sectionModel = collectionObj.get(response.id);
				sectionModel.set('block', response.block);
			});

			this.get(id).set('isActive', true);
			this.active = id;
		}


		, prev: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel)

			if (i === 0) {
				return;
			}

	        return this.at(i - 1);
	    }


		, next: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel);

			if (i === this.length) {
				return;
			}

			return this.at(i + 1);
        }


		, setPrevActive: function () {
			var activeModel = this.getActive()
			, prevModel = this.prev(activeModel);

			if (prevModel) {
				this.setActive(prevModel.id);
			}
		}


		, setNextActive: function () {
			var activeModel = this.getActive()
			, nextModel = this.next(activeModel);

			if (nextModel) {
				this.setActive(nextModel.id);
			}
		}


		, sync: function (method, model) {
			console.log(arguments, 'sync');
		}

		, initialize: function () {
			this.trigger('init', [this]);

//			this.active = '';
//			this.rendered = [];
//			this.loaded = [];
		}
	});
});