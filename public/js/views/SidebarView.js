define(['jquery', 'underscore', 'backbone', 'dv', 'hogan', 'text!templates/sidebarView.hogan']
, function ($, _ ,Backbone, dv, hogan, tpl, undefined) {
	'use strict';

	return Backbone.View.extend({

		el: '#sidebar'

		, events: {
			'click .primaryNav a': 'navClickHandler'
		}


		, navClickHandler: function (event) {
			event.preventDefault();

			var sectionId = event.target.getAttribute('href');
			this.sections.setActiveById(sectionId, 'click');
		}


		/**
		 * Gets the url for the next & previous sections
		 */
		, getPrevNextUrls: function () {
			var activeSection = this.sections.getActive()
			, prev = this.sections.prev(activeSection)
			, next = this.sections.next(activeSection);

			return {
				prev: prev ? prev.id : prev
				, next: next ? next.id : next
			};
		}


		/**
		 * @todo This is not currently used.  Should we have an update function that only replaces elements instead of
		 * re-rendering?  It might make sense in the case of the sidebar as its not very complicated
		 *
		 * @params {String} activeSection
		 */
		, update: function (activeSection) {
			var prevNextUrls = this.getPrevNextUrls();

			// Remove the old active class
			this.$el.find('li.active').removeClass('active');

			// Add the new active class
			$('.nav-' + activeSection.id, this.$el).parent().addClass('active');

			// Update the prev/next links
			this.$prev.attr({href: prevNextUrls.prev, style: function () {
				return prevNextUrls.prev ?  'display: block' : 'display: none';
			}});

			this.$next.attr({href: prevNextUrls.next, style: function () {
				return prevNextUrls.next ?  'display: block' : 'display: none';
			}});
		}


		, template: function (data) {
			return hogan.compile(tpl).render(data);
		}


		/**
		 * Responsible for rendering the entire sidebar
		 *
		 * @params {Backbone.Model} [activeSectionModel] Tells the renderer which nav item to show as "active"
		 */
		, render: function (activeSectionModel) {
			activeSectionModel = activeSectionModel || this.sections.getActive() || {};

			var navListData = this.navListData
			, prevNextUrls = this.getPrevNextUrls();

			// Build the view data object
			_.each(navListData, function (navItem) {
				if (navItem.id === activeSectionModel.id) {
					navItem.classname = 'active';
				} else {
					navItem.classname = '';
				}
			});

			// Insert the new content into our view's DOM
			this.$el.html(this.template({
				fbShareUrl: dv.fbShareUrl // @todo %HACK%
				, prevId: prevNextUrls.prev
				, nextId: prevNextUrls.next
				, navItems: navListData
			}));

			this.$prev = this.$('.primaryNav .nav-prev');
			this.$next = this.$('.primaryNav .nav-next');
		}


		, initialize: function () {
			var sections = this.sections = this.collection
			, navListData = [];

			sections.forEach(function (section, i) {
				navListData[i] = {
					id: section.attributes.id
					, title: section.attributes.title
					, classname: ''
				};
			});

			this.navListData = navListData;
			this.render();
		}
	});
});
