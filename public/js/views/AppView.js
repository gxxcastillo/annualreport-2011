define(['jquery', 'underscore', 'backbone', 'dv', 'SidebarView', 'MainView']
, function ($, _, Backbone, dv, SidebarView, MainView) {

	var $footer = $('footer')
	, waypointsOpts = {
		offset: '80%'
	};

	return Backbone.View.extend({
		el: 'body'

		, events:  {
			'click footer .nav-next': 'nextClickHandler'
		}

		, nextClickHandler: function () {
			event.preventDefault();
			this.model.get('sections').setActiveById(event.target.getAttribute('href'), 'click');
		}

		, update: function () {
			var nextSection = this.model.get('sections').next();
			if (nextSection) {
				this.$nextLink.attr('href', nextSection.id);
			} else {
				this.$nextLink.hide();
			}
		}

		, initialize: function (options) {
			var annualReport = this.model;

			this.$nextLink = this.$('footer .nav-next');

			// Update default colorbox settings
			$.colorbox.settings.opacity = '.8';
			$.colorbox.settings.onOpen = function () {
				annualReport.set('lightboxIsOpen', true);
			};
			$.colorbox.settings.onClosed = function () {
				annualReport.set('lightboxIsOpen', false);
			};

			// Set styling specific to dynamicRendering (i.e. using jquery.isotope for rendering)
			if (!annualReport.get('renderAll')) {
				this.$el.addClass('dynamicRender');
			}

			// Instantiate our SidebarView and save a reference to it
			this.sidebarView = new SidebarView({collection: annualReport.get('sections')});

			// Instantiate our MainView and save a reference to it
			this.mainView = new MainView({model: annualReport});

			/** Disable infinite scroll.

			// Infinite Scroll
			$footer.waypoint(function () {
				// Remove the binding
				$footer.waypoint('remove');

				annualReport.get('sections').setNextActive('waypoint');

				// Now add it back
				$footer.waypoint(waypointsOpts);
			}, waypointsOpts);

			**/
		}
	});
});