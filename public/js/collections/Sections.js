/**
 * Backbone Collection
 * http://documentcloud.github.com/backbone/#Collection
 *
 */
define(['underscore', 'backbone', 'Section']
, function (_, Backbone, Section, undefined) {
	return Backbone.Collection.extend({

		model: Section

		, url: '/'

		// @todo This can probably be done with a built in Backbone method
		, getFromServer: function (requestModel, activeSection) {
			var collection = this
			, requestIndex = this.indexOf(requestModel)
			, activeIndex
			, sectionsToRequest;

			if (!activeSection) {
				sectionsToRequest = [this.at(requestIndex)];
			} else {
				activeIndex = this.indexOf(activeSection);
				sectionsToRequest = activeIndex < requestIndex
					? this.toArray().slice(activeIndex + 1, requestIndex + 1)
			        : this.toArray().slice(requestIndex, activeIndex);
			}

			// @todo, rather than requesting one at a time, I should request all at once.
			// Otherwise, it gets tricky making sure sections don't get appended to the DOM out of order (b/c http request is async)
			_.each(sectionsToRequest, function (sectionModel) {
				$.get(sectionModel.id, {raw: 1}, function (response) {
					collection
						.get(response.id)
						.set('blocks', response.blocks);
				});
			});
		}


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
		, setActive: function (sectionModel, eventName) {
			var activeSection = this.getActive()

			// Has this section already been already loaded?
			// No blocks == Not loaded
			if (!sectionModel.has('blocks')) {
				this.getFromServer(sectionModel, activeSection);
			}

			if (activeSection) {
				activeSection.set({isActive: false, lastAlteredBy: eventName});
			}

			this.active = sectionModel.id;
			sectionModel.set({isActive: true, lastAlteredBy: eventName});

			return sectionModel;
		}


		/**
		 * @params {String} sectionId
		 * @returns {Backbone.Model}
		 */
		, setActiveById: function (sectionId, eventName) {
			return this.setActive(this.get(sectionId), eventName);
		}


		/**
		 * Get the previous model in the collection
		 *
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
		 * Get the next model in the collection
		 *
		 * @params {Backbone.Model} [activeModel]
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
		, setPrevActive: function (eventName) {
			var activeModel = this.getActive()
			, prevModel = this.prev(activeModel);

			if (!_.isEmpty(prevModel)) {
				this.setActive(prevModel, eventName);
			}
		}


		/**
		 * Using the currently active section as context, sets the next section as active
		 */
		, setNextActive: function (eventName) {
			var activeModel = this.getActive()
			, nextModel = this.next(activeModel);

			if (!_.isEmpty(nextModel)) {
				this.setActive(nextModel, eventName);
			}
		}


		, sync: function (method, model) {
			console.log(arguments, 'sync');
		}
	});
});