define(['underscore', 'backbone', 'Section'], function (_, Backbone, Section, undefined) {
	return Backbone.Collection.extend({

		model: Section

		, url: '/sectionList?raw=1'

		, getActive: function () {
			return this.get(this.active);
		}


		, setActive: function (sectionId) {
			var activeSection = this.getActive()
			, collectionObj = this
			, sectionModel = this.get(sectionId);

			// Has this collection already been already loaded?
			if (!sectionModel.has('blocks')) {
				$.get(sectionId, {raw: 1}, function (response) {
					var sectionModel = collectionObj.get(response.id);
					sectionModel.set('blocks', response.blocks);
				});
			}

			if (activeSection) {
				activeSection.set('isActive', false);
			}

			sectionModel.set('isActive', true);
			this.active = sectionId;
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
	});
});