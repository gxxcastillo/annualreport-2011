define(['underscore', 'backbone', 'Section'], function (_, Backbone, Section, undefined) {
	return Backbone.Collection.extend({

		model: Section

		, url: '/sectionList?raw=1'


		/**
		 *
		 * @returns {Backbone.Model}
		 */
		, getActive: function () {
			return this.get(this.active);
		}


		/**
		 * @params {Backbone.Model} sectionModel
		 * @returns {Backbone.Model}
		 */
		, setActive: function (sectionModel) {
			var activeSection = this.getActive()
			, collectionObj = this;

			// Has this collection already been already loaded?
			if (!sectionModel.has('blocks')) {
				$.get(sectionModel.id, {raw: 1}, function (response) {
					collectionObj
						.get(response.id)
						.set('blocks', response.blocks);
				});
			}

			if (activeSection) {
				activeSection.set('isActive', false);
			}

			this.active = sectionModel.id;
			sectionModel.set('isActive', true);

			return sectionModel;
		}


		/**
		 * @params {String} sectionId
		 * @returns {Backbone.Model}
		 */
		, setActiveById: function (sectionId) {
			return this.setActive(this.get(sectionId));
		}


		/**
		 * @params {Backbone.Model} [activeModel]
		 * @returs {Bakbone.Model|undefined}
		 */
		, prev: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel);

			if (i <= 0) {
				return;
			}

	        return this.at(i - 1);
	    }


		/**
		 * @params {Backbone.Model} activeModel
		 * @returs {Bakbone.Model|undefined}
		 */
		, next: function(activeModel) {
			activeModel = activeModel || this.getActive();

			var i = this.indexOf(activeModel);

			if (i >= this.length) {
				return;
			}

			return this.at(i + 1);
        }


		/**
		* Using the currently active section as context, sets the previous section as active
		*/
		, setPrevActive: function () {
			var activeModel = this.getActive()
			, prevModel = this.prev(activeModel);

			if (!_.isEmpty(prevModel)) {
				this.setActive(prevModel);
			}
		}


		/**
		 * Using the currently active section as context, sets the next section as active
		 */
		, setNextActive: function () {
			var activeModel = this.getActive()
			, nextModel = this.next(activeModel);

			if (!_.isEmpty(nextModel)) {
				this.setActive(nextModel);
			}
		}


		, sync: function (method, model) {
			console.log(arguments, 'sync');
		}
	});
});